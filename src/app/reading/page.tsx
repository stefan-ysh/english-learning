"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, BookmarkCheck, Clock3, Eye } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { READING_ARTICLES } from "@/lib/reading-data";
import { useI18n } from "@/lib/i18n-context";
import { useReadingStore } from "@/lib/reading-store";
import { useMemo, useState } from "react";

export default function ReadingPage() {
    const { t, lang } = useI18n();
    const bookmarks = useReadingStore((state) => state.bookmarks);
    const readArticles = useReadingStore((state) => state.readArticles);
    const [levelFilter, setLevelFilter] = useState<"all" | "A1" | "A2" | "B1">("all");
    const [statusFilter, setStatusFilter] = useState<"all" | "read" | "bookmarked">("all");

    const filtered = useMemo(() => {
        return READING_ARTICLES.filter((article) => {
            if (levelFilter !== "all" && article.level !== levelFilter) return false;
            if (statusFilter === "read" && !readArticles.includes(article.id)) return false;
            if (statusFilter === "bookmarked" && !bookmarks.includes(article.id)) return false;
            return true;
        });
    }, [levelFilter, statusFilter, readArticles, bookmarks]);

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-12">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <h1 className="text-2xl font-bold">{t("reading.title")}</h1>
                <div className="w-16"></div>
            </div>

            <div className="w-full max-w-5xl flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setLevelFilter("all")}
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${levelFilter === "all" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400"}`}
                >
                    {t("reading.filter_all")}
                </button>
                {(["A1", "A2", "B1"] as const).map((lvl) => (
                    <button
                        key={lvl}
                        onClick={() => setLevelFilter(lvl)}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${levelFilter === lvl ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400"}`}
                    >
                        {lvl}
                    </button>
                ))}
                <div className="w-full h-px bg-gray-200 dark:bg-slate-800 my-2"></div>
                {(["all", "read", "bookmarked"] as const).map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${statusFilter === status ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400"}`}
                    >
                        {t(`reading.filter_${status}`)}
                    </button>
                ))}
            </div>

            <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((article, index) => {
                    const isBookmarked = bookmarks.includes(article.id);
                    const isRead = readArticles.includes(article.id);
                    return (
                    <BlurFade key={article.id} delay={index * 0.1}>
                        <Link
                            href={`/reading/${article.id}`}
                            className="group relative block rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-slate-900 p-6 transition-transform md:hover:-translate-y-1 active:scale-[0.99]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-bold text-gray-400">{article.level}</div>
                            </div>
                            <h2 className="text-xl font-bold mb-2">{lang === "cn" ? article.cnTitle : article.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {lang === "cn" ? article.cnDescription : article.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                {isRead && (
                                    <span className="inline-flex items-center gap-1">
                                        <Eye className="w-3 h-3" /> {t("reading.read")}
                                    </span>
                                )}
                                {isBookmarked && (
                                    <span className="inline-flex items-center gap-1">
                                        <BookmarkCheck className="w-3 h-3" /> {t("reading.bookmarked")}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Clock3 className="w-4 h-4" />
                                {t("reading.minutes", { minutes: article.minutes })}
                            </div>
                        </Link>
                    </BlurFade>
                );
                })}
            </div>
        </main>
    );
}
