"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { PHRASE_CATEGORIES } from "@/lib/phrases-data"; // Correct import source
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhraseSwipeContainer } from "@/components/phrases/PhraseSwipeContainer";
import { useI18n } from "@/lib/i18n-context";

interface PageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export default function PhraseLearnPage({ params }: PageProps) {
    const { categoryId } = use(params);
    const { t, lang } = useI18n();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

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
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="z-10 w-full p-4 flex items-center justify-between font-mono text-sm mb-4">
                <Link href={`/phrases/${category.id}`} className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-lg">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="font-bold text-lg bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">{lang === 'cn' ? category.cnTitle : category.title}</div>
                <div className="w-16"></div>
            </div>

            <div className="z-10 w-full max-w-md flex-1 flex flex-col items-center justify-center p-4">
                <PhraseSwipeContainer items={category.items} />
            </div>
        </main>
    );
}
