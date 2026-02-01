import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { notFound } from "next/navigation";
import PhraseCategoryClient from "./PhraseCategoryClient";

export default async function PhraseCategoryPage({ params }: { params: { categoryId: string } | Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;
    const category = PHRASE_CATEGORIES.find((c) => c.id === categoryId);

    if (!category) {
        notFound();
    }

    return (
        <PhraseCategoryClient
            category={{
                id: category.id,
                title: category.title,
                cnTitle: category.cnTitle,
            }}
        />
    );
}
