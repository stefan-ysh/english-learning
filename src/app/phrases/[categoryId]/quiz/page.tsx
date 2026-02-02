import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { notFound } from "next/navigation";
import PhraseQuizClient from "./PhraseQuizClient";

export const dynamic = "force-dynamic";

const shuffle = <T,>(list: T[]) => [...list].sort(() => Math.random() - 0.5);

const pickRandomIndices = (total: number, exclude: number, count: number) => {
    const target = Math.max(0, Math.min(count, total - 1));
    const picked = new Set<number>();
    while (picked.size < target) {
        const raw = Math.floor(Math.random() * (total - 1));
        const idx = raw >= exclude ? raw + 1 : raw;
        picked.add(idx);
    }
    return Array.from(picked);
};

export default async function PhraseQuizPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    const allItems = PHRASE_CATEGORIES.flatMap((c) => c.items);
    const shuffled = shuffle(category.items);
    const poolValues = allItems.map((item) => item.cn);
    const indexById = new Map(allItems.map((item, index) => [item.id, index]));

    const questions = shuffled.map((item) => {
        const excludeIndex = indexById.get(item.id) ?? -1;
        const otherIndexes = excludeIndex >= 0
            ? pickRandomIndices(poolValues.length, excludeIndex, 3)
            : [];
        const otherValues = otherIndexes.map((idx) => poolValues[idx]);
        const options = shuffle([item.cn, ...otherValues]);
        return { item, options };
    });

    return (
        <PhraseQuizClient
            category={{
                id: category.id,
                title: category.title,
                cnTitle: category.cnTitle,
                image: category.image,
            }}
            questions={questions}
        />
    );
}
