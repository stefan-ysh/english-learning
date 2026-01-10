"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { VocabItem } from "@/lib/vocab-data";
import { FlashCard } from "./FlashCard";
import { RotateCcw, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useActivityStore } from "@/lib/use-activity-store";
import { useI18n } from "@/lib/i18n-context";

interface SwipeContainerProps {
    items: VocabItem[];
    categoryId: string;
}

export function SwipeContainer({ items, categoryId }: SwipeContainerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [hasRecorded, setHasRecorded] = useState(false);
    const recordActivity = useActivityStore((state) => state.recordActivity);
    const hasHydrated = useActivityStore((state) => state.hasHydrated);
    const { t } = useI18n();

    if (!items || items.length === 0) {
        return <div>No items found.</div>;
    }

    const currentItem = items[currentIndex];
    // Calculate completion percentage
    const progress = ((currentIndex + 1) / items.length) * 100;

    useEffect(() => {
        setHasRecorded(false);
        setCurrentIndex(0);
        setDirection(0);
    }, [categoryId]);

    useEffect(() => {
        if (!hasHydrated) return;
        if (!hasRecorded && currentIndex === items.length - 1) {
            recordActivity();
            setHasRecorded(true);
        }
    }, [currentIndex, hasRecorded, hasHydrated, items.length, recordActivity]);

    const handleDragEnd = (event: globalThis.MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -100) {
            // Swipe Left (Next)
            setDirection(1);
            setTimeout(() => nextCard(), 200);
        } else if (info.offset.x > 100) {
            // Swipe Right (Prev)
            setDirection(-1);
            setTimeout(() => prevCard(), 200);
        }
    };

    const nextCard = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const reset = () => {
        setCurrentIndex(0);
        setDirection(0);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-[80vh] relative">
            <div className="absolute top-4 w-full px-4 flex justify-between items-center z-20">
                <Link href={`/vocab/${categoryId}`} className="p-2 bg-white/50 rounded-full dark:bg-black/50 backdrop-blur-sm">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <div className="bg-white/80 dark:bg-black/80 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    {currentIndex + 1} / {items.length}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800">
                <div className="h-full bg-pink-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="relative w-full h-[60vh] flex items-center justify-center perspective-1000">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        className="absolute w-full h-full flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
                        initial={{ opacity: 0, x: direction > 0 ? 300 : -300, rotate: direction > 0 ? 10 : -10 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -300 : 300, rotate: direction > 0 ? -10 : 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={handleDragEnd}
                        whileTap={{ scale: 1.05 }}
                    >
                        <FlashCard item={currentItem} autoPlay={true} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Completion Banner */}
            {hasRecorded && currentIndex === items.length - 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-24 px-4 py-3 bg-green-600 text-white text-sm font-bold rounded-2xl shadow-lg flex items-center gap-3"
                >
                    <span>{t("learn.completed")}</span>
                    <Link href="/" className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        {t("learn.back_home")}
                    </Link>
                </motion.div>
            )}

            {/* Controls */}
            <div className="absolute bottom-8 flex gap-8 items-center z-20">
                <button
                    onClick={() => { setDirection(-1); prevCard(); }}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center disabled:opacity-50 text-gray-600 dark:text-gray-300"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={reset}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-gray-500"
                >
                    <RotateCcw className="w-4 h-4" />
                </button>

                <button
                    onClick={() => { setDirection(1); nextCard(); }}
                    disabled={currentIndex === items.length - 1} // Disable if last card
                    className="w-14 h-14 rounded-full bg-black dark:bg-white shadow-lg flex items-center justify-center disabled:opacity-50 text-white dark:text-black"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
