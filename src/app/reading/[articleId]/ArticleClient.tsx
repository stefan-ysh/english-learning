"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Bookmark, BookmarkCheck, Volume2 } from "lucide-react";
import { ReadingArticle, ReadingWord } from "@/lib/reading-data";
import { useI18n } from "@/lib/i18n-context";
import { speak } from "@/lib/tts";
import { useReadingStore } from "@/lib/reading-store";

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function ArticleClient({ article }: { article: ReadingArticle }) {
    const { t, lang } = useI18n();
    const markRead = useReadingStore((state) => state.markRead);
    const toggleBookmark = useReadingStore((state) => state.toggleBookmark);
    const bookmarks = useReadingStore((state) => state.bookmarks);
    const readArticles = useReadingStore((state) => state.readArticles);
    const hasHydrated = useReadingStore((state) => state.hasHydrated);
    const [selected, setSelected] = useState<ReadingWord | null>(null);
    const [showTranslation, setShowTranslation] = useState(true);
    const [speakingWord, setSpeakingWord] = useState<string | null>(null);

    const isBookmarked = bookmarks.includes(article.id);
    const isRead = readArticles.includes(article.id);

    useEffect(() => {
        if (article) {
            markRead(article.id);
        }
    }, [article, markRead]);



    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-3xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-8">
                <Link href="/reading" className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <div className="text-sm font-bold">{t("reading.title")}</div>
                <div className="w-16"></div>
            </div>

            <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-slate-800">
                <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{lang === "cn" ? article.cnTitle : article.title}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {lang === "cn" ? article.cnDescription : article.description}
                        </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600">
                        <BookOpen className="w-6 h-6" />
                    </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => setShowTranslation((prev) => !prev)}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 active:scale-95 transition-transform"
                    >
                        {showTranslation ? t("reading.hide_translation") : t("reading.show_translation")}
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        {hasHydrated && isRead ? t("reading.read") : t("reading.reading")}
                        <button
                            onClick={() => article && toggleBookmark(article.id)}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 active:scale-95"
                        >
                            {hasHydrated && isBookmarked ? <BookmarkCheck className="w-3 h-3" /> : <Bookmark className="w-3 h-3" />}
                            {hasHydrated && isBookmarked ? t("reading.bookmarked") : t("reading.bookmark")}
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {article.paragraphs.map((para) => {
                        const highlights = para.highlights;
                        const map = new Map(highlights.map((h) => [h.word.toLowerCase(), h]));
                        const pattern = highlights.length
                            ? new RegExp(`(${highlights.map((h) => escapeRegExp(h.word)).join("|")})`, "gi")
                            : null;
                        const parts = pattern ? para.en.split(pattern).filter(Boolean) : [para.en];

                        return (
                            <div key={para.id} className="space-y-2">
                                <p className="text-lg leading-7 text-gray-800 dark:text-gray-100">
                                    {parts.map((part, idx) => {
                                        const word = map.get(part.toLowerCase());
                                        if (!word) return <span key={`${para.id}-t-${idx}`}>{part}</span>;
                                        return (
                                            <button
                                                key={`${para.id}-w-${idx}`}
                                                onClick={() => setSelected(word)}
                                                className="px-1 rounded-md bg-amber-100/70 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-semibold active:scale-95 transition-transform"
                                            >
                                                {part}
                                            </button>
                                        );
                                    })}
                                </p>
                                {showTranslation && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{para.cn}</p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 border-t border-gray-100 dark:border-slate-800 pt-6">
                    <div className="text-sm font-bold mb-2">{t("reading.vocab")}</div>
                    {!selected && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">{t("reading.tap_word")}</div>
                    )}
                    {selected && (
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-4">
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-lg font-bold">{selected.word}</div>
                                <button
                                    onClick={() => {
                                        setSpeakingWord(selected.id);
                                        speak(selected.word, {
                                            onStart: () => setSpeakingWord(selected.id),
                                            onEnd: () => setSpeakingWord(null),
                                        });
                                    }}
                                    aria-pressed={speakingWord === selected.id}
                                    disabled={speakingWord === selected.id}
                                    className="p-2 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 active:scale-95 disabled:opacity-60"
                                >
                                    <Volume2 className={`w-4 h-4 ${speakingWord === selected.id ? "animate-pulse" : ""}`} />
                                </button>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {t("reading.definition")}: {lang === "cn" ? selected.meaningCn : selected.meaning}
                            </div>
                            {selected.example && (
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {t("reading.example")}: {lang === "cn" ? selected.exampleCn : selected.example}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-8 border-t border-gray-100 dark:border-slate-800 pt-6">
                    <div className="text-sm font-bold mb-3">{t("reading.phrases")}</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {article.keyPhrases.map((phrase) => (
                            <div key={phrase.id} className="rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                                <div className="text-sm font-bold">{phrase.word}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {lang === "cn" ? phrase.meaningCn : phrase.meaning}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-100 dark:border-slate-800 pt-6">
                    <div className="text-sm font-bold mb-3">{t("reading.quiz")}</div>

                    <div className="space-y-6">
                        {article.comprehension.map((q) => (
                            <QuizBlock
                                key={q.id}
                                title={t("reading.comprehension")}
                                question={lang === "cn" ? q.questionCn : q.question}
                                options={q.options}
                                answer={q.answer}
                                explanation={lang === "cn" ? q.explanationCn : q.explanation}
                                t={t}
                            />
                        ))}
                        {article.vocabQuiz.map((q) => (
                            <QuizBlock
                                key={q.id}
                                title={t("reading.vocab_quiz")}
                                question={q.word}
                                options={q.options}
                                answer={q.answer}
                                explanation={lang === "cn" ? q.explanationCn : q.explanation}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

function QuizBlock({
    title,
    question,
    options,
    answer,
    explanation,
    t,
}: {
    title: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    t: (key: string, vars?: Record<string, string | number>) => string;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const isCorrect = selected ? selected === answer : null;

    return (
        <div className="rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <div className="text-xs uppercase text-gray-400 mb-1">{title}</div>
            <div className="text-sm font-bold mb-3">{question}</div>
            <div className="space-y-2">
                {options.map((opt) => {
                    const isSelected = selected === opt;
                    const isRight = opt === answer;
                    let style = "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700";
                    if (selected) {
                        if (isRight) style = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400";
                        else if (isSelected) style = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400";
                        else style = "opacity-50";
                    }
                    return (
                        <button
                            key={opt}
                            onClick={() => setSelected(opt)}
                            disabled={!!selected}
                            className={`w-full text-left p-3 rounded-xl border-2 transition-all active:scale-[0.99] ${style}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
            {selected && (
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    {isCorrect ? t("quiz.correct") : t("quiz.incorrect")} · {explanation}
                </div>
            )}
        </div>
    );
}
