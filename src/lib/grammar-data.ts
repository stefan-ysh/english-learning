export type GrammarTopic = {
    id: string;
    title: string;
    cnTitle: string;
    description: string;
    cnDescription: string;
    imageUrl: string;
    examples: {
        en: string;
        cn: string;
        explanation: string;
        explanationCn: string;
    }[];
};

export const GRAMMAR_DATA: GrammarTopic[] = [
    {
        id: "svo",
        title: "Subject + Verb + Object",
        cnTitle: "主语 + 谓语 + 宾语",
        description: "The basic sentence structure in English.",
        cnDescription: "英语中最基本的句子结构。",
        imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
        examples: [
            {
                en: "I love cats.",
                cn: "我爱猫。",
                explanation: "I (Subject) + love (Verb) + cats (Object).",
                explanationCn: "I (主语) + love (谓语) + cats (宾语)。"
            },
            {
                en: "He eats an apple.",
                cn: "他吃一个苹果。",
                explanation: "He (Subject) + eats (Verb) + an apple (Object).",
                explanationCn: "He (主语) + eats (谓语) + an apple (宾语)。"
            }
        ]
    },
    {
        id: "adjectives",
        title: "Adjectives",
        cnTitle: "形容词",
        description: "Words that describe nouns.",
        cnDescription: "用来修饰名词的词。",
        imageUrl: "https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "A red car.",
                cn: "一辆红色的车。",
                explanation: "Red describes the car.",
                explanationCn: "Red (红色的) 形容 car (车)。"
            },
            {
                en: "The tall building.",
                cn: "那栋高楼。",
                explanation: "Tall describes the building.",
                explanationCn: "Tall (高的) 形容 building (楼)。"
            }
        ]
    },
    {
        id: "present_continuous",
        title: "Present Continuous",
        cnTitle: "现在进行时",
        description: "Actions happening right now.",
        cnDescription: "表示正在发生的动作。",
        imageUrl: "https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Running image or something active
        examples: [
            {
                en: "She is running.",
                cn: "她正在跑步。",
                explanation: "Subject + be + verb-ing.",
                explanationCn: "主语 + be动词 + 动词ing形式。"
            },
            {
                en: "They are sleeping.",
                cn: "他们正在睡觉。",
                explanation: "They (Subject) + are (be) + sleeping.",
                explanationCn: "They (主语) + are (be) + sleeping (动词ing)。"
            }
        ]
    },
    {
        id: "past_simple",
        title: "Past Simple",
        cnTitle: "一般过去时",
        description: "Completed actions in the past.",
        cnDescription: "描述过去已经完成的动作。",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682090420277-0d7ba9e03e23?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "I walked home.",
                cn: "我走路回家了。",
                explanation: "Subject + verb-ed (regular).",
                explanationCn: "主语 + 动词过去式 (规则变化加ed)。"
            },
            {
                en: "She went to school.",
                cn: "她去上学了。",
                explanation: "She (Subject) + went (Past of go).",
                explanationCn: "She (主语) + went (go的过去式)。"
            }
        ]
    }
];
