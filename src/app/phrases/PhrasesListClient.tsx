"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import type { PhraseCategory } from "@/lib/phrases-data";
import { PageHeader } from "@/components/ui/page-header";

interface PhrasesListClientProps {
    categories: PhraseCategory[];
}

export default function PhrasesListClient({ categories }: PhrasesListClientProps) {
    const { t, lang } = useI18n();

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <PageHeader
                backHref="/"
                backLabel={t("btn.back")}
                title={t("phrases.title")}
                className="max-w-5xl"
            />

            <div className="grid w-full max-w-5xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {categories.map((category, index) => (
                    <BlurFade key={category.id} delay={index * 0.1}>
                        <Link
                            href={`/phrases/${category.id}`}
                            className="group relative block h-64 sm:h-80 w-full active:scale-[0.99] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        >
                            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white rounded-3xl"></span>

                            <div
                                className={cn(
                                    "relative flex h-full w-full flex-col justify-between border-2 border-black bg-white transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 rounded-3xl overflow-hidden",
                                    "dark:bg-slate-900 dark:border-white"
                                )}
                            >
                                {/* Image Background with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <NextImage
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover opacity-20 md:group-hover:opacity-30 transition-opacity"
                                    />
                                    <div
                                        className={cn(
                                            "absolute inset-0 opacity-20 md:group-hover:opacity-30 transition-opacity",
                                            category.color
                                        )}
                                    ></div>
                                </div>

                                <div className="relative z-10 p-6 flex flex-col h-full">
                                    <div className="flex justify-between items-start">
                                        <div
                                            className={cn(
                                                "p-3 rounded-full shadow-sm bg-white dark:bg-slate-800",
                                                "text-black dark:text-white"
                                            )}
                                        >
                                            <MessageCircle className="w-8 h-8" />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <h2 className="text-2xl font-bold mb-2">
                                            {lang === "cn" ? category.cnTitle : category.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                                            {lang === "cn" ? category.cnDescription : category.description}
                                        </p>

                                        <div className="flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all">
                                            {t("btn.start")} <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
