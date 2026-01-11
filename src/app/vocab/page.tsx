"use client";

import Link from "next/link";

import { VOCAB_DATA, getAllVocabCategory } from "@/lib/vocab-data";
import { CategoryCard } from "@/components/home/CategoryCard";
import { ArrowLeft } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";

export default function VocabPage() {
    const { t } = useI18n();
    const allCategory = getAllVocabCategory();

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-12">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <h1 className="text-2xl font-bold">{t("vocab.select")}</h1>
                <div className="w-16"></div> {/* Spacer for centering */}
            </div>

            <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <BlurFade key={allCategory.id} delay={0.05}>
                    <CategoryCard category={allCategory} />
                </BlurFade>
                {VOCAB_DATA.map((category, index) => (
                    <BlurFade key={category.id} delay={(index + 1) * 0.1}>
                        <CategoryCard category={category} />
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
