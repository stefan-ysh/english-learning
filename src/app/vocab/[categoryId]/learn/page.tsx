"use client";

import { useEffect, useMemo, useState } from "react";
import { use } from "react";
import { getVocabCategory } from "@/lib/vocab-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SwipeContainer } from "@/components/vocab/SwipeContainer";
import { useI18n } from "@/lib/i18n-context";

interface PageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export default function LearnPage({ params }: PageProps) {
    const { categoryId } = use(params);
    const { t } = useI18n();
    const [mounted, setMounted] = useState(false);
    const [order, setOrder] = useState<"default" | "az">(() => (categoryId.startsWith("oxford_") || categoryId === "all-az") ? "az" : "default");
    const [oxfordLevel, setOxfordLevel] = useState<"B2" | "C1">(() => categoryId.endsWith("c1") ? "C1" : "B2");
    const [jumpIndex, setJumpIndex] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const category = getVocabCategory(categoryId);
    const isOxfordCategory = categoryId.startsWith("oxford_");

    const activeOxfordId = `oxford_${oxfordLevel.toLowerCase()}`;
    const activeCategory = isOxfordCategory ? getVocabCategory(activeOxfordId) : category;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setJumpIndex(null);
    }, [categoryId]);

    if (!activeCategory) {
        notFound();
    }

    const displayItems = useMemo(() => {
        if (order === "az") {
            return [...activeCategory.items].sort((a, b) => a.word.localeCompare(b.word, "en", { sensitivity: "base" }));
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

            <div className="z-10 w-full p-4 flex flex-wrap items-center justify-between gap-3 font-mono text-sm mb-4">
                <Link href={`/vocab/${activeCategory.id}`} className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-lg">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="font-bold text-lg bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">{t(`cat.${activeCategory.id}`)}</div>
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
            </div>

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
