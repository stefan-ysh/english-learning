export type VocabWord = {
    id: string;
    word: string;
    phonetic: string;
    partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "preposition" | "pronoun" | "conjunction" | "interjection";
    level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
    cn: string;
    cnMeaning: string;
    enDefinition: string;
    exampleEn?: string;
    exampleCn?: string;
    synonyms?: string[];
    antonyms?: string[];
    collocations?: string[];
    family?: string[];
    isLearned?: boolean;
    learnedDate?: string;
    mastery?: 0 | 1 | 2 | 3;
};

export type VocabLevel = {
    id: string;
    level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
    title: string;
    titleCn: string;
    description: string;
    descriptionCn: string;
    totalWords: number;
    letter: string;
    words: VocabWord[];
};

export const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export const LEVELS = [
    { id: "a1", value: "A1", title: "初级 (A1)", titleCn: "初级 (A1)", description: "Basic words for beginners", descriptionCn: "基础词汇，适合初学者", color: "bg-green-500" },
    { id: "a2", value: "A2", title: "初级 (A2)", titleCn: "初级 (A2)", description: "Elementary vocabulary", descriptionCn: "基础词汇，适合入门学习者", color: "bg-blue-500" },
    { id: "b1", value: "B1", title: "中级 (B1)", titleCn: "中级 (B1)", description: "Intermediate vocabulary", descriptionCn: "中级词汇，适合进阶学习者", color: "bg-yellow-500" },
    { id: "b2", value: "B2", title: "中高级 (B2)", titleCn: "中高级 (B2)", description: "Upper intermediate vocabulary", descriptionCn: "中高级词汇，适合高级学习者", color: "bg-orange-500" },
    { id: "c1", value: "C1", title: "高级 (C1)", titleCn: "高级 (C1)", description: "Advanced vocabulary", descriptionCn: "高级词汇，适合高阶学习者", color: "bg-red-500" },
    { id: "c2", value: "C2", title: "精通 (C2)", titleCn: "精通 (C2)", description: "Proficiency vocabulary", descriptionCn: "精通词汇，适合母语水平学习者", color: "bg-purple-500" },
];

export const PARTS_OF_SPEECH = [
    { id: "noun", title: "名词", titleCn: "名词", icon: "box" },
    { id: "verb", title: "动词", titleCn: "动词", icon: "arrow-right" },
    { id: "adjective", title: "形容词", titleCn: "形容词", icon: "star" },
    { id: "adverb", title: "副词", titleCn: "副词", icon: "zap" },
    { id: "preposition", title: "介词", titleCn: "介词", icon: "link" },
    { id: "pronoun", title: "代词", titleCn: "代词", icon: "user" },
    { id: "conjunction", title: "连词", titleCn: "连词", icon: "plus" },
    { id: "interjection", title: "感叹词", titleCn: "感叹词", icon: "sparkles" },
];

export const OXFORD_5000_DATA: VocabLevel[] = [];

export function getWordsByLevel(level: string): VocabWord[] {
    const levelData = OXFORD_5000_DATA.find(l => l.level === level);
    return levelData?.words || [];
}

export function getWordsByLetter(letter: string, level?: string): VocabWord[] {
    let words: VocabWord[] = [];
    
    if (level) {
        const levelData = OXFORD_5000_DATA.find(l => l.level === level);
        words = levelData?.words.filter(w => w.word.toUpperCase().startsWith(letter)) || [];
    } else {
        OXFORD_5000_DATA.forEach(levelData => {
            const filtered = levelData.words.filter(w => w.word.toUpperCase().startsWith(letter));
            words.push(...filtered);
        });
    }
    
    return words.sort((a, b) => a.word.localeCompare(b.word));
}

export function getWordById(id: string): VocabWord | undefined {
    for (const levelData of OXFORD_5000_DATA) {
        const word = levelData.words.find(w => w.id === id);
        if (word) return word;
    }
    return undefined;
}

export function getAllLearnedWords(): VocabWord[] {
    const learned: VocabWord[] = [];
    OXFORD_5000_DATA.forEach(levelData => {
        const filtered = levelData.words.filter(w => w.isLearned);
        learned.push(...filtered);
    });
    return learned;
}

export function searchWords(query: string): VocabWord[] {
    const results: VocabWord[] = [];
    const lowerQuery = query.toLowerCase();
    
    OXFORD_5000_DATA.forEach(levelData => {
        const filtered = levelData.words.filter(w => 
            w.word.toLowerCase().includes(lowerQuery) ||
            w.cn.includes(query) ||
            w.cnMeaning.includes(query)
        );
        results.push(...filtered);
    });
    
    return results;
}
