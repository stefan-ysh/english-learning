"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Timer, Trophy } from "lucide-react";
import { VOCAB_DATA } from "@/lib/vocab-data";
import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { useI18n } from "@/lib/i18n-context";
import { QuizCardSelect } from "@/components/vocab/QuizCardSelect";
import { usePracticeStore } from "@/lib/practice-store";

type QuickQuestion = {
    id: string;
    word: string;
    cn: string;
    phonetic?: string;
    options: string[];
    type: "vocab" | "phrase";
};

const pickRandom = <T,>(list: T[], count: number) => {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

export default function QuickQuizPage() {
    const { t } = useI18n();
    const recordMistake = usePracticeStore((state) => state.recordMistake);
    const [questions, setQuestions] = useState<QuickQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [duration, setDuration] = useState<120 | 180 | 300>(180);
    const [timeLeft, setTimeLeft] = useState(180);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const vocabPool = VOCAB_DATA.flatMap((c) => c.items);
        const phrasePool = PHRASE_CATEGORIES.flatMap((c) => c.items);

        const questionCount = duration === 120 ? 6 : duration === 300 ? 12 : 8;
        const vocabCount = Math.floor(questionCount / 2);
        const phraseCount = questionCount - vocabCount;

        const vocabQuestions = pickRandom(vocabPool, vocabCount).map((item) => {
            const other = pickRandom(
                vocabPool.filter((v) => v.id !== item.id).map((v) => v.cn),
                3
            );
            const options = pickRandom([item.cn, ...other], 4);
            return {
                id: item.id,
                word: item.word,
                cn: item.cn,
                phonetic: item.phonetic,
                options,
                type: "vocab",
            } as QuickQuestion;
        });

        const phraseQuestions = pickRandom(phrasePool, phraseCount).map((item) => {
            const other = pickRandom(
                phrasePool.filter((p) => p.id !== item.id).map((p) => p.cn),
                3
            );
            const options = pickRandom([item.cn, ...other], 4);
            return {
                id: item.id,
                word: item.english,
                cn: item.cn,
                options,
                type: "phrase",
            } as QuickQuestion;
        });

        setQuestions(pickRandom([...vocabQuestions, ...phraseQuestions], questionCount));
        setCurrentIndex(0);
        setScore(0);
        setFinished(false);
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        if (finished) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [finished, duration]);

    const current = questions[currentIndex];
    const progress = useMemo(() => {
        if (!questions.length) return 0;
        return Math.round(((currentIndex + 1) / questions.length) * 100);
    }, [currentIndex, questions.length]);

    const handleAnswer = (correct: boolean) => {
        if (correct) {
            setScore((prev) => prev + 1);
        }
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setFinished(true);
        }
    };

    if (!questions.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse">
                    <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded mb-4"></div>
                    <div className="h-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                </div>
            </div>
        );
    }

    if (finished || timeLeft <= 0) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 shadow-xl text-center max-w-md w-full">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{t("practice.quick_done")}</h1>
                    <p className="text-gray-500 mb-4">{t("quiz.score")}: {score} / {questions.length}</p>
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                        {percentage}%
                    </div>
                    <Link href="/practice" className="inline-flex px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold active:scale-95">
                        {t("practice.back_hub")}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-md w-full flex items-center justify-between font-mono text-sm lg:flex mb-6">
                <Link href="/practice" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="flex items-center gap-2 text-gray-500">
                    <Timer className="w-4 h-4" />
                    {timeLeft}s
                </div>
            </div>

            <div className="w-full max-w-md mb-4 flex items-center gap-2">
                {[120, 180, 300].map((secs) => (
                    <button
                        key={secs}
                        onClick={() => setDuration(secs as 120 | 180 | 300)}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${duration === secs ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400"}`}
                    >
                        {t("practice.duration", { minutes: Math.round(secs / 60) })}
                    </button>
                ))}
            </div>

            <div className="w-full max-w-md">
                <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-400">
                    <span>{t("practice.progress")}: {currentIndex + 1}/{questions.length}</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-1 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <QuizCardSelect
                item={{
                    id: current.id,
                    word: current.word,
                    cn: current.cn,
                    phonetic: current.phonetic || "",
                    image: "",
                }}
                options={current.options}
                onAnswer={handleAnswer}
                onMistake={(selected) =>
                    recordMistake({
                        key: `quick:${current.type}:${current.id}`,
                        type: "quick",
                        prompt: current.word,
                        correct: current.cn,
                        userAnswer: selected,
                    })
                }
            />
        </main>
    );
}
