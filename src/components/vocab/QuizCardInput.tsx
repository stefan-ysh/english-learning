"use client";

import { useEffect, useState } from "react";
import { VocabItem } from "@/lib/vocab-data";
import { Lightbulb, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";

interface QuizCardInputProps {
    item: VocabItem;
    onAnswer: (isCorrect: boolean) => void;
    onMistake?: (answer: string) => void;
}

export function QuizCardInput({ item, onAnswer }: QuizCardInputProps) {
    const { t } = useI18n();
    const buildShuffledLetters = (word: string) => {
        const letters = word.split('').map((char, index) => ({
            char,
            id: index
        }));
        return [...letters].sort(() => Math.random() - 0.5);
    };

    const [shuffledLetters, setShuffledLetters] = useState<{ char: string, id: number }[]>(() => buildShuffledLetters(item.word));
    const [userInput, setUserInput] = useState<string[]>([]);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        setShuffledLetters(buildShuffledLetters(item.word));
        setUserInput([]);
        setIsCompleted(false);
        setIsCorrect(null);
    }, [item]);

    const checkCompletion = (input: string[]) => {
        if (input.length === item.word.length) {
            const currentWord = input.join('');
            const correct = currentWord.toLowerCase() === item.word.toLowerCase();
            setIsCompleted(true);
            setIsCorrect(correct);
            if (!correct && onMistake) {
                onMistake(currentWord);
            }

            setTimeout(() => onAnswer(correct), 600);
        }
    };

    const pushChar = (charObj: { char: string, id: number }) => {
        if (isCompleted) return;

        const newShuffled = shuffledLetters.filter(l => l.id !== charObj.id);
        const newInput = [...userInput, charObj.char];

        setShuffledLetters(newShuffled);
        setUserInput(newInput);
        checkCompletion(newInput);
    };

    const handleChipClick = (charObj: { char: string, id: number }) => {
        pushChar(charObj);
    };

    const handleHint = () => {
        if (isCompleted) return;
        const nextIndex = userInput.length;
        if (nextIndex >= item.word.length) return;

        const nextChar = item.word[nextIndex];
        const matchIndex = shuffledLetters.findIndex((l) => l.char.toLowerCase() === nextChar.toLowerCase());
        if (matchIndex === -1) return;
        pushChar(shuffledLetters[matchIndex]);
    };

    const handleReset = () => {
        setShuffledLetters(buildShuffledLetters(item.word));
        setUserInput([]);
        setIsCompleted(false);
        setIsCorrect(null);
    };

    const handleBackspace = () => {
        if (userInput.length === 0 || isCompleted) return;
        const lastChar = userInput[userInput.length - 1];

        const newInput = userInput.slice(0, -1);
        setShuffledLetters(prev => [...prev, { char: lastChar, id: Date.now() }]);
        setUserInput(newInput);
        // Note: Backspace won't trigger completion check as length decreases
    };

    return (
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border-2 border-gray-100 dark:border-slate-800 flex flex-col items-center">
            <div className="mb-6 text-center">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{t("quiz.spell_word")}</h2>
                <Image
                    src={item.image}
                    alt={t("quiz.image_hint")}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-xl mx-auto mb-4 shadow-sm"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{item.cn}</h3>
            </div>

            {isCorrect !== null && (
                <div className={cn(
                    "mb-4 px-3 py-1 rounded-full text-sm font-bold",
                    isCorrect ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                )}>
                    {isCorrect ? t("quiz.correct") : t("quiz.incorrect")}
                </div>
            )}

            {/* Input Display Area */}
            <div className="flex flex-wrap gap-2 justify-center mb-8 min-h-[60px]">
                {Array.from({ length: item.word.length }).map((_, i) => {
                    const char = userInput[i];
                    const isFilled = char !== undefined;

                    return (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={cn(
                                "w-10 h-12 flex items-center justify-center text-2xl font-bold border-b-4 rounded-md transition-colors",
                                isFilled ? "border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20" : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                            )}
                        >
                            {char}
                        </motion.div>
                    );
                })}
            </div>

            {/* Chips Area */}
            <div className="flex flex-wrap gap-3 justify-center">
                <AnimatePresence>
                    {shuffledLetters.map((letterObj) => (
                        <motion.button
                            key={letterObj.id}
                            layoutId={`chip-${letterObj.id}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleChipClick(letterObj)}
                            className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-200 hover:border-pink-500 hover:text-pink-500 transition-colors"
                            disabled={isCompleted}
                        >
                            {letterObj.char}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Backspace / Reset */}
            <div className="mt-8 flex items-center justify-between w-full px-4">
                <button
                    onClick={handleReset}
                    disabled={userInput.length === 0 && !isCompleted}
                    className="text-gray-500 hover:text-gray-700 disabled:opacity-30"
                >
                    {t("quiz.reset")}
                </button>
                <button
                    onClick={handleHint}
                    disabled={isCompleted || userInput.length >= item.word.length}
                    className="flex items-center gap-2 text-amber-500 hover:text-amber-600 disabled:opacity-30"
                >
                    <Lightbulb className="w-5 h-5" />
                    {t("quiz.hint")}
                </button>
                <button onClick={handleBackspace} disabled={userInput.length === 0 || isCompleted} className="text-gray-400 hover:text-red-500 disabled:opacity-30" title={t("quiz.backspace")}>
                    <RefreshCcw className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
