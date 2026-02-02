"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { SwipeContainer } from "@/components/vocab/SwipeContainer";
import type { Category } from "@/lib/vocab-data";
import { PageHeader } from "@/components/ui/page-header";

interface VocabLearnClientProps {
    category: Category;
    oxfordB2?: Category;
    oxfordC1?: Category;
}

export default function VocabLearnClient({
    category,
    oxfordB2,
    oxfordC1,
}: VocabLearnClientProps) {
    const { t } = useI18n();
    const [mounted, setMounted] = useState(false);
    const [order, setOrder] = useState<"default" | "az">(() =>
        category.id.startsWith("oxford_") || category.id === "all-az" ? "az" : "default"
    );
    const [oxfordLevel, setOxfordLevel] = useState<"B2" | "C1">(() =>
        category.id.endsWith("c1") ? "C1" : "B2"
    );
    const [jumpIndex, setJumpIndex] = useState<number | null>(null);

    const isOxfordCategory = category.id.startsWith("oxford_");
    const activeCategory = isOxfordCategory
        ? oxfordLevel === "B2"
            ? oxfordB2 ?? category
            : oxfordC1 ?? category
        : category;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setJumpIndex(null);
    }, [category.id]);

    const displayItems = useMemo(() => {
        if (order === "az") {
            return [...activeCategory.items].sort((a, b) =>
                a.word.localeCompare(b.word, "en", { sensitivity: "base" })
            );
        }
        return activeCategory.items;
    }, [activeCategory.items, order]);

    const letterIndex = useMemo(() => {
        const map = new Map<string, number>();
        displayItems.forEach((item, index) => {
            const letter = item.word.charAt(0).toUpperCase();
            if (!map.has(letter) && letter >= "A" && letter <= "Z") {
                map.set(letter, index);
            }
        });
        return map;
    }, [displayItems]);

    if (!mounted) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 animate-pulse">
                    <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded mb-4"></div>
                    <div className="h-64 bg-gray-200 dark:bg-slate-800 rounded-2xl"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>

            <PageHeader
                backHref={`/vocab/${activeCategory.id}`}
                backLabel={t("btn.back")}
                title={t(`cat.${activeCategory.id}`)}
                className="max-w-5xl px-4 pt-4"
                rightSlot={
                    <div className="flex flex-wrap items-center gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-full p-1">
                        {isOxfordCategory && (
                            <>
                                <button
                                    onClick={() => setOxfordLevel("B2")}
                                    className={`px-3 py-1 text-xs rounded-full font-bold ${oxfordLevel === "B2" ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-500 dark:text-gray-300"}`}
                                >
                                    B2
                                </button>
                                <button
                                    onClick={() => setOxfordLevel("C1")}
                                    className={`px-3 py-1 text-xs rounded-full font-bold ${oxfordLevel === "C1" ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-500 dark:text-gray-300"}`}
                                >
                                    C1
                                </button>
                            </>
                        )}
                        <button
                            onClick={() => setOrder("default")}
                            className={`px-3 py-1 text-xs rounded-full font-bold ${order === "default" ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-500 dark:text-gray-300"}`}
                        >
                            {t("learn.order_default")}
                        </button>
                        <button
                            onClick={() => setOrder("az")}
                            className={`px-3 py-1 text-xs rounded-full font-bold ${order === "az" ? "bg-black text-white dark:bg-white dark:text-black" : "text-gray-500 dark:text-gray-300"}`}
                        >
                            {t("learn.order_az")}
                        </button>
                    </div>
                }
            />

            <div className="z-10 w-full max-w-md flex-1 flex flex-col items-center justify-center p-4 relative">
                <SwipeContainer
                    key={`${activeCategory.id}-${order}`}
                    items={displayItems}
                    categoryId={activeCategory.id}
                    jumpIndex={jumpIndex}
                />
                {order === "az" && (
                    <div className="absolute right-1 top-10 bottom-10 flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-gray-400">
                        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => {
                            const idx = letterIndex.get(letter);
                            const isActive = idx === jumpIndex;
                            return (
                                <button
                                    key={letter}
                                    onClick={() => idx !== undefined && setJumpIndex(idx)}
                                    className={`w-6 h-6 rounded-full flex items-center justify-center ${idx === undefined ? "opacity-30" : "hover:text-gray-700 dark:hover:text-gray-200"} ${isActive ? "bg-black text-white dark:bg-white dark:text-black" : ""}`}
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}
