
import { READING_ARTICLES } from "@/lib/reading-data";
import { notFound } from "next/navigation";
import ArticleClient from "./ArticleClient";
import { use } from "react";

export async function generateStaticParams() {
    return READING_ARTICLES.map((article) => ({
        articleId: article.id,
    }));
}

export default function ReadingDetailPage({ params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = use(params);
    const article = READING_ARTICLES.find((a) => a.id === articleId);

    if (!article) {
        return notFound();
    }

    return <ArticleClient article={article} />;
}
