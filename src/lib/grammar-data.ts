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
        description: "The basic sentence structure in English for simple statements.",
        cnDescription: "英语中最常见的基础句子结构，用于表达简单陈述。",
        imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=20",
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
            },
            {
                en: "She opens the window.",
                cn: "她打开窗户。",
                explanation: "She (Subject) + opens (Verb) + the window (Object).",
                explanationCn: "She (主语) + opens (谓语) + the window (宾语)。"
            }
        ]
    },
    {
        id: "adjectives",
        title: "Adjectives",
        cnTitle: "形容词",
        description: "Words that describe nouns or follow linking verbs.",
        cnDescription: "用来修饰名词或放在系动词后作表语的词。",
        imageUrl: "https://images.unsplash.com/photo-1508062878650-88b52897f298?q=20&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            },
            {
                en: "The soup is hot.",
                cn: "汤很烫。",
                explanation: "Hot describes the soup after a linking verb.",
                explanationCn: "Hot 在系动词后描述 soup (汤)。"
            }
        ]
    },
    {
        id: "present_continuous",
        title: "Present Continuous",
        cnTitle: "现在进行时",
        description: "Actions happening right now or around now.",
        cnDescription: "表示正在发生或近期正在进行的动作。",
        imageUrl: "https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Running image or something active
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
            },
            {
                en: "We are studying now.",
                cn: "我们现在在学习。",
                explanation: "We (Subject) + are + studying.",
                explanationCn: "We (主语) + are + studying。"
            }
        ]
    },
    {
        id: "past_simple",
        title: "Past Simple",
        cnTitle: "一般过去时",
        description: "Completed actions in the past with a clear time reference.",
        cnDescription: "描述过去已完成的动作，常带有时间点。",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682090420277-0d7ba9e03e23?q=20&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            },
            {
                en: "They watched a movie last night.",
                cn: "他们昨晚看了电影。",
                explanation: "watched is the past form of watch.",
                explanationCn: "watched 是 watch 的过去式。"
            }
        ]
    },
    {
        id: "future_simple",
        title: "Future Simple",
        cnTitle: "一般将来时",
        description: "Actions that will happen in the future or predictions.",
        cnDescription: "表示将来要发生的动作或预测。",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "I will call you tonight.",
                cn: "我今晚会给你打电话。",
                explanation: "Subject + will + verb.",
                explanationCn: "主语 + will + 动词原形。"
            },
            {
                en: "They will arrive tomorrow.",
                cn: "他们明天会到。",
                explanation: "They (Subject) + will + arrive.",
                explanationCn: "They (主语) + will + arrive。"
            },
            {
                en: "Will you join us?",
                cn: "你会加入我们吗？",
                explanation: "Will + subject + verb for questions.",
                explanationCn: "Will + 主语 + 动词 用于提问。"
            }
        ]
    },
    {
        id: "prepositions_place",
        title: "Prepositions of Place",
        cnTitle: "地点介词",
        description: "Show where something is with in/on/under/next to.",
        cnDescription: "表示位置关系，如 in/on/under/next to。",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "The book is on the table.",
                cn: "书在桌子上。",
                explanation: "on + noun (surface).",
                explanationCn: "on + 名词 (表面)。"
            },
            {
                en: "The cat is under the chair.",
                cn: "猫在椅子下面。",
                explanation: "under + noun (below).",
                explanationCn: "under + 名词 (下面)。"
            },
            {
                en: "The keys are in the bag.",
                cn: "钥匙在包里。",
                explanation: "in + noun (inside).",
                explanationCn: "in + 名词 (内部)。"
            }
        ]
    },
    {
        id: "articles",
        title: "Articles (a/an/the)",
        cnTitle: "冠词 (a/an/the)",
        description: "Use articles to show general or specific nouns.",
        cnDescription: "用冠词表示泛指或特指。",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "I saw a dog.",
                cn: "我看到一只狗。",
                explanation: "a is used for a general, countable noun.",
                explanationCn: "a 用于泛指的可数名词。"
            },
            {
                en: "The dog is friendly.",
                cn: "那只狗很友好。",
                explanation: "the points to a specific noun.",
                explanationCn: "the 表示特指。"
            }
        ]
    },
    {
        id: "comparatives",
        title: "Comparatives & Superlatives",
        cnTitle: "比较级与最高级",
        description: "Compare two or more things using -er/-est or more/most.",
        cnDescription: "使用比较级/最高级比较事物。",
        imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "This bag is smaller than that one.",
                cn: "这个包比那个小。",
                explanation: "smaller is the comparative form of small.",
                explanationCn: "smaller 是 small 的比较级。"
            },
            {
                en: "She is the tallest in the class.",
                cn: "她是班里最高的。",
                explanation: "the + tallest shows the superlative.",
                explanationCn: "the + tallest 表示最高级。"
            }
        ]
    },
    {
        id: "prepositions_time",
        title: "Prepositions of Time",
        cnTitle: "时间介词",
        description: "Use at/on/in to talk about time.",
        cnDescription: "使用 at/on/in 表示时间。",
        imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=20&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        examples: [
            {
                en: "The class starts at 9.",
                cn: "课程九点开始。",
                explanation: "at is used for specific time points.",
                explanationCn: "at 用于具体时间点。"
            },
            {
                en: "We meet on Monday.",
                cn: "我们周一见。",
                explanation: "on is used for days and dates.",
                explanationCn: "on 用于星期或日期。"
            }
        ]
    }
];
