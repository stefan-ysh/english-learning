"use client";

import { useActivityStore } from "@/lib/use-activity-store";
import { useEffect } from "react";
import { Flame, Calendar as CalendarIcon } from "lucide-react"; // Import CalendarIcon as alias
import { useI18n } from "@/lib/i18n-context";

// Simple helper to get days in current month
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

export function StudyCalendar() {
    const { loginDates, currentStreak, recordActivity, hasHydrated } = useActivityStore();
    const { t } = useI18n();

    useEffect(() => {
        if (hasHydrated) {
            recordActivity();
        }
    }, [hasHydrated, recordActivity]);

    if (!hasHydrated) {
        return (
            <div className="w-full h-64 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 animate-pulse flex items-center justify-center">
                <span className="text-gray-400">{t("common.loading")}</span>
            </div>
        );
    }

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const dayOffset = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday

    return (
        <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5 text-gray-500" />
                        {t("calendar.title")}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{t("calendar.days")}: {loginDates.length}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-orange-500 font-bold text-xl">
                        <Flame className="w-6 h-6 fill-current animate-pulse" />
                        {currentStreak}
                    </div>
                    <div className="text-xs text-gray-400 uppercase font-bold">{t("calendar.streak")}</div>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={`${d}-${i}`} className="text-xs text-gray-400 font-bold mb-2">{d}</div>
                ))}

                {/* Empty slots for offset */}
                {Array.from({ length: dayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-full aspect-square"></div>
                ))}

                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isActive = loginDates.includes(dateStr);
                    const isToday = day === today.getDate();

                    return (
                        <div
                            key={day}
                            className={`
                                w-full aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                                ${isActive ? 'bg-green-500 text-white' : 'bg-gray-50 dark:bg-slate-800 text-gray-400'}
                                ${isToday && !isActive ? 'border-2 border-green-500 text-green-500' : ''}
                            `}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
