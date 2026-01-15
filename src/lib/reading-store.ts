import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReadingState = {
    bookmarks: string[];
    readArticles: string[];
    lastReadAt: Record<string, string>;
    hasHydrated: boolean;
    toggleBookmark: (id: string) => void;
    markRead: (id: string) => void;
    resetReading: () => void;
    setHasHydrated: (state: boolean) => void;
};

export const useReadingStore = create<ReadingState>()(
    persist(
        (set) => ({
            bookmarks: [],
            readArticles: [],
            lastReadAt: {},
            hasHydrated: false,
            toggleBookmark: (id) =>
                set((state) => {
                    const isBookmarked = state.bookmarks.includes(id);
                    return {
                        bookmarks: isBookmarked
                            ? state.bookmarks.filter((item) => item !== id)
                            : [...state.bookmarks, id],
                    };
                }),
            markRead: (id) =>
                set((state) => ({
                    readArticles: state.readArticles.includes(id)
                        ? state.readArticles
                        : [...state.readArticles, id],
                    lastReadAt: {
                        ...state.lastReadAt,
                        [id]: new Date().toISOString(),
                    },
                })),
            resetReading: () => set({ bookmarks: [], readArticles: [], lastReadAt: {} }),
            setHasHydrated: (state) => set({ hasHydrated: state }),
        }),
        {
            name: "reading-storage",
            onRehydrateStorage: (state) => {
                return () => state?.setHasHydrated(true);
            },
        }
    )
);
