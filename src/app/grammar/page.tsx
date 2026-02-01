import { GRAMMAR_DATA } from "@/lib/grammar-data";
import GrammarClient from "./GrammarClient";

export default function GrammarPage() {
    return <GrammarClient topics={GRAMMAR_DATA} />;
}
