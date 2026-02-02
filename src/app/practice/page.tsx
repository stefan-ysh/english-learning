"use client";

import Link from "next/link";
import { Headphones, Shuffle, Timer, NotebookPen } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { PageHeader } from "@/components/ui/page-header";

export default function PracticeHubPage() {
    const { t } = useI18n();

    const cards = [
        {
            href: "/practice/dictation",
            title: t("practice.dictation"),
            desc: t("practice.dictation_desc"),
            icon: <Headphones className="w-6 h-6 text-pink-500" />,
        },
        {
            href: "/practice/patterns",
            title: t("practice.patterns"),
            desc: t("practice.patterns_desc"),
            icon: <Shuffle className="w-6 h-6 text-indigo-500" />,
        },
        {
            href: "/practice/quick",
            title: t("practice.quick"),
            desc: t("practice.quick_desc"),
            icon: <Timer className="w-6 h-6 text-emerald-500" />,
        },
        {
            href: "/practice/mistakes",
            title: t("practice.mistakes"),
            desc: t("practice.mistakes_desc"),
            icon: <NotebookPen className="w-6 h-6 text-orange-500" />,
        },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <PageHeader
                backHref="/"
                backLabel={t("btn.back")}
                title={t("practice.title")}
                className="max-w-5xl"
            />

            <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2">
                {cards.map((card, index) => (
                    <BlurFade key={card.href} delay={index * 0.1}>
                        <Link
                            href={card.href}
                            className="group relative block rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-slate-900 p-6 transition-transform md:hover:-translate-y-1 active:scale-[0.99]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-slate-800">
                                    {card.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-1">{card.title}</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
                                </div>
                            </div>
                        </Link>
                    </BlurFade>
                ))}
            </div>
        </main>
    );
}
