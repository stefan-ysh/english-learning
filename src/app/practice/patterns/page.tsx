"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { PATTERN_DATA } from "@/lib/pattern-data";
import { useI18n } from "@/lib/i18n-context";
import { usePracticeStore } from "@/lib/practice-store";

const pickRandom = <T,>(list: T[], count: number) => {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

export default function PatternPracticePage() {
    const { t, lang } = useI18n();
    const recordMistake = usePracticeStore((state) => state.recordMistake);
    const [items] = useState<typeof PATTERN_DATA>(() => pickRandom(PATTERN_DATA, 6));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const current = items[currentIndex];
    const progress = useMemo(() => {
        if (!items.length) return 0;
        return Math.round(((currentIndex + 1) / items.length) * 100);
    }, [currentIndex, items.length]);

    const handleSelect = (option: string) => {
        if (!current || selected) return;
        setSelected(option);
        const correct = option === current.answer;
        setIsCorrect(correct);
        if (!correct) {
            recordMistake({
                key: `pattern:${current.id}`,
                type: "pattern",
                prompt: current.base,
                correct: current.answer,
                userAnswer: option,
            });
        }
    };

    const handleNext = () => {
        setSelected(null);
        setIsCorrect(null);
        if (currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    if (!items.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse">
                    <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded mb-4"></div>
                    <div className="h-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-3xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-8">
                <Link href="/practice" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="text-sm font-bold">{t("practice.patterns")}</div>
                <div className="w-16"></div>
            </div>

            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4 text-xs font-bold text-gray-400">
                    <span>{t("practice.progress")}: {currentIndex + 1}/{items.length}</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-1 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    {lang === "cn" ? current.titleCn : current.title}
                </div>
                <div className="text-lg font-bold mb-3">{current.base}</div>
                <div className="text-sm text-gray-500 mb-5">
                    {lang === "cn" ? current.instructionCn : current.instruction}
                </div>

                <div className="space-y-3">
                    {current.options.map((opt) => {
                        const isSelected = selected === opt;
                        const isCorrectOption = opt === current.answer;
                        let style = "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700";
                        if (selected) {
                            if (isCorrectOption) {
                                style = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400";
                            } else if (isSelected) {
                                style = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400";
                            } else {
                                style = "opacity-50";
                            }
                        }
                        return (
                            <button
                                key={opt}
                                onClick={() => handleSelect(opt)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all active:scale-[0.99] ${style}`}
                                disabled={!!selected}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {isCorrect !== null && (
                    <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                        {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                    </div>
                )}

                {selected && (
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                        {lang === "cn" ? current.explanationCn : current.explanation}
                    </div>
                )}

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= items.length - 1}
                        className="px-4 py-2 rounded-full bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-600 active:scale-[0.98] disabled:opacity-40"
                    >
                        {t("practice.next")}
                    </button>
                </div>
            </div>
        </main>
    );
}
