import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReadingState = {
    bookmarks: string[];
    readArticles: string[];
    lastReadAt: Record<string, string>;
    toggleBookmark: (id: string) => void;
    markRead: (id: string) => void;
    resetReading: () => void;
};

export const useReadingStore = create<ReadingState>()(
    persist(
        (set, get) => ({
            bookmarks: [],
            readArticles: [],
            lastReadAt: {},
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
        }),
        { name: "reading-storage" }
    )
);
