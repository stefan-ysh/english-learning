import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import PhrasesListClient from "./PhrasesListClient";

export default function PhrasesPage() {
    return <PhrasesListClient categories={PHRASE_CATEGORIES} />;
}
