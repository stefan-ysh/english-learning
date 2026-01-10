"use client";

import { useState, useEffect, use } from "react";
import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { ArrowLeft, RefreshCw, Trophy } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuizCardSelect } from "@/components/vocab/QuizCardSelect";
import { useI18n } from "@/lib/i18n-context";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti"; // Will utilize confetti here

interface PageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export default function PhraseQuizPage({ params }: PageProps) {
    const { categoryId } = use(params);
    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    const { t, lang } = useI18n();

    // Stable Quiz State
    const [questions, setQuestions] = useState<{ item: typeof PHRASE_CATEGORIES[0]['items'][0], options?: string[] }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (category) {
            // 1. Shuffle items
            const shuffled = [...category.items].sort(() => Math.random() - 0.5);

            // 2. Pre-calculate options
            const preparedQuestions = shuffled.map((item) => {
                // Generate distractors from OTHER phrases in the same category or others
                const otherItems = PHRASE_CATEGORIES
                    .flatMap(c => c.items)
                    .filter(i => i.id !== item.id)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(i => i.cn);

                // Shuffle options
                const options = [item.cn, ...otherItems].sort(() => Math.random() - 0.5);

                return {
                    item,
                    options
                };
            });

            setQuestions(preparedQuestions);
            setMounted(true);
        }
    }, [category]);

    if (!category) {
        return notFound();
    }

    if (!mounted) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
            <div className="animate-pulse text-gray-400">{t("quiz.loading")}</div>
        </div>;
    }

    const currentQuestion = questions[currentIndex];

    // For phrases, we can use the same QuizCardSelect Logic: 
    // word = phrase english, options = chinese translations
    // Adapter to match VocabItem interface slightly or just pass props directly matching QuizCardSelect expectations
    const vocabularyItemAdapter = {
        id: currentQuestion.item.id,
        word: currentQuestion.item.english,
        cn: currentQuestion.item.cn,
        // Mock properties not present in phrases but needed if reusing component strictly via type (though JS doesn't care if we pass what's needed)
        phonetic: "",
        image: category.image,
        exampleEn: "",
        exampleCn: "",
        distractors: []
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else {
                finishQuiz(score + (isCorrect ? 1 : 0));
            }
        }, 1500);
    };

    const finishQuiz = (finalScore: number) => {
        setIsFinished(true);
        // Trigger confetti
        if (finalScore === questions.length) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
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
                    <p className="text-gray-500 mb-6">{t("quiz.score")}: {score} / {questions.length}</p>

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
                <Link href={`/phrases/${category.id}`} className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-lg">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="font-bold text-lg bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">{lang === 'cn' ? category.cnTitle : category.title}</div>
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
                            options={currentQuestion.options!}
                            onAnswer={handleAnswer}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
