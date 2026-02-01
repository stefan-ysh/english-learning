"use client";

import { useI18n } from "@/lib/i18n-context";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { lang, toggleLang, hasHydrated } = useI18n();

    if (!hasHydrated) {
        return (
            <button
                aria-hidden
                className="fixed top-16 right-4 sm:top-4 z-50 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-md backdrop-blur-sm flex items-center gap-2 text-sm font-bold border border-gray-200 dark:border-slate-700 opacity-0 pointer-events-none"
            >
                <Languages className="w-4 h-4" />
                <span>中</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggleLang}
            className="fixed top-16 right-4 sm:top-4 z-50 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-md backdrop-blur-sm flex items-center gap-2 text-sm font-bold border border-gray-200 dark:border-slate-700 hover:scale-105 transition-transform"
        >
            <Languages className="w-4 h-4" />
            <span>{lang === "en" ? "EN" : "中"}</span>
        </button>
    );
}
