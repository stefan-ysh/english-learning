"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VocabItem } from "@/lib/vocab-data";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";
import { speak } from "@/lib/tts";

interface FlashCardProps {
    item: VocabItem;
    autoPlay?: boolean;
}

export function FlashCard({ item, autoPlay = false }: FlashCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (autoPlay) {
            playAudio();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    const playAudio = () => {
        speak(item.word);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="w-full h-full relative perspective-1000" onClick={handleFlip}>
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div className={cn(
                    "absolute w-full h-full backface-hidden rounded-3xl p-0 shadow-xl overflow-hidden bg-white dark:bg-slate-900",
                    // "bg-gradient-to-br from-pink-50 to-white dark:from-slate-800 dark:to-slate-900" 
                )}>
                    <ShineBorder className="w-full h-full p-6 flex flex-col items-center justify-between bg-white dark:bg-slate-900" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                        <div className="w-full h-4/5 relative rounded-2xl overflow-hidden mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image}
                                alt={item.word}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={(e) => { e.stopPropagation(); playAudio(); }}
                                className="absolute bottom-4 right-4 p-4 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-transform dark:bg-black/80 dark:text-white"
                            >
                                <Volume2 className="w-6 h-6 text-pink-500" />
                            </button>
                        </div>

                        <div className="text-center h-1/5 flex flex-col justify-center">
                            <h2 className="text-4xl font-bold tracking-tight mb-1">{item.word}</h2>
                            <p className="text-gray-400 font-mono text-lg">{item.phonetic}</p>
                        </div>
                    </ShineBorder>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center bg-pink-50 dark:bg-slate-800 border-2 border-pink-200 dark:border-pink-900"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400">{item.cn}</h3>

                    <div className="w-full space-y-4 text-center">
                        <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                            <p className="text-lg text-gray-700 dark:text-gray-200 italic">&ldquo;{item.exampleEn}&rdquo;</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{item.exampleCn}</p>
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); playAudio(); }}
                        className="mt-8 flex items-center gap-2 text-pink-500 font-bold"
                    >
                        <Volume2 className="w-5 h-5" /> Listen Again
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
