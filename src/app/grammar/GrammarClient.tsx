"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Book, ChevronDown, Eye, EyeOff, Volume2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { speak } from "@/lib/tts";
import type { GrammarTopic } from "@/lib/grammar-data";

interface GrammarClientProps {
    topics: GrammarTopic[];
}

export default function GrammarClient({ topics }: GrammarClientProps) {
    const { t, lang } = useI18n();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [revealState, setRevealState] = useState<Record<string, { cn: boolean; exp: boolean }>>({});
    const [speakingKey, setSpeakingKey] = useState<string | null>(null);
    const [practiceSelection, setPracticeSelection] = useState<Record<string, string | null>>({});

    const allOptions = useMemo(
        () => topics.flatMap((topic) => topic.examples.map((ex) => ex.cn)),
        [topics]
    );

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const toggleReveal = (key: string, field: "cn" | "exp") => {
        setRevealState((prev) => ({
            ...prev,
            [key]: {
                cn: prev[key]?.cn ?? false,
                exp: prev[key]?.exp ?? false,
                [field]: !(prev[key]?.[field] ?? false),
            },
        }));
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex mb-12">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" /> {t("btn.back")}
                </Link>
                <h1 className="text-2xl font-bold">{t("grammar.title")}</h1>
                <div className="w-16"></div>
            </div>

            <div className="w-full max-w-3xl space-y-12 pb-20">
                {topics.map((topic, index) => {
                    const isExpanded = expandedId === topic.id;
                    return (
                        <BlurFade key={topic.id} delay={index * 0.1}>
                            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                                <ShineBorder
                                    className="w-full bg-white dark:bg-slate-900 rounded-3xl p-0 shadow-lg border-2 border-transparent overflow-hidden mb-8"
                                    color={["#FFBE7B", "#FE8FB5", "#A07CFE"]}
                                >
                                    <div className="flex flex-col md:flex-row h-full w-full">
                                        {/* Image Section */}
                                        <div className="md:w-1/3 relative h-48 md:h-auto">
                                            <Image
                                                src={topic.imageUrl}
                                                alt={topic.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20"></div>
                                            <div className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
                                                {lang === "cn" ? topic.cnTitle : topic.title}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                            <p className="text-gray-500 mb-6 font-medium">
                                                {lang === "cn" ? topic.cnDescription : topic.description}
                                            </p>

                                            <button
                                                onClick={() => toggleExpand(topic.id)}
                                                className="w-fit px-4 py-2 rounded-full text-sm font-bold bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                {isExpanded ? t("grammar.hide_examples") : t("grammar.show_examples")}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="space-y-4 mt-6 overflow-hidden"
                                                    >
                                                        {topic.examples.map((ex, i) => {
                                                            const key = `${topic.id}-${i}`;
                                                            const isCnVisible = revealState[key]?.cn ?? false;
                                                            const isExpVisible = revealState[key]?.exp ?? false;
                                                            return (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, y: 8 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                                                    className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700"
                                                                >
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{ex.en}</span>
                                                                        <Book className="w-4 h-4 text-gray-300" />
                                                                    </div>
                                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                                        <button
                                                                            onClick={() => {
                                                                                setSpeakingKey(key);
                                                                                speak(ex.en, {
                                                                                    onEnd: () => setSpeakingKey(null),
                                                                                    onStart: () => setSpeakingKey(key),
                                                                                });
                                                                            }}
                                                                            aria-pressed={speakingKey === key}
                                                                            disabled={speakingKey === key}
                                                                            className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-indigo-400 transition-colors flex items-center gap-1 disabled:opacity-60"
                                                                        >
                                                                            <Volume2
                                                                                className={`w-3 h-3 ${speakingKey === key ? "animate-pulse" : ""}`}
                                                                            />
                                                                            {t("grammar.listen")}
                                                                        </button>
                                                                        <button
                                                                            onClick={() => toggleReveal(key, "cn")}
                                                                            className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-indigo-400 transition-colors flex items-center gap-1"
                                                                        >
                                                                            {isCnVisible ? (
                                                                                <EyeOff className="w-3 h-3" />
                                                                            ) : (
                                                                                <Eye className="w-3 h-3" />
                                                                            )}
                                                                            {isCnVisible ? t("grammar.hide_translation") : t("grammar.show_translation")}
                                                                        </button>
                                                                        <button
                                                                            onClick={() => toggleReveal(key, "exp")}
                                                                            className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:border-indigo-400 transition-colors flex items-center gap-1"
                                                                        >
                                                                            {isExpVisible ? (
                                                                                <EyeOff className="w-3 h-3" />
                                                                            ) : (
                                                                                <Eye className="w-3 h-3" />
                                                                            )}
                                                                            {isExpVisible ? t("grammar.hide_analysis") : t("grammar.show_analysis")}
                                                                        </button>
                                                                    </div>
                                                                    <div className="text-gray-500 text-sm mb-2">
                                                                        {isCnVisible ? ex.cn : t("grammar.tap_reveal_cn")}
                                                                    </div>
                                                                    <div className="text-xs text-orange-500 font-mono bg-orange-50 dark:bg-orange-900/20 inline-block px-2 py-1 rounded">
                                                                        {isExpVisible
                                                                            ? lang === "cn"
                                                                                ? ex.explanationCn || ex.explanation
                                                                                : ex.explanation
                                                                            : t("grammar.tap_reveal_exp")}
                                                                    </div>
                                                                </motion.div>
                                                            );
                                                        })}

                                                        <GrammarPractice
                                                            topicId={topic.id}
                                                            prompt={topic.examples[0]?.en || ""}
                                                            correct={topic.examples[0]?.cn || ""}
                                                            allOptions={allOptions}
                                                            selection={practiceSelection[topic.id] ?? null}
                                                            onSelect={(value) =>
                                                                setPracticeSelection((prev) => ({ ...prev, [topic.id]: value }))
                                                            }
                                                            t={t}
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </ShineBorder>
                            </motion.div>
                        </BlurFade>
                    );
                })}
            </div>
        </main>
    );
}

function GrammarPractice({
    topicId,
    prompt,
    correct,
    allOptions,
    selection,
    onSelect,
    t,
}: {
    topicId: string;
    prompt: string;
    correct: string;
    allOptions: string[];
    selection: string | null;
    onSelect: (value: string) => void;
    t: (key: string, vars?: Record<string, string | number>) => string;
}) {
    const [options] = useState<string[]>(() => {
        if (!prompt || !correct) return [];
        const distractors = allOptions.filter((opt) => opt !== correct);
        const shuffledDistractors = [...distractors].sort(() => Math.random() - 0.5).slice(0, 2);
        return [correct, ...shuffledDistractors].sort(() => Math.random() - 0.5);
    });

    const isCorrect = selection ? selection === correct : null;

    if (!prompt || !correct) return null;
    if (options.length === 0) return null;

    return (
        <div className="mt-6 border-t border-gray-100 dark:border-slate-800 pt-4">
            <div className="text-xs uppercase text-gray-400 mb-2">{t("grammar.practice")}</div>
            <div className="text-sm font-bold mb-3">{prompt}</div>
            <div className="space-y-2">
                {options.map((opt) => {
                    const isSelected = selection === opt;
                    let style = "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700";
                    if (selection) {
                        if (opt === correct) {
                            style = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400";
                        } else if (isSelected) {
                            style = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400";
                        } else {
                            style = "opacity-50";
                        }
                    }
                    return (
                        <button
                            key={`${topicId}-${opt}`}
                            onClick={() => onSelect(opt)}
                            disabled={!!selection}
                            className={`w-full text-left p-3 rounded-xl border-2 transition-all active:scale-[0.99] ${style}`}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
            {selection && (
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                </div>
            )}
        </div>
    );
}
