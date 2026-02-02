import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Utensils, Carrot, Sparkles, BookOpen, Home, GraduationCap, Briefcase, Stethoscope, Plane, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export interface CategorySummary {
    id: string;
    icon: string;
    color: string;
    cover: string;
    itemCount: number;
}

// Map string icon names to Lucide components
const IconMap: Record<string, React.ReactNode> = {
    broom: <Sparkles className="w-8 h-8 text-white" />,
    carrot: <Carrot className="w-8 h-8 text-white" />,
    utensils: <Utensils className="w-8 h-8 text-white" />,
    home: <Home className="w-8 h-8 text-white" />,
    school: <GraduationCap className="w-8 h-8 text-white" />,
    briefcase: <Briefcase className="w-8 h-8 text-white" />,
    medical: <Stethoscope className="w-8 h-8 text-white" />,
    plane: <Plane className="w-8 h-8 text-white" />,
    cpu: <Cpu className="w-8 h-8 text-white" />,
    default: <BookOpen className="w-8 h-8 text-white" />,
};

interface CategoryCardProps {
    category: CategorySummary;
}

export function CategoryCard({ category }: CategoryCardProps) {
    const { t } = useI18n();
    const Icon = IconMap[category.icon] || IconMap.default;

    return (
        <Link
            href={`/vocab/${category.id}`}
            className="group relative block h-64 sm:h-80 lg:h-96 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

            <div className={cn(
                "relative flex h-full transform items-end border-2 border-black bg-white transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 text-left",
                "dark:bg-slate-900 dark:border-white"
            )} style={{ backgroundImage: `url(${category.cover})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-black/25 md:bg-black/0 md:group-hover:bg-black/35 transition-colors"></div>
                <div className={cn("absolute top-6 right-6 p-3 rounded-full shadow-sm z-10", category.color)}>
                    {Icon}
                </div>
                <div className={cn(
                    "relative p-4 !pt-0 transition-opacity opacity-0 md:opacity-100 md:group-hover:absolute md:group-hover:opacity-0 sm:p-6 lg:p-8",
                    category.color // Apply background color class if needed, or just accents
                )}>

                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">{t(`cat.${category.id}`)}</h2>
                </div>

                <div className="absolute p-4 opacity-100 md:opacity-0 transition-opacity md:group-hover:relative md:group-hover:opacity-100 sm:p-6 lg:p-8 text-white">
                    <h3 className="mt-4 text-xl font-semibold sm:text-2xl drop-shadow-sm">{t(`cat.${category.id}`)}</h3>

                    <p className="mt-4 text-sm sm:text-base text-white/80">
                        {category.itemCount} {t("vocab.learn_count")}
                    </p>

                    <p className="mt-8 inline-flex items-center gap-2 text-white text-sm font-bold bg-white/15 px-3 py-1.5 rounded-full">
                        {t("btn.start")} <ArrowRight className="w-4 h-4" />
                    </p>
                </div>
            </div>
        </Link>
    );
}
