"use client";

import { useCallback, useState, useEffect } from "react";
import { PhraseItem, SyntaxPart } from "@/lib/phrases-data";
import { Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { speak } from "@/lib/tts";
import { cn } from "@/lib/utils";
import { ShineBorder } from "../ui/shine-border";
import { useI18n } from "@/lib/i18n-context";

interface PhraseCardProps {
    item: PhraseItem;
    autoPlay?: boolean;
}

const SyntaxColorMap: Record<string, string> = {
    subject: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    verb: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20",
    object: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
    adjective: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
    adverb: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
    preposition: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20",
    other: "text-gray-700 dark:text-gray-300",
};

export function PhraseCard({ item, autoPlay = false }: PhraseCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedPart, setSelectedPart] = useState<SyntaxPart | null>(null);
    const { t, lang } = useI18n();

    const handlePlay = useCallback(() => {
        setIsPlaying(true);
        speak(item.english, {
            onEnd: () => setIsPlaying(false)
        });
    }, [item.english]);

    useEffect(() => {
        if (autoPlay) {
            handlePlay();
        }
        setSelectedPart(null); // Reset selection on item change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item, autoPlay]); // handlePlay is now stable

    return (
        <ShineBorder className="bg-white dark:bg-slate-900 w-full max-w-md aspect-[3/4] relative flex flex-col items-center justify-between p-8 shadow-xl" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>

            {/* Top Icon Area */}
            <div className="w-full flex justify-between items-start">
                <div className="text-sm font-bold text-gray-400">{t("phrase")}</div>
                <button
                    onClick={handlePlay}
                    aria-pressed={isPlaying}
                    className={cn(
                        "p-3 rounded-full transition-all duration-300 active:scale-95",
                        isPlaying
                            ? "bg-pink-500 text-white scale-110 shadow-lg ring-4 ring-pink-200 dark:ring-pink-900"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-600 hover:bg-pink-100 hover:text-pink-500"
                    )}
                >
                    <Volume2 className={cn("w-6 h-6", isPlaying && "animate-pulse")} />
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-8">

                {/* Syntax Highlighted English */}
                <div className="flex flex-wrap justify-center gap-2 text-2xl font-bold text-center leading-relaxed">
                    {item.syntax.map((part, index) => (
                        <span
                            key={index}
                            className={cn(
                                "cursor-pointer px-1 rounded-md transition-all hover:scale-105 active:scale-95",
                                SyntaxColorMap[part.type] || SyntaxColorMap.other,
                                selectedPart === part && "ring-2 ring-offset-2 ring-current"
                            )}
                            onClick={() => setSelectedPart(part)}
                        >
                            {part.text}
                        </span>
                    ))}
                </div>

                {/* Chinese Translation */}
                <div className="text-xl text-gray-500 font-medium text-center">
                    {item.cn}
                </div>

            </div>

            {/* Analysis Info Panel (Bottom) */}
            <div className="w-full h-24 bg-gray-50 dark:bg-slate-800 rounded-xl p-4 flex items-center justify-center text-center transition-all">
                <AnimatePresence mode="wait">
                    {selectedPart ? (
                        <motion.div
                            key="explanation"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm"
                        >
                            <span className="font-bold uppercase text-xs opacity-70 block mb-1">
                                {selectedPart.type}
                            </span>
                            {lang === 'cn' ? (selectedPart.explanationCn || selectedPart.explanation) : selectedPart.explanation || "No explanation available."}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="hint"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm text-gray-400 italic"
                        >
                            {t("learn.grammar_hint")}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </ShineBorder>
    );
}
