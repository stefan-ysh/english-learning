"use client";

import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";
import { usePracticeStore } from "@/lib/practice-store";
import { useI18n } from "@/lib/i18n-context";

export default function MistakesPage() {
    const { t } = useI18n();
    const mistakes = usePracticeStore((state) => state.mistakes);
    const clearMistakes = usePracticeStore((state) => state.clearMistakes);
    const removeMistake = usePracticeStore((state) => state.removeMistake);
    const hasHydrated = usePracticeStore((state) => state.hasHydrated);

    const entries = Object.values(mistakes).sort((a, b) => b.count - a.count);
    const grouped = entries.reduce<Record<string, typeof entries>>((acc, entry) => {
        acc[entry.type] = acc[entry.type] || [];
        acc[entry.type].push(entry);
        return acc;
    }, {});

    if (!hasHydrated) {
        return (
            <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
                <div className="w-full max-w-3xl space-y-4">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 text-center text-gray-500 animate-pulse">
                        {t("common.loading")}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-3xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-8">
                <Link href="/practice" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="text-sm font-bold">{t("practice.mistakes")}</div>
                <button
                    onClick={clearMistakes}
                    className="text-xs font-bold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    {t("practice.clear_all")}
                </button>
            </div>

            <div className="w-full max-w-3xl space-y-4">
                {entries.length === 0 && (
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-800 text-center text-gray-500">
                        {t("practice.no_mistakes")}
                    </div>
                )}

                {Object.entries(grouped).map(([type, items]) => (
                    <div key={type} className="space-y-3">
                        <div className="text-xs uppercase tracking-widest text-gray-400">{type}</div>
                        {items.map((entry) => (
                            <div key={entry.key} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-lg font-bold">{entry.prompt}</div>
                                        <div className="text-sm text-gray-500">{t("practice.correct")}: {entry.correct}</div>
                                        <div className="text-sm text-gray-500">{t("practice.last_answer")}: {entry.userAnswer}</div>
                                    </div>
                                    <button
                                        onClick={() => removeMistake(entry.key)}
                                        className="text-gray-400 hover:text-red-500 transition-colors active:scale-95"
                                        title={t("practice.remove")}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {t("practice.mistake_count")}: {entry.count}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}
