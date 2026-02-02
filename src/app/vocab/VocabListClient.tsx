"use client";

import { CategoryCard, CategorySummary } from "@/components/home/CategoryCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { PageHeader } from "@/components/ui/page-header";

interface VocabListClientProps {
    allCategory: CategorySummary;
    categories: CategorySummary[];
}

export default function VocabListClient({ allCategory, categories }: VocabListClientProps) {
    const { t } = useI18n();

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <PageHeader
                backHref="/"
                backLabel={t("btn.back")}
                title={t("vocab.select")}
                className="max-w-5xl"
            />

            <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
                <BlurFade key={allCategory.id} delay={0.05}>
                    <CategoryCard category={allCategory} />
                </BlurFade>
                {categories.map((category, index) => (
                    <BlurFade key={category.id} delay={(index + 1) * 0.1}>
                        <CategoryCard category={category} />
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
