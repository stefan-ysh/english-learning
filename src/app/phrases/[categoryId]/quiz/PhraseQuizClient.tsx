"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Trophy } from "lucide-react";
import { QuizCardSelect } from "@/components/vocab/QuizCardSelect";
import { useI18n } from "@/lib/i18n-context";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useActivityStore } from "@/lib/use-activity-store";
import { usePracticeStore } from "@/lib/practice-store";
import type { PhraseItem } from "@/lib/phrases-data";

type QuizQuestion = {
    item: PhraseItem;
    options: string[];
};

interface PhraseQuizClientProps {
    category: {
        id: string;
        title: string;
        cnTitle: string;
        image: string;
    };
    questions: QuizQuestion[];
}

export default function PhraseQuizClient({ category, questions }: PhraseQuizClientProps) {
    const { t, lang } = useI18n();
    const recordActivity = useActivityStore((state) => state.recordActivity);
    const hasHydrated = useActivityStore((state) => state.hasHydrated);
    const recordMistake = usePracticeStore((state) => state.recordMistake);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [pendingRecord, setPendingRecord] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (hasHydrated && pendingRecord) {
            recordActivity();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPendingRecord(false);
        }
    }, [hasHydrated, pendingRecord, recordActivity]);

    if (!mounted || questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <div className="animate-pulse text-gray-400">{t("quiz.loading")}</div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    // Adapter to match VocabItem interface expectations
    const vocabularyItemAdapter = {
        id: currentQuestion.item.id,
        word: currentQuestion.item.english,
        cn: currentQuestion.item.cn,
        phonetic: "",
        image: category.image,
        exampleEn: "",
        exampleCn: "",
        distractors: [],
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            finishQuiz(score + (isCorrect ? 1 : 0));
        }
    };

    const finishQuiz = (finalScore: number) => {
        setIsFinished(true);
        if (hasHydrated) {
            recordActivity();
        } else {
            setPendingRecord(true);
        }
        if (finalScore === questions.length) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    };

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-950">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 text-center max-w-md w-full">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-10 h-10 text-yellow-500" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{t("quiz.complete")}</h1>
                    <p className="text-gray-500 mb-6">
                        {t("quiz.score")}: {score} / {questions.length}
                    </p>

                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-8">
                        {percentage}%
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-4 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                        >
                            <RefreshCw className="w-5 h-5" /> {t("btn.tryAgain")}
                        </button>
                        <Link
                            href={`/phrases/${category.id}`}
                            className="block w-full py-4 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 rounded-xl font-bold transition-colors"
                        >
                            {t("btn.back")}
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-950 overflow-hidden relative p-4">
            {/* Header */}
            <div className="z-10 w-full max-w-md flex items-center justify-between font-mono text-sm mb-8 mt-4">
                <Link
                    href={`/phrases/${category.id}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-lg"
                >
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="font-bold text-lg bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">
                    {lang === "cn" ? category.cnTitle : category.title}
                </div>
            </div>

            <div className="w-full max-w-md flex-1 flex flex-col justify-center pb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="text-center mb-4 text-gray-400 font-mono text-sm">
                            {t("quiz.question")} {currentIndex + 1} / {questions.length}
                        </div>

                        <QuizCardSelect
                            item={vocabularyItemAdapter}
                            options={currentQuestion.options}
                            onAnswer={handleAnswer}
                            onMistake={(selected) =>
                                recordMistake({
                                    key: `phrase:${currentQuestion.item.id}`,
                                    type: "phrase-quiz",
                                    prompt: currentQuestion.item.english,
                                    correct: currentQuestion.item.cn,
                                    userAnswer: selected,
                                })
                            }
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
