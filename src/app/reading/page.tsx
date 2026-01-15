import { READING_ARTICLES } from "@/lib/reading-data";
import ReadingListClient, { ReadingArticleSummary } from "./ReadingListClient";

export default function ReadingPage() {
    const articles: ReadingArticleSummary[] = READING_ARTICLES.map((article) => ({
        id: article.id,
        title: article.title,
        cnTitle: article.cnTitle,
        level: article.level,
        minutes: article.minutes,
        description: article.description,
        cnDescription: article.cnDescription,
    }));

    return <ReadingListClient articles={articles} />;
}
