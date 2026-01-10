"use client";

import Link from "next/link";
import { GRAMMAR_DATA } from "@/lib/grammar-data";
import { ArrowLeft, Book } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { ShineBorder } from "@/components/ui/shine-border";

export default function GrammarPage() {
    const { t, lang } = useI18n();

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-12">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <h1 className="text-2xl font-bold">{t("grammar.title")}</h1>
                <div className="w-16"></div>
            </div>

            <div className="w-full max-w-3xl space-y-12 pb-20">
                {GRAMMAR_DATA.map((topic, index) => (
                    <BlurFade key={topic.id} delay={index * 0.1}>
                        <ShineBorder className="w-full bg-white dark:bg-slate-900 rounded-3xl p-0 shadow-lg border-2 border-transparent overflow-hidden mb-8" color={["#FFBE7B", "#FE8FB5", "#A07CFE"]}>
                            <div className="flex flex-col md:flex-row h-full w-full">
                                {/* Image Section */}
                                <div className="md:w-1/3 relative h-48 md:h-auto">
                                    <img src={topic.imageUrl} alt={topic.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
                                        {lang === 'cn' ? topic.cnTitle : topic.title}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                    <p className="text-gray-500 mb-6 font-medium">
                                        {lang === 'cn' ? topic.cnDescription : topic.description}
                                    </p>

                                    <div className="space-y-4">
                                        {topic.examples.map((ex, i) => (
                                            <div key={i} className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{ex.en}</span>
                                                    <Book className="w-4 h-4 text-gray-300" />
                                                </div>
                                                <div className="text-gray-500 text-sm mb-2">{ex.cn}</div>
                                                <div className="text-xs text-orange-500 font-mono bg-orange-50 dark:bg-orange-900/20 inline-block px-2 py-1 rounded">
                                                    {lang === 'cn' ? (ex.explanationCn || ex.explanation) : ex.explanation}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ShineBorder>
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
