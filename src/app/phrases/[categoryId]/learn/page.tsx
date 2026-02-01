import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { notFound } from "next/navigation";
import PhraseLearnClient from "./PhraseLearnClient";

export const dynamic = "force-dynamic";

export default async function PhraseLearnPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    return <PhraseLearnClient category={category} />;
}
