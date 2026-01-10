"use client";

import { useState, useEffect } from "react";
import { VocabItem } from "@/lib/vocab-data";
import { Volume2, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { speak } from "@/lib/tts";

import { useI18n } from "@/lib/i18n-context";

interface QuizCardSelectProps {
    item: VocabItem;
    options: string[]; // Options are Chinese meanings
    onAnswer: (isCorrect: boolean) => void;
    onMistake?: (selected: string) => void;
}

export function QuizCardSelect({ item, options, onAnswer, onMistake }: QuizCardSelectProps) {
    const { t } = useI18n();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // Play audio on mount
        playAudio();
        // Reset state when item changes
        setSelectedOption(null);
        setIsCorrect(null);
        setIsSpeaking(false);
        setShowHint(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item.id]);

    const playAudio = () => {
        speak(item.word, {
            onStart: () => setIsSpeaking(true),
            onEnd: () => setIsSpeaking(false),
        });
    };

    const handleSelect = (option: string) => {
        if (selectedOption) return; // Prevent multiple clicks

        setSelectedOption(option);
        const correct = option === item.cn;
        setIsCorrect(correct);
        if (!correct && onMistake) {
            onMistake(option);
        }

        // Short delay to show feedback before moving on
        setTimeout(() => {
            onAnswer(correct);
        }, 600);
    };

    const words = item.word.trim().split(/\s+/);
    const hintLines = [
        item.exampleEn ? `${t("quiz.hint_example")}: ${item.exampleEn}` : null,
        `${t("quiz.hint_starts_with")}: ${item.word.slice(0, 1)}`,
        `${t("quiz.hint_word_count")}: ${words.length}`,
        `${t("quiz.hint_length")}: ${item.word.length}`,
    ].filter(Boolean) as string[];

    return (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border-2 border-gray-100 dark:border-slate-800 flex flex-col items-center">
            <div className="mb-8 text-center">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{t("quiz.select_meaning")}</h2>
                <div className="flex flex-col items-center gap-4">
                    <button
                        onClick={playAudio}
                        aria-pressed={isSpeaking}
                        className={`w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-500 hover:scale-110 active:scale-95 transition-transform ${isSpeaking ? "ring-2 ring-pink-300" : ""}`}
                    >
                        <Volume2 className={`w-8 h-8 ${isSpeaking ? "animate-pulse" : ""}`} />
                    </button>
                    <h3 className="text-4xl font-bold">{item.word}</h3>
                    <p className="text-gray-400 font-mono">{item.phonetic}</p>
                </div>
            </div>

            {selectedOption && (
                <div className={cn(
                    "mb-4 px-3 py-1 rounded-full text-sm font-bold",
                    isCorrect ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                )}>
                    {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                </div>
            )}

            <button
                onClick={() => setShowHint((prev) => !prev)}
                className="mb-4 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 active:scale-95 transition-transform"
            >
                {showHint ? t("quiz.hide_hint") : t("quiz.show_hint")}
            </button>

            {showHint && (
                <div className="mb-4 w-full text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800 rounded-xl p-3">
                    {hintLines.map((line) => (
                        <div key={line}>{line}</div>
                    ))}
                </div>
            )}

            <div className="w-full space-y-3">
                {options.map((option, index) => {
                    const isSelected = selectedOption === option;
                    const isTarget = option === item.cn;

                    // Determine button style based on state
                    let buttonStyle = "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-slate-700";
                    let icon = null;

                    if (selectedOption) {
                        if (isTarget) {
                            // This is the correct answer
                            buttonStyle = "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400";
                            icon = <CheckCircle className="w-5 h-5 text-green-500" />;
                        } else if (isSelected && !isCorrect) {
                            // Improved User Feedback: User selected wrong answer
                            buttonStyle = "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400";
                            icon = <XCircle className="w-5 h-5 text-red-500" />;
                        } else {
                            // Other unselected options
                            buttonStyle = "opacity-50";
                        }
                    }

                    return (
                        <motion.button
                            key={index}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSelect(option)}
                            disabled={!!selectedOption}
                            className={cn(
                                "w-full p-4 rounded-xl border-2 text-left font-medium transition-all flex items-center justify-between",
                                buttonStyle
                            )}
                        >
                            <span>{option}</span>
                            {icon}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
