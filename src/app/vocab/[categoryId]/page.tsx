import { getVocabCategory } from "@/lib/vocab-data";
import { notFound } from "next/navigation";
import VocabCategoryClient from "./VocabCategoryClient";

export default async function CategoryPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = getVocabCategory(categoryId);

    if (!category) {
        notFound();
    }

    return <VocabCategoryClient categoryId={category.id} />;
}
