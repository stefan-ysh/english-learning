"use server";
import { VOCAB_DATA } from "@/lib/vocab-data";
import { PHRASE_CATEGORIES } from "@/lib/phrases-data";
import { pickRandom } from "@/lib/utils";

type QuickQuestion = {
    id: string;
    word: string;
    cn: string;
    phonetic?: string;
    options: string[];
    type: "vocab" | "phrase";
    image: string; // Added image 
};

export async function generateQuickQuestions(targetDuration: number): Promise<QuickQuestion[]> {
    const vocabPool = VOCAB_DATA.flatMap((c) => c.items);
    const phrasePool = PHRASE_CATEGORIES.flatMap((c) => c.items);

    const questionCount = targetDuration === 120 ? 6 : targetDuration === 300 ? 12 : 8;
    const vocabCount = Math.floor(questionCount / 2);
    const phraseCount = questionCount - vocabCount;

    const vocabQuestions = pickRandom(vocabPool, vocabCount).map((item) => {
        const other = pickRandom(
            vocabPool.filter((v) => v.id !== item.id).map((v) => v.cn),
            3
        );
        const options = pickRandom([item.cn, ...other], 4);
        return {
            id: item.id,
            word: item.word,
            cn: item.cn,
            phonetic: item.phonetic,
            options,
            type: "vocab",
            image: item.image,
        } as QuickQuestion;
    });

    const phraseQuestions = pickRandom(phrasePool, phraseCount).map((item) => {
        const other = pickRandom(
            phrasePool.filter((p) => p.id !== item.id).map((p) => p.cn),
            3
        );
        const options = pickRandom([item.cn, ...other], 4);
        return {
            id: item.id,
            word: item.english,
            cn: item.cn,
            options,
            type: "phrase",
            image: "",
        } as QuickQuestion;
    });

    return pickRandom([...vocabQuestions, ...phraseQuestions], questionCount);
}
