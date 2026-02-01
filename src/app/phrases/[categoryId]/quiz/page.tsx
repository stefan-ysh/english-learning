import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { notFound } from "next/navigation";
import PhraseQuizClient from "./PhraseQuizClient";

export const dynamic = "force-dynamic";

const shuffle = <T,>(list: T[]) => [...list].sort(() => Math.random() - 0.5);

export default async function PhraseQuizPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    const allItems = PHRASE_CATEGORIES.flatMap((c) => c.items);
    const shuffled = shuffle(category.items);

    const questions = shuffled.map((item) => {
        const otherItems = shuffle(allItems.filter((i) => i.id !== item.id))
            .slice(0, 3)
            .map((i) => i.cn);
        const options = shuffle([item.cn, ...otherItems]);
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
