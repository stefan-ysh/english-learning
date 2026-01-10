
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
        image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&q=20",
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
            },
            {
                id: "ph-14",
                english: "Good morning.",
                cn: "早上好。",
                syntax: [
                    { text: "Good", type: "adjective", explanation: "Adjective for greeting", explanationCn: "形容词 (用于问候)" },
                    { text: "morning", type: "object", explanation: "Time noun", explanationCn: "名词 (早晨)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-15",
                english: "See you later.",
                cn: "回头见。",
                syntax: [
                    { text: "See", type: "verb", explanation: "Imperative verb", explanationCn: "祈使句动词" },
                    { text: "you", type: "object", explanation: "Object", explanationCn: "宾语 (你)" },
                    { text: "later", type: "adverb", explanation: "Time adverb", explanationCn: "副词 (稍后)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-44",
                english: "Good afternoon.",
                cn: "下午好。",
                syntax: [
                    { text: "Good", type: "adjective", explanationCn: "形容词 (用于问候)" },
                    { text: "afternoon", type: "object", explanationCn: "名词 (下午)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-45",
                english: "See you tomorrow.",
                cn: "明天见。",
                syntax: [
                    { text: "See", type: "verb", explanationCn: "祈使句动词" },
                    { text: "you", type: "object", explanationCn: "宾语 (你)" },
                    { text: "tomorrow", type: "adverb", explanationCn: "副词 (明天)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-64",
                english: "Have a nice day.",
                cn: "祝你今天愉快。",
                syntax: [
                    { text: "Have", type: "verb", explanationCn: "祈使句动词" },
                    { text: "a nice day", type: "object", explanationCn: "宾语 (美好的一天)" },
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
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=20",
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
            },
            {
                id: "ph-16",
                english: "How much is a taxi to downtown?",
                cn: "去市中心打车多少钱？",
                syntax: [
                    { text: "How much", type: "adverb", explanation: "Question phrase for price", explanationCn: "疑问短语 (多少)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "a taxi", type: "subject", explanationCn: "主语 (一辆出租车)" },
                    { text: "to downtown", type: "preposition", explanationCn: "介词短语 (去市中心)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-17",
                english: "I need a map.",
                cn: "我需要一张地图。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "a map", type: "object", explanationCn: "宾语 (地图)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-46",
                english: "Where is the train station?",
                cn: "火车站在哪里？",
                syntax: [
                    { text: "Where", type: "adverb", explanationCn: "疑问词 (哪里)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "the train station", type: "subject", explanationCn: "主语 (火车站)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-47",
                english: "I need a ticket.",
                cn: "我需要一张票。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "a ticket", type: "object", explanationCn: "宾语 (票)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-65",
                english: "Is there a taxi stand nearby?",
                cn: "附近有出租车站吗？",
                syntax: [
                    { text: "Is", type: "verb", explanationCn: "Be动词" },
                    { text: "there", type: "subject", explanationCn: "主语 (那里)" },
                    { text: "a taxi stand", type: "object", explanationCn: "宾语 (出租车站)" },
                    { text: "nearby", type: "adverb", explanationCn: "副词 (附近)" },
                    { text: "?", type: "other" }
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
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=20",
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
            },
            {
                id: "ph-18",
                english: "Can we get the bill?",
                cn: "可以结账吗？",
                syntax: [
                    { text: "Can", type: "verb", explanation: "Modal verb", explanationCn: "情态动词" },
                    { text: "we", type: "subject", explanationCn: "主语 (我们)" },
                    { text: "get", type: "verb", explanationCn: "动词 (拿到)" },
                    { text: "the bill", type: "object", explanationCn: "宾语 (账单)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-19",
                english: "This tastes great.",
                cn: "这很好吃。",
                syntax: [
                    { text: "This", type: "subject", explanationCn: "主语 (这)" },
                    { text: "tastes", type: "verb", explanationCn: "动词 (尝起来)" },
                    { text: "great", type: "adjective", explanationCn: "形容词 (很棒)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-48",
                english: "Can I see the menu?",
                cn: "可以看一下菜单吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "see", type: "verb", explanationCn: "动词 (看)" },
                    { text: "the menu", type: "object", explanationCn: "宾语 (菜单)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-49",
                english: "No spicy, please.",
                cn: "请不要辣。",
                syntax: [
                    { text: "No spicy", type: "object", explanationCn: "宾语 (不要辣)" },
                    { text: "please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-66",
                english: "Can we get some water?",
                cn: "可以来点水吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "we", type: "subject", explanationCn: "主语 (我们)" },
                    { text: "get", type: "verb", explanationCn: "动词 (得到)" },
                    { text: "some water", type: "object", explanationCn: "宾语 (一些水)" },
                    { text: "?", type: "other" }
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
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=20",
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
            },
            {
                id: "ph-20",
                english: "Do you have this in another size?",
                cn: "这个有其他尺码吗？",
                syntax: [
                    { text: "Do", type: "verb", explanation: "Auxiliary verb", explanationCn: "助动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "have", type: "verb", explanationCn: "动词 (有)" },
                    { text: "this", type: "object", explanationCn: "宾语 (这个)" },
                    { text: "in another size", type: "preposition", explanationCn: "介词短语 (其他尺码)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-21",
                english: "Can I try it on?",
                cn: "我可以试穿吗？",
                syntax: [
                    { text: "Can", type: "verb", explanation: "Modal verb", explanationCn: "情态动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "try", type: "verb", explanationCn: "动词 (试穿)" },
                    { text: "it", type: "object", explanationCn: "宾语 (它)" },
                    { text: "on", type: "adverb", explanation: "Particle", explanationCn: "副词 (上)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-50",
                english: "Do you take credit cards?",
                cn: "可以刷卡吗？",
                syntax: [
                    { text: "Do", type: "verb", explanationCn: "助动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "take", type: "verb", explanationCn: "动词 (接受)" },
                    { text: "credit cards", type: "object", explanationCn: "宾语 (信用卡)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-51",
                english: "I'm just looking.",
                cn: "我只是看看。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "'m just looking", type: "verb", explanationCn: "动词短语 (只是看看)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-67",
                english: "Is there a discount?",
                cn: "有折扣吗？",
                syntax: [
                    { text: "Is", type: "verb", explanationCn: "Be动词" },
                    { text: "there", type: "subject", explanationCn: "主语 (那里/有)" },
                    { text: "a discount", type: "object", explanationCn: "宾语 (折扣)" },
                    { text: "?", type: "other" }
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
        image: "https://images.unsplash.com/photo-1588543385566-413e13a51a24?q=20&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            },
            {
                id: "ph-22",
                english: "I need a doctor.",
                cn: "我需要医生。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "a doctor", type: "object", explanationCn: "宾语 (医生)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-23",
                english: "Where is the hospital?",
                cn: "医院在哪里？",
                syntax: [
                    { text: "Where", type: "adverb", explanationCn: "疑问词 (哪里)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "the hospital", type: "subject", explanationCn: "主语 (医院)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-52",
                english: "I need help right now.",
                cn: "我现在需要帮助。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "help", type: "object", explanationCn: "宾语 (帮助)" },
                    { text: "right now", type: "adverb", explanationCn: "副词 (现在)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-53",
                english: "Call an ambulance!",
                cn: "叫救护车！",
                syntax: [
                    { text: "Call", type: "verb", explanationCn: "祈使句动词" },
                    { text: "an ambulance", type: "object", explanationCn: "宾语 (救护车)" },
                    { text: "!", type: "other" }
                ]
            },
            {
                id: "ph-68",
                english: "Please help me.",
                cn: "请帮帮我。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "help", type: "verb", explanationCn: "动词 (帮助)" },
                    { text: "me", type: "object", explanationCn: "宾语 (我)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "home_life",
        title: "Home & Daily Life",
        cnTitle: "家庭日常",
        description: "Everyday phrases at home.",
        cnDescription: "家里日常会用到的表达。",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=20",
        color: "bg-emerald-400",
        items: [
            {
                id: "ph-24",
                english: "The trash is full.",
                cn: "垃圾桶满了。",
                syntax: [
                    { text: "The trash", type: "subject", explanationCn: "主语 (垃圾)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "full", type: "adjective", explanationCn: "形容词 (满的)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-25",
                english: "I'm doing the laundry.",
                cn: "我在洗衣服。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "'m doing", type: "verb", explanationCn: "动词短语 (正在做)" },
                    { text: "the laundry", type: "object", explanationCn: "宾语 (洗衣)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-26",
                english: "Let's cook dinner.",
                cn: "我们做晚饭吧。",
                syntax: [
                    { text: "Let's", type: "verb", explanation: "Suggestion", explanationCn: "祈使/建议" },
                    { text: "cook", type: "verb", explanationCn: "动词 (做饭)" },
                    { text: "dinner", type: "object", explanationCn: "宾语 (晚饭)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-27",
                english: "Please clean the table.",
                cn: "请把桌子擦干净。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "clean", type: "verb", explanationCn: "动词 (清洁)" },
                    { text: "the table", type: "object", explanationCn: "宾语 (桌子)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-54",
                english: "Can you wash the dishes?",
                cn: "你能洗碗吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "wash", type: "verb", explanationCn: "动词 (洗)" },
                    { text: "the dishes", type: "object", explanationCn: "宾语 (碗碟)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-55",
                english: "The light is broken.",
                cn: "灯坏了。",
                syntax: [
                    { text: "The light", type: "subject", explanationCn: "主语 (灯)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "broken", type: "adjective", explanationCn: "形容词 (坏的)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-69",
                english: "The room is messy.",
                cn: "房间很乱。",
                syntax: [
                    { text: "The room", type: "subject", explanationCn: "主语 (房间)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "messy", type: "adjective", explanationCn: "形容词 (乱的)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "school_class",
        title: "School & Classroom",
        cnTitle: "学校课堂",
        description: "Useful phrases for class.",
        cnDescription: "课堂上常用的表达。",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=20",
        color: "bg-sky-400",
        items: [
            {
                id: "ph-28",
                english: "Please open your textbook.",
                cn: "请打开课本。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "open", type: "verb", explanationCn: "动词 (打开)" },
                    { text: "your textbook", type: "object", explanationCn: "宾语 (课本)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-29",
                english: "I have a question.",
                cn: "我有个问题。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "have", type: "verb", explanationCn: "动词 (有)" },
                    { text: "a question", type: "object", explanationCn: "宾语 (问题)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-30",
                english: "The exam is next week.",
                cn: "考试在下周。",
                syntax: [
                    { text: "The exam", type: "subject", explanationCn: "主语 (考试)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "next week", type: "adverb", explanationCn: "副词 (下周)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-31",
                english: "Please submit your homework.",
                cn: "请交作业。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "submit", type: "verb", explanationCn: "动词 (提交)" },
                    { text: "your homework", type: "object", explanationCn: "宾语 (作业)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-56",
                english: "May I borrow a pen?",
                cn: "我可以借一支笔吗？",
                syntax: [
                    { text: "May", type: "verb", explanationCn: "情态动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "borrow", type: "verb", explanationCn: "动词 (借)" },
                    { text: "a pen", type: "object", explanationCn: "宾语 (一支笔)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-57",
                english: "Please be quiet.",
                cn: "请安静。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "be", type: "verb", explanationCn: "动词 (保持)" },
                    { text: "quiet", type: "adjective", explanationCn: "形容词 (安静)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-70",
                english: "Can you repeat that?",
                cn: "你能再说一遍吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "repeat", type: "verb", explanationCn: "动词 (重复)" },
                    { text: "that", type: "object", explanationCn: "宾语 (那个)" },
                    { text: "?", type: "other" }
                ]
            }
        ]
    },
    {
        id: "work_business",
        title: "Work & Business",
        cnTitle: "职场商务",
        description: "Common phrases at work.",
        cnDescription: "职场沟通常用表达。",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=20",
        color: "bg-slate-400",
        items: [
            {
                id: "ph-32",
                english: "Let's schedule a meeting.",
                cn: "我们安排个会议吧。",
                syntax: [
                    { text: "Let's", type: "verb", explanation: "Suggestion", explanationCn: "祈使/建议" },
                    { text: "schedule", type: "verb", explanationCn: "动词 (安排)" },
                    { text: "a meeting", type: "object", explanationCn: "宾语 (会议)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-33",
                english: "Please review the proposal.",
                cn: "请审阅方案。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "review", type: "verb", explanationCn: "动词 (审阅)" },
                    { text: "the proposal", type: "object", explanationCn: "宾语 (方案)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-34",
                english: "The deadline is Friday.",
                cn: "截止日期是周五。",
                syntax: [
                    { text: "The deadline", type: "subject", explanationCn: "主语 (截止日期)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "Friday", type: "object", explanationCn: "宾语 (周五)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-35",
                english: "I'll send the report.",
                cn: "我会发送报告。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "'ll send", type: "verb", explanationCn: "动词短语 (将会发送)" },
                    { text: "the report", type: "object", explanationCn: "宾语 (报告)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-58",
                english: "Can you send me the file?",
                cn: "你能发给我文件吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "send", type: "verb", explanationCn: "动词 (发送)" },
                    { text: "me", type: "object", explanationCn: "宾语 (我)" },
                    { text: "the file", type: "object", explanationCn: "宾语 (文件)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-59",
                english: "Let's follow up tomorrow.",
                cn: "我们明天再跟进。",
                syntax: [
                    { text: "Let's", type: "verb", explanationCn: "祈使/建议" },
                    { text: "follow up", type: "verb", explanationCn: "动词短语 (跟进)" },
                    { text: "tomorrow", type: "adverb", explanationCn: "副词 (明天)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-71",
                english: "Could you share the agenda?",
                cn: "能分享一下议程吗？",
                syntax: [
                    { text: "Could", type: "verb", explanationCn: "情态动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "share", type: "verb", explanationCn: "动词 (分享)" },
                    { text: "the agenda", type: "object", explanationCn: "宾语 (议程)" },
                    { text: "?", type: "other" }
                ]
            }
        ]
    },
    {
        id: "medical_care",
        title: "Medical Care",
        cnTitle: "医疗看病",
        description: "Phrases for clinics and hospitals.",
        cnDescription: "医院看病常用表达。",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=20",
        color: "bg-red-400",
        items: [
            {
                id: "ph-36",
                english: "I have a fever.",
                cn: "我发烧了。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "have", type: "verb", explanationCn: "动词 (有)" },
                    { text: "a fever", type: "object", explanationCn: "宾语 (发烧)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-37",
                english: "It hurts here.",
                cn: "这里疼。",
                syntax: [
                    { text: "It", type: "subject", explanationCn: "主语 (它)" },
                    { text: "hurts", type: "verb", explanationCn: "动词 (疼)" },
                    { text: "here", type: "adverb", explanationCn: "副词 (这里)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-38",
                english: "I need an appointment.",
                cn: "我需要预约。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "an appointment", type: "object", explanationCn: "宾语 (预约)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-39",
                english: "Are you allergic to anything?",
                cn: "你对什么过敏吗？",
                syntax: [
                    { text: "Are", type: "verb", explanationCn: "Be动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "allergic", type: "adjective", explanationCn: "形容词 (过敏的)" },
                    { text: "to anything", type: "preposition", explanationCn: "介词短语 (对任何东西)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-60",
                english: "I feel dizzy.",
                cn: "我觉得头晕。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "feel", type: "verb", explanationCn: "动词 (感觉)" },
                    { text: "dizzy", type: "adjective", explanationCn: "形容词 (头晕的)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-61",
                english: "Do I need medicine?",
                cn: "我需要吃药吗？",
                syntax: [
                    { text: "Do", type: "verb", explanationCn: "助动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "medicine", type: "object", explanationCn: "宾语 (药)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-72",
                english: "I need to see a doctor.",
                cn: "我需要看医生。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "need", type: "verb", explanationCn: "动词 (需要)" },
                    { text: "to see", type: "verb", explanationCn: "动词短语 (去看)" },
                    { text: "a doctor", type: "object", explanationCn: "宾语 (医生)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    },
    {
        id: "travel_advanced",
        title: "Travel Advanced",
        cnTitle: "旅行进阶",
        description: "More advanced travel situations.",
        cnDescription: "更复杂的旅行场景表达。",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=20",
        color: "bg-indigo-500",
        items: [
            {
                id: "ph-40",
                english: "My flight is delayed.",
                cn: "我的航班延误了。",
                syntax: [
                    { text: "My flight", type: "subject", explanationCn: "主语 (我的航班)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "delayed", type: "adjective", explanationCn: "形容词 (延误的)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-41",
                english: "I have a connecting flight.",
                cn: "我有转机。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "have", type: "verb", explanationCn: "动词 (有)" },
                    { text: "a connecting flight", type: "object", explanationCn: "宾语 (转机航班)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-42",
                english: "Where is the customs exit?",
                cn: "海关出口在哪里？",
                syntax: [
                    { text: "Where", type: "adverb", explanationCn: "疑问词 (哪里)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "the customs exit", type: "subject", explanationCn: "主语 (海关出口)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-43",
                english: "Can I change my seat?",
                cn: "我可以换座位吗？",
                syntax: [
                    { text: "Can", type: "verb", explanation: "Modal verb", explanationCn: "情态动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "change", type: "verb", explanationCn: "动词 (更换)" },
                    { text: "my seat", type: "object", explanationCn: "宾语 (座位)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-62",
                english: "Where is the boarding gate?",
                cn: "登机口在哪里？",
                syntax: [
                    { text: "Where", type: "adverb", explanationCn: "疑问词 (哪里)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "the boarding gate", type: "subject", explanationCn: "主语 (登机口)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-63",
                english: "I lost my luggage.",
                cn: "我丢了行李。",
                syntax: [
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "lost", type: "verb", explanationCn: "动词过去式 (丢了)" },
                    { text: "my luggage", type: "object", explanationCn: "宾语 (行李)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-73",
                english: "Can I get a refund?",
                cn: "我可以退款吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "I", type: "subject", explanationCn: "主语 (我)" },
                    { text: "get", type: "verb", explanationCn: "动词 (得到)" },
                    { text: "a refund", type: "object", explanationCn: "宾语 (退款)" },
                    { text: "?", type: "other" }
                ]
            }
        ]
    },
    {
        id: "technology",
        title: "Technology",
        cnTitle: "科技数码",
        description: "Useful phrases about devices and apps.",
        cnDescription: "数码设备与应用相关表达。",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=20",
        color: "bg-cyan-500",
        items: [
            {
                id: "ph-74",
                english: "My phone is out of battery.",
                cn: "我的手机没电了。",
                syntax: [
                    { text: "My phone", type: "subject", explanationCn: "主语 (我的手机)" },
                    { text: "is", type: "verb", explanationCn: "Be动词" },
                    { text: "out of battery", type: "adjective", explanationCn: "形容词短语 (没电)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-75",
                english: "What's the Wi-Fi password?",
                cn: "Wi-Fi 密码是多少？",
                syntax: [
                    { text: "What's", type: "verb", explanationCn: "疑问结构" },
                    { text: "the Wi-Fi password", type: "object", explanationCn: "宾语 (Wi-Fi 密码)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-76",
                english: "Please update the app.",
                cn: "请更新这个应用。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "update", type: "verb", explanationCn: "动词 (更新)" },
                    { text: "the app", type: "object", explanationCn: "宾语 (应用)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-77",
                english: "Can you send me the file?",
                cn: "你能发给我文件吗？",
                syntax: [
                    { text: "Can", type: "verb", explanationCn: "情态动词" },
                    { text: "you", type: "subject", explanationCn: "主语 (你)" },
                    { text: "send", type: "verb", explanationCn: "动词 (发送)" },
                    { text: "me", type: "object", explanationCn: "宾语 (我)" },
                    { text: "the file", type: "object", explanationCn: "宾语 (文件)" },
                    { text: "?", type: "other" }
                ]
            },
            {
                id: "ph-78",
                english: "The app keeps crashing.",
                cn: "这个应用总是崩溃。",
                syntax: [
                    { text: "The app", type: "subject", explanationCn: "主语 (应用)" },
                    { text: "keeps crashing", type: "verb", explanationCn: "动词短语 (一直崩溃)" },
                    { text: ".", type: "other" }
                ]
            },
            {
                id: "ph-79",
                english: "Please turn on Bluetooth.",
                cn: "请打开蓝牙。",
                syntax: [
                    { text: "Please", type: "adverb", explanationCn: "副词 (请)" },
                    { text: "turn on", type: "verb", explanationCn: "动词短语 (打开)" },
                    { text: "Bluetooth", type: "object", explanationCn: "宾语 (蓝牙)" },
                    { text: ".", type: "other" }
                ]
            }
        ]
    }
];
