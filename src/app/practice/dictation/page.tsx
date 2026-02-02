"use client";

import { useMemo, useState } from "react";
import { Volume2, CheckCircle2, XCircle } from "lucide-react";
import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { useI18n } from "@/lib/i18n-context";
import { speak } from "@/lib/tts";
import { usePracticeStore } from "@/lib/practice-store";
import { PageHeader } from "@/components/ui/page-header";

const pickRandom = <T,>(list: T[], count: number) => {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

const normalizeAnswer = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[！？。。，、；：‘’“”"'.?!,;:()【】\[\]{}<>]/g, "")
        .replace(/\s+/g, " ")
        .trim();
};

export default function DictationPage() {
    const { t } = useI18n();
    const recordMistake = usePracticeStore((state) => state.recordMistake);
    const [items] = useState<typeof PHRASE_CATEGORIES[0]["items"]>(() => pickRandom(PHRASE_CATEGORIES.flatMap((c) => c.items), 6));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const current = items[currentIndex];

    const handlePlay = () => {
        if (!current) return;
        speak(current.english, {
            onStart: () => setIsPlaying(true),
            onEnd: () => setIsPlaying(false),
        });
    };

    const handleCheck = () => {
        if (!current) return;
        const normalized = normalizeAnswer(answer);
        const target = normalizeAnswer(current.english);
        const correct = normalized === target;
        setIsCorrect(correct);
        if (!correct) {
            recordMistake({
                key: `dictation:${current.id}`,
                type: "dictation",
                prompt: current.cn,
                correct: current.english,
                userAnswer: answer,
            });
        }
    };

    const handleNext = () => {
        setAnswer("");
        setIsCorrect(null);
        setShowAnswer(false);
        if (currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const progress = useMemo(() => {
        if (!items.length) return 0;
        return Math.round(((currentIndex + 1) / items.length) * 100);
    }, [currentIndex, items.length]);

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
            <PageHeader
                backHref="/practice"
                backLabel={t("btn.back")}
                title={t("practice.dictation")}
                className="max-w-3xl"
            />

            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-4 text-xs font-bold text-gray-400">
                    <span>{t("practice.progress")}: {currentIndex + 1}/{items.length}</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-1 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-pink-500 transition-all" style={{ width: `${progress}%` }}></div>
                </div>

                <button
                    onClick={handlePlay}
                    aria-pressed={isPlaying}
                    disabled={isPlaying}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.99] disabled:opacity-70 ${isPlaying ? "bg-pink-500 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200"}`}
                >
                    <Volume2 className={isPlaying ? "w-5 h-5 animate-pulse" : "w-5 h-5"} />
                    {t("practice.play_audio")}
                </button>

                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder={t("practice.type_here")}
                    className="mt-6 w-full min-h-[120px] rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                {isCorrect !== null && (
                    <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                        {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                    </div>
                )}

                {showAnswer && (
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                        {t("practice.answer")}: <span className="font-semibold">{current.english}</span>
                    </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                    <button
                        onClick={() => setShowAnswer((prev) => !prev)}
                        className="text-sm font-bold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        {showAnswer ? t("practice.hide_answer") : t("practice.show_answer")}
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={handleCheck}
                            className="px-4 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-gray-800 active:scale-[0.98] transition-transform"
                        >
                            {t("practice.check")}
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= items.length - 1}
                            className="px-4 py-2 rounded-full bg-gray-100 text-gray-900 text-sm font-bold hover:bg-gray-200 active:scale-[0.98] disabled:opacity-40 transition-transform"
                        >
                            {t("practice.next")}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
