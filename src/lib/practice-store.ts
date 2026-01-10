import { create } from "zustand";
import { persist } from "zustand/middleware";

export type MistakeType = "dictation" | "pattern" | "quick" | "vocab-quiz" | "phrase-quiz";

export type MistakeEntry = {
    key: string;
    type: MistakeType;
    prompt: string;
    correct: string;
    userAnswer: string;
    count: number;
    lastAt: string;
};

interface PracticeState {
    mistakes: Record<string, MistakeEntry>;
    recordMistake: (entry: Omit<MistakeEntry, "count" | "lastAt">) => void;
    clearMistakes: () => void;
    removeMistake: (key: string) => void;
}

export const usePracticeStore = create<PracticeState>()(
    persist(
        (set) => ({
            mistakes: {},
            recordMistake: (entry) =>
                set((state) => {
                    const now = new Date().toISOString();
                    const existing = state.mistakes[entry.key];
                    return {
                        mistakes: {
                            ...state.mistakes,
                            [entry.key]: {
                                ...entry,
                                count: existing ? existing.count + 1 : 1,
                                lastAt: now,
                            },
                        },
                    };
                }),
            clearMistakes: () => set({ mistakes: {} }),
            removeMistake: (key) =>
                set((state) => {
                    const next = { ...state.mistakes };
                    delete next[key];
                    return { mistakes: next };
                }),
        }),
        { name: "practice-storage" }
    )
);
