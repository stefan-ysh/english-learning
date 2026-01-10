
export type SyntaxType = 'subject' | 'verb' | 'object' | 'other' | 'adjective' | 'adverb' | 'preposition';

export type SyntaxPart = {
    text: string;
    type: SyntaxType;
    explanation?: string; // Optional grammar note
    explanationCn?: string; // Chinese explanation
};

export type PhraseItem = {
    id: string;
    english: string;
    cn: string;
    syntax: SyntaxPart[];
    audioUrl?: string; // Optional custom audio
};

export type PhraseCategory = {
    id: string;
    title: string;
    cnTitle: string;
    description: string;
    cnDescription: string;
    image: string;
    color: string;
    items: PhraseItem[];
};

export const PHRASE_CATEGORIES: PhraseCategory[] = [
    {
        id: "greeting",
        title: "Greetings",
        cnTitle: "日常问候",
        description: "Common ways to say hello and goodbye.",
        cnDescription: "常用的打招呼和道别方式。",
        image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&q=80",
        color: "bg-orange-400",
        items: [
            {
                id: "ph-1",
                english: "How are you?",
                cn: "你好吗？",
                syntax: [
                    { text: "How", type: "adverb", explanation: "Question word (Keyword)", explanationCn: "疑问词 (关键词)" },
                    { text: "are", type: "verb", explanation: "Be verb", explanationCn: "Be动词" },
                    { text: "you", type: "subject", explanation: "Pronoun", explanationCn: "代词 (你)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-2",
                english: "Nice to meet you.",
                cn: "很高兴见到你。",
                syntax: [
                    { text: "Nice", type: "adjective", explanation: "Adjective describing the feeling", explanationCn: "形容词 (高兴的/好的)" },
                    { text: "to meet", type: "verb", explanation: "Infinitive verb phrase", explanationCn: "不定式短语 (见到)" },
                    { text: "you", type: "object", explanation: "Object of meet", explanationCn: "宾语 (你)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "travel",
        title: "Travel Essentials",
        cnTitle: "旅行必备",
        description: "Useful phrases for traveling.",
        cnDescription: "旅行中常用的句子。",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
        color: "bg-blue-400",
        items: [
            {
                id: "ph-3",
                english: "Where is the bathroom?",
                cn: "洗手间在哪里？",
                syntax: [
                    { text: "Where", type: "adverb", explanation: "Question word for location", explanationCn: "疑问词 (哪里)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "the bathroom", type: "subject", explanationCn: "主语 (洗手间)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-6",
                english: "I am lost.",
                cn: "我迷路了。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "am", type: "verb", explanationCn: "Be动词" },
                    { text: "lost", type: "adjective", explanationCn: "形容词 (迷路的)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "restaurant",
        title: "Dining Out",
        cnTitle: "外出就餐",
        description: "Ordering food and paying bills.",
        cnDescription: "点餐和结账。",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        color: "bg-red-400",
        items: [
            {
                id: "ph-7",
                english: "I would like a coffee.",
                cn: "我想要一杯咖啡。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "would like", type: "verb", explanation: "Polite form of 'want'", explanationCn: "动词短语 (想要 - 礼貌用法)" },
                    { text: "a coffee", type: "object", explanationCn: "宾语 (一杯咖啡)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-8",
                english: "Check please.",
                cn: "买单。",
                syntax: [
                    { text: "Check", type: "object", explanation: "The bill", explanationCn: "宾语 (账单)" },
                    { text: "please", type: "adverb", explanation: "Polite marker", explanationCn: "副词 (请)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "shopping",
        title: "Shopping",
        cnTitle: "购物",
        description: "Buying things and bargaining.",
        cnDescription: "买东西和讲价。",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
        color: "bg-pink-400",
        items: [
            {
                id: "ph-9",
                english: "How much is this?",
                cn: "这个多少钱？",
                syntax: [
                    { text: "How much", type: "adverb", explanation: "Question phrase for price", explanationCn: "疑问短语 (多少)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "this", type: "subject", explanationCn: "主语 (这个)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-10",
                english: "It is too expensive.",
                cn: "太贵了。",
                syntax: [
                    { text: "It", type: "subject", explanationCn: "主语 (它)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "too", type: "adverb", explanationCn: "副词 (太)" },
                    { text: "expensive", type: "adjective", explanationCn: "形容词 (贵的)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "emergency",
        title: "Emergency",
        cnTitle: "紧急情况",
        description: "Crucial phrases for urgent help.",
        cnDescription: "寻求紧急帮助时用到的关键短语。",
        image: "https://images.unsplash.com/photo-1581056310614-7d2d3a776fdd?w=800&q=80",
        color: "bg-red-600",
        items: [
            {
                id: "ph-11",
                english: "Help me!",
                cn: "救命！/ 帮帮我！",
                syntax: [
                    { text: "Help", type: "verb", explanation: "Imperative verb", explanationCn: "祈使句动词 (帮助)" },
                    { text: "me", type: "object", explanation: "Object (me)", explanationCn: "宾语 (我)" },
                    { text: "!", type: "other" }
                ]
            },
            {
                id: "ph-12",
                english: "Call the police!",
                cn: "报警！",
                syntax: [
                    { text: "Call", type: "verb", explanation: "Verb to call/contact", explanationCn: "动词 (拨打/召唤)" },
                    { text: "the police", type: "object", explanation: "Object", explanationCn: "宾语 (警察)" },
                    { text: "!", type: "other" }
                ]
            },
            {
                id: "ph-13",
                english: "I am sick.",
                cn: "我生病了。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "am", type: "verb", explanationCn: "Be动词" },
                    { text: "sick", type: "adjective", explanationCn: "形容词 (生病的)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    }
];
