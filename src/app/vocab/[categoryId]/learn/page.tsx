"use client";

import { use, useEffect, useState } from "react";
import { VOCAB_DATA } from "@/lib/vocab-data";
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

    useEffect(() => {
        setMounted(true);
    }, []);

    const category = VOCAB_DATA.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    if (!mounted) return null;

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-50 dark:bg-gray-950 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="z-10 w-full p-4 flex items-center justify-between font-mono text-sm mb-4">
                <Link href={`/vocab/${category.id}`} className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bg-white/50 backdrop-blur-sm p-2 rounded-lg">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="font-bold text-lg bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">{category.title}</div>
                <div className="w-16"></div>
            </div>

            <div className="z-10 w-full max-w-md flex-1 flex flex-col items-center justify-center p-4">
                <SwipeContainer items={category.items} categoryId={category.id} />
            </div>
        </main>
    );
}
