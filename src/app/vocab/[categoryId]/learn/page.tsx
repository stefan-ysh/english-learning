import { getVocabCategory } from "@/lib/vocab-data";
import { notFound } from "next/navigation";
import VocabLearnClient from "./VocabLearnClient";

export const dynamic = "force-dynamic";

export default async function LearnPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getVocabCategory(categoryId);
    const isOxfordCategory = categoryId.startsWith("oxford_");

    if (!category) {
        notFound();
    }

    const oxfordB2 = isOxfordCategory ? getVocabCategory("oxford_b2") : undefined;
    const oxfordC1 = isOxfordCategory ? getVocabCategory("oxford_c1") : undefined;

    if (isOxfordCategory && (!oxfordB2 || !oxfordC1)) {
        notFound();
    }

    return (
        <VocabLearnClient
            category={category}
            oxfordB2={oxfordB2}
            oxfordC1={oxfordC1}
        />
    );
}
