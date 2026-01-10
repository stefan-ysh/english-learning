import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LearningState {
    completedItems: string[]; // List of item IDs that have been learned/mastered
    quizScores: Record<string, number>; // Map of category ID to score (e.g., 85/100)

    markAsCompleted: (itemId: string) => void;
    setQuizScore: (categoryId: string, score: number) => void;
    resetProgress: () => void;
}

export const useLearningStore = create<LearningState>()(
    persist(
        (set) => ({
            completedItems: [],
            quizScores: {},

            markAsCompleted: (itemId) => set((state) => {
                if (state.completedItems.includes(itemId)) return state;
                return { completedItems: [...state.completedItems, itemId] };
            }),

            setQuizScore: (categoryId, score) => set((state) => ({
                quizScores: { ...state.quizScores, [categoryId]: score }
            })),

            resetProgress: () => set({ completedItems: [], quizScores: {} }),
        }),
        {
            name: 'learning-storage',
        }
    )
);
