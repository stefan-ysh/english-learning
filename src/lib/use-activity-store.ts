import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ActivityState {
    loginDates: string[]; // ISO Date strings YYYY-MM-DD
    currentStreak: number;
    hasHydrated: boolean;
    recordActivity: () => void;
    setHasHydrated: (state: boolean) => void;
}

export const useActivityStore = create<ActivityState>()(
    persist(
        (set, get) => ({
            loginDates: [],
            currentStreak: 0,
            hasHydrated: false,
            setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
            recordActivity: () => {
                const today = new Date().toISOString().split('T')[0];
                const { loginDates, currentStreak } = get();

                if (!loginDates.includes(today)) {
                    // Start or continue streak
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayStr = yesterday.toISOString().split('T')[0];

                    let newStreak = currentStreak;
                    if (loginDates.includes(yesterdayStr)) {
                        newStreak += 1;
                    } else {
                        newStreak = 1; // Reset streak if missed yesterday (or first time)
                    }

                    set({
                        loginDates: [...loginDates, today],
                        currentStreak: newStreak
                    });
                }
            },
        }),
        {
            name: 'activity-storage',
            onRehydrateStorage: (state) => {
                return () => state?.setHasHydrated(true);
            },
        }
    )
);
