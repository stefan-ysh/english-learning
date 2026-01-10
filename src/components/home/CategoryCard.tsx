import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Utensils, Carrot, Sparkles, BookOpen } from "lucide-react";
import { Category } from "@/lib/vocab-data";
import { useI18n } from "@/lib/i18n-context";

// Map string icon names to Lucide components
const IconMap: Record<string, React.ReactNode> = {
    broom: <Sparkles className="w-8 h-8 text-white" />,
    carrot: <Carrot className="w-8 h-8 text-white" />,
    utensils: <Utensils className="w-8 h-8 text-white" />,
    default: <BookOpen className="w-8 h-8 text-white" />,
};

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    const { t } = useI18n();
    const Icon = IconMap[category.icon] || IconMap.default;

    return (
        <Link href={`/vocab/${category.id}`} className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

            <div className={cn(
                "relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 text-left",
                "dark:bg-slate-900 dark:border-white"
            )}>
                <div className={cn(
                    "p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8",
                    category.color // Apply background color class if needed, or just accents
                )}>
                    {/* Decorative background circle or simple color block could go here */}
                    <div className={cn("absolute top-6 right-6 p-3 rounded-full shadow-sm", category.color)}>
                        {Icon}
                    </div>

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">{t(`cat.${category.id}`)}</h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">{t(`cat.${category.id}`)}</h3>

                    <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {category.items.length} {t("vocab.learn_count")}
                    </p>

                    <p className="mt-8 font-bold inline-flex items-center gap-2">
                        {t("btn.start")} <ArrowRight className="w-4 h-4" />
                    </p>
                </div>
            </div>
        </Link>
    );
}
