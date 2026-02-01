"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, BrainCircuit } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

interface PhraseCategoryClientProps {
    category: {
        id: string;
        title: string;
        cnTitle: string;
    };
}

export default function PhraseCategoryClient({ category }: PhraseCategoryClientProps) {
    const { t, lang } = useI18n();

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-12">
                <Link
                    href="/phrases"
                    className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <h1 className="text-2xl font-bold">{lang === "cn" ? category.cnTitle : category.title}</h1>
                <div className="w-16"></div>
            </div>

            <div className="grid w-full max-w-xl gap-6">
                <Link
                    href={`/phrases/${category.id}/learn`}
                    className="group relative flex items-center p-6 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-pink-500 hover:shadow-lg transition-all"
                >
                    <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-full mr-6 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-8 h-8 text-pink-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-1">{t("mode.learn")}</h2>
                        <p className="text-gray-500">{t("learn.swipe")}</p>
                    </div>
                </Link>

                <Link
                    href={`/phrases/${category.id}/quiz`}
                    className="group relative flex items-center p-6 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-violet-500 hover:shadow-lg transition-all"
                >
                    <div className="p-4 bg-violet-100 dark:bg-violet-900/30 rounded-full mr-6 group-hover:scale-110 transition-transform">
                        <BrainCircuit className="w-8 h-8 text-violet-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-1">{t("mode.quiz")}</h2>
                        <p className="text-gray-500">{t("quiz.test")}</p>
                    </div>
                </Link>
            </div>
        </main>
    );
}
