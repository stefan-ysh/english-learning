"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { VocabItem } from "@/lib/vocab-data";
import { FlashCard } from "./FlashCard";
import { RotateCcw, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useActivityStore } from "@/lib/use-activity-store";
import { useI18n } from "@/lib/i18n-context";
import { stopAllAudio, markUserInteracted, canAutoPlayAudio } from "@/lib/tts";

interface SwipeContainerProps {
    items: VocabItem[];
    categoryId: string;
    jumpIndex?: number | null;
}

export function SwipeContainer({ items, categoryId, jumpIndex }: SwipeContainerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [hasRecorded, setHasRecorded] = useState(false);
    const [swipeOut, setSwipeOut] = useState<"left" | "right" | null>(null);
    const [showSwipeHint, setShowSwipeHint] = useState(true);
    const recordActivity = useActivityStore((state) => state.recordActivity);
    const hasHydrated = useActivityStore((state) => state.hasHydrated);
    const { t } = useI18n();



    const currentItem = items?.[currentIndex];

    // Safety check moved after hooks


    // Calculate completion percentage
    // Calculate completion percentage
    const progress = ((currentIndex + 1) / items.length) * 100;



    useEffect(() => {
        if (jumpIndex === null || jumpIndex === undefined) return;
        if (jumpIndex < 0 || jumpIndex >= items.length) return;
        stopAllAudio();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDirection(0);
        setCurrentIndex(jumpIndex);
    }, [jumpIndex, items.length]);

    useEffect(() => {
        if (!hasHydrated) return;
        if (!hasRecorded && currentIndex === items.length - 1) {
            recordActivity();
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHasRecorded(true);
        }
    }, [currentIndex, hasRecorded, hasHydrated, items.length, recordActivity]);

    useEffect(() => {
        if (currentIndex !== 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowSwipeHint(false);
            return;
        }
        const timer = window.setTimeout(() => setShowSwipeHint(false), 2500);
        return () => window.clearTimeout(timer);
    }, [currentIndex]);

    if (!items || items.length === 0) {
        return <div>No items found.</div>;
    }

    const handleDragEnd = (event: globalThis.MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -100) {
            // Swipe Left (Next)
            triggerSwipe("left");
        } else if (info.offset.x > 100) {
            // Swipe Right (Prev)
            triggerSwipe("right");
        }
    };

    const triggerSwipe = (dir: "left" | "right") => {
        if (swipeOut) return;
        stopAllAudio();
        setSwipeOut(dir);
        setDirection(dir === "left" ? 1 : -1);
        setTimeout(() => {
            if (dir === "left") {
                nextCard();
            } else {
                prevCard();
            }
            setSwipeOut(null);
        }, 240);
    };

    const nextCard = () => {
        if (currentIndex < items.length - 1) {
            stopAllAudio();
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            stopAllAudio();
            setCurrentIndex(prev => prev - 1);
        }
    };

    const reset = () => {
        stopAllAudio();
        setCurrentIndex(0);
        setDirection(0);
        setSwipeOut(null);
    };

    return (
        <div
            className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-[80vh] relative"
            onClick={markUserInteracted}
            onTouchStart={markUserInteracted}
        >
            <div className="absolute top-4 w-full px-4 flex justify-between items-center z-20">
                <Link
                    href={`/vocab/${categoryId}`}
                    aria-label={t("btn.back")}
                    className="p-2 bg-white/50 rounded-full dark:bg-black/50 backdrop-blur-sm"
                >
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
                <div className="absolute inset-6 rounded-[28px] bg-white/70 dark:bg-slate-800/60 border border-white/60 dark:border-slate-700/60 shadow-lg translate-y-4 rotate-2"></div>
                <div className="absolute inset-8 rounded-[28px] bg-white/50 dark:bg-slate-900/50 border border-white/50 dark:border-slate-700/50 shadow-md translate-y-7 -rotate-2"></div>
                {!canAutoPlayAudio() && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] px-3 py-1 rounded-full bg-black/70 text-white z-20">
                        {t("audio.tap_to_enable")}
                    </div>
                )}
                {showSwipeHint && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-300"
                    >
                        <span className="animate-pulse">←</span>
                        {t("learn.swipe_hint")}
                        <span className="animate-pulse">→</span>
                    </motion.div>
                )}
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        className="absolute w-full h-full flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
                        initial={{ opacity: 0, x: direction > 0 ? 300 : -300, rotate: direction > 0 ? 10 : -10 }}
                        animate={{
                            opacity: 1,
                            x: swipeOut === "left" ? -420 : swipeOut === "right" ? 420 : 0,
                            rotate: swipeOut === "left" ? -20 : swipeOut === "right" ? 20 : 0,
                        }}
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
                    aria-label={t("nav.prev")}
                    className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center disabled:opacity-50 text-gray-600 dark:text-gray-300"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={reset}
                    aria-label={t("nav.reset")}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-gray-500"
                >
                    <RotateCcw className="w-4 h-4" />
                </button>

                <button
                    onClick={() => { setDirection(1); nextCard(); }}
                    disabled={currentIndex === items.length - 1} // Disable if last card
                    aria-label={t("nav.next")}
                    className="w-14 h-14 rounded-full bg-black dark:bg-white shadow-lg flex items-center justify-center disabled:opacity-50 text-white dark:text-black"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
