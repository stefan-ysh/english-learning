import { VOCAB_DATA, getAllVocabCategory } from "@/lib/vocab-data";
import VocabListClient from "./VocabListClient";
import { CategorySummary } from "@/components/home/CategoryCard";

export default function VocabPage() {
    const allCategoryData = getAllVocabCategory();

    // Convert to lightweight summary
    const allCategory: CategorySummary = {
        id: allCategoryData.id,
        icon: allCategoryData.icon,
        color: allCategoryData.color,
        cover: allCategoryData.cover,
        itemCount: allCategoryData.items.length,
    };

    const categories: CategorySummary[] = VOCAB_DATA.map((c) => ({
        id: c.id,
        icon: c.icon,
        color: c.color,
        cover: c.cover,
        itemCount: c.items.length,
    }));

    return <VocabListClient allCategory={allCategory} categories={categories} />;
}
