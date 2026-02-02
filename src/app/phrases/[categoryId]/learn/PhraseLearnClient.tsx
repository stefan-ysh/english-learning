"use client";

import { useEffect, useState } from "react";
import { PhraseSwipeContainer } from "@/components/phrases/PhraseSwipeContainer";
import { useI18n } from "@/lib/i18n-context";
import type { PhraseCategory } from "@/lib/phrases-data";
import { PageHeader } from "@/components/ui/page-header";

interface PhraseLearnClientProps {
    category: PhraseCategory;
}

export default function PhraseLearnClient({ category }: PhraseLearnClientProps) {
    const { t, lang } = useI18n();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

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

            <PageHeader
                backHref={`/phrases/${category.id}`}
                backLabel={t("btn.back")}
                title={lang === "cn" ? category.cnTitle : category.title}
                className="max-w-5xl px-4 pt-4"
            />

            <div className="z-10 w-full max-w-md flex-1 flex flex-col items-center justify-center p-4">
                <PhraseSwipeContainer items={category.items} />
            </div>
        </main>
    );
}
