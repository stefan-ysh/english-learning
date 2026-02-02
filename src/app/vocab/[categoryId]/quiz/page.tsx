import { getAllVocabItems, getVocabCategory } from "@/lib/vocab-data";
import { notFound } from "next/navigation";
import VocabQuizClient from "./VocabQuizClient";

export const dynamic = "force-dynamic";

type QuizQuestion = {
    item: ReturnType<typeof getAllVocabItems>[number];
    options: string[];
    answer: string;
};

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

export default async function QuizPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getVocabCategory(categoryId);

    if (!category) {
        notFound();
    }

    const isAudioSelectCategory = category.id === "alphabet" || category.id === "phonetics";
    const allItems = getAllVocabItems();
    const shuffled = shuffle(category.items);

    const poolItems = isAudioSelectCategory ? category.items : allItems;
    const poolValues = isAudioSelectCategory
        ? poolItems.map((item) => item.word)
        : poolItems.map((item) => item.cn);
    const indexById = new Map(poolItems.map((item, index) => [item.id, index]));

    const questions: QuizQuestion[] = shuffled.map((item) => {
        const excludeIndex = indexById.get(item.id) ?? -1;
        const otherIndexes = excludeIndex >= 0
            ? pickRandomIndices(poolValues.length, excludeIndex, 3)
            : [];
        const otherValues = otherIndexes.map((idx) => poolValues[idx]);
        const answer = isAudioSelectCategory ? item.word : item.cn;
        const options = shuffle([answer, ...otherValues]);
        return { item, options, answer };
    });

    return (
        <VocabQuizClient
            categoryId={category.id}
            isAudioSelectCategory={isAudioSelectCategory}
            questions={questions}
        />
    );
}
