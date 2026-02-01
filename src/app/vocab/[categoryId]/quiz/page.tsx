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

export default async function QuizPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getVocabCategory(categoryId);

    if (!category) {
        notFound();
    }

    const isAudioSelectCategory = category.id === "alphabet" || category.id === "phonetics";
    const allItems = getAllVocabItems();
    const shuffled = shuffle(category.items);

    const questions: QuizQuestion[] = shuffled.map((item) => {
        if (isAudioSelectCategory) {
            const otherItems = shuffle(category.items.filter((i) => i.id !== item.id))
                .slice(0, 3)
                .map((i) => i.word);
            const options = shuffle([item.word, ...otherItems]);
            return { item, options, answer: item.word };
        }

        const otherItems = shuffle(allItems.filter((i) => i.id !== item.id))
            .slice(0, 3)
            .map((i) => i.cn);
        const options = shuffle([item.cn, ...otherItems]);
        return { item, options, answer: item.cn };
    });

    return (
        <VocabQuizClient
            categoryId={category.id}
            isAudioSelectCategory={isAudioSelectCategory}
            questions={questions}
        />
    );
}
