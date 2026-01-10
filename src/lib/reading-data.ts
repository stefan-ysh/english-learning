export type ReadingWord = {
    id: string;
    word: string;
    meaning: string;
    meaningCn: string;
    example?: string;
    exampleCn?: string;
};

export type ReadingParagraph = {
    id: string;
    en: string;
    cn: string;
    highlights: ReadingWord[];
};

export type ReadingArticle = {
    id: string;
    title: string;
    cnTitle: string;
    level: "A1" | "A2" | "B1";
    minutes: number;
    description: string;
    cnDescription: string;
    keyPhrases: ReadingWord[];
    paragraphs: ReadingParagraph[];
    comprehension: {
        id: string;
        question: string;
        questionCn: string;
        options: string[];
        answer: string;
        explanation: string;
        explanationCn: string;
    }[];
    vocabQuiz: {
        id: string;
        word: string;
        options: string[];
        answer: string;
        explanation: string;
        explanationCn: string;
    }[];
};

export const READING_ARTICLES: ReadingArticle[] = [
    {
        id: "morning-routine",
        title: "My Morning Routine",
        cnTitle: "我的早晨日常",
        level: "A1",
        minutes: 3,
        description: "A short text about daily habits.",
        cnDescription: "关于日常习惯的短文。",
        keyPhrases: [
            { id: "kp-1", word: "wake up", meaning: "to stop sleeping", meaningCn: "醒来" },
            { id: "kp-2", word: "make coffee", meaning: "prepare coffee", meaningCn: "煮咖啡" },
            { id: "kp-3", word: "check my schedule", meaning: "review plans", meaningCn: "查看日程" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "I wake up at seven and make coffee. The sunlight fills the kitchen. I open the window and breathe fresh air.",
                cn: "我七点起床并煮咖啡。阳光洒满厨房。我打开窗户呼吸新鲜空气。",
                highlights: [
                    { id: "wake-up", word: "wake up", meaning: "to stop sleeping", meaningCn: "醒来" },
                    { id: "sunlight", word: "sunlight", meaning: "light from the sun", meaningCn: "阳光" },
                    { id: "kitchen", word: "kitchen", meaning: "a room for cooking", meaningCn: "厨房" },
                ],
            },
            {
                id: "p2",
                en: "After breakfast, I check my schedule and pack my bag. I leave home at eight.",
                cn: "吃完早饭后，我查看日程并收拾包。我八点出门。",
                highlights: [
                    { id: "schedule", word: "schedule", meaning: "a plan of times", meaningCn: "日程" },
                    { id: "pack", word: "pack", meaning: "to put things into a bag", meaningCn: "收拾、装包" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c1",
                question: "What time does the writer wake up?",
                questionCn: "作者几点起床？",
                options: ["At seven", "At eight", "At nine"],
                answer: "At seven",
                explanation: "The first sentence says seven.",
                explanationCn: "第一句提到七点。",
            },
        ],
        vocabQuiz: [
            {
                id: "v1",
                word: "schedule",
                options: ["计划/日程", "厨房", "背包"],
                answer: "计划/日程",
                explanation: "Schedule means a plan of times.",
                explanationCn: "schedule 表示日程安排。",
            },
        ],
    },
    {
        id: "city-walk",
        title: "A Walk in the City",
        cnTitle: "城市散步",
        level: "A2",
        minutes: 4,
        description: "Explore a city walk with useful words.",
        cnDescription: "一段城市散步的小短文。",
        keyPhrases: [
            { id: "kp-4", word: "buy a ticket", meaning: "purchase a ticket", meaningCn: "买票" },
            { id: "kp-5", word: "enter the park", meaning: "go into the park", meaningCn: "进入公园" },
            { id: "kp-6", word: "makes me smile", meaning: "causes me to smile", meaningCn: "让我微笑" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "The streets are busy, but the park is calm. I buy a ticket and enter. People sit on the grass and read.",
                cn: "街道很繁忙，但公园很安静。我买了一张票然后进入。人们坐在草地上读书。",
                highlights: [
                    { id: "streets", word: "streets", meaning: "roads in a town", meaningCn: "街道" },
                    { id: "calm", word: "calm", meaning: "quiet and peaceful", meaningCn: "平静的" },
                    { id: "ticket", word: "ticket", meaning: "a pass to enter", meaningCn: "票" },
                ],
            },
            {
                id: "p2",
                en: "A musician plays near the fountain. The melody makes me smile. I take a photo and text my friend.",
                cn: "一位音乐家在喷泉旁演奏。旋律让我微笑。我拍了张照片发给朋友。",
                highlights: [
                    { id: "musician", word: "musician", meaning: "a person who plays music", meaningCn: "音乐家" },
                    { id: "fountain", word: "fountain", meaning: "a structure with water", meaningCn: "喷泉" },
                    { id: "melody", word: "melody", meaning: "a tune", meaningCn: "旋律" },
                ],
            },
            {
                id: "p3",
                en: "When it gets dark, the lights turn on. I walk home slowly.",
                cn: "天黑后，灯光亮起。我慢慢走回家。",
                highlights: [
                    { id: "lights", word: "lights", meaning: "lamps or lighting", meaningCn: "灯光" },
                    { id: "slowly", word: "slowly", meaning: "not fast", meaningCn: "慢慢地" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c2",
                question: "Where does the musician play?",
                questionCn: "音乐家在哪里演奏？",
                options: ["Near the fountain", "In the station", "At the gate"],
                answer: "Near the fountain",
                explanation: "The second paragraph says near the fountain.",
                explanationCn: "第二段提到喷泉旁。",
            },
        ],
        vocabQuiz: [
            {
                id: "v2",
                word: "fountain",
                options: ["喷泉", "广场", "图书馆"],
                answer: "喷泉",
                explanation: "A fountain is a structure with water.",
                explanationCn: "fountain 指喷泉。",
            },
        ],
    },
    {
        id: "business-email",
        title: "A Simple Business Email",
        cnTitle: "一封简单商务邮件",
        level: "B1",
        minutes: 5,
        description: "A short email about scheduling a meeting.",
        cnDescription: "关于安排会议的简短邮件。",
        keyPhrases: [
            { id: "kp-7", word: "schedule a meeting", meaning: "arrange a meeting", meaningCn: "安排会议" },
            { id: "kp-8", word: "review the attached file", meaning: "check the attachment", meaningCn: "审阅附件" },
            { id: "kp-9", word: "share feedback", meaning: "give opinions", meaningCn: "提供反馈" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "I hope you are well. Could we schedule a meeting next week? I want to review the project timeline.",
                cn: "希望你一切安好。我们可以下周安排一个会议吗？我想审阅项目进度。",
                highlights: [
                    { id: "schedule", word: "schedule", meaning: "to plan", meaningCn: "安排" },
                    { id: "meeting", word: "meeting", meaning: "a work discussion", meaningCn: "会议" },
                ],
            },
            {
                id: "p2",
                en: "Please review the attached file and share your feedback. Your comments will help us finalize the plan.",
                cn: "请审阅附件并分享你的反馈。你的意见将帮助我们确定方案。",
                highlights: [
                    { id: "attached", word: "attached", meaning: "included with the email", meaningCn: "附件的" },
                    { id: "feedback", word: "feedback", meaning: "opinions or comments", meaningCn: "反馈" },
                ],
            },
            {
                id: "p3",
                en: "If you are available on Tuesday or Wednesday, please let me know.",
                cn: "如果你周二或周三有空，请告诉我。",
                highlights: [
                    { id: "available", word: "available", meaning: "free to do something", meaningCn: "有空的" },
                    { id: "let me know", word: "let me know", meaning: "tell me", meaningCn: "告知我" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c3",
                question: "What does the writer ask the reader to do?",
                questionCn: "作者请读者做什么？",
                options: ["Review the file", "Book a hotel", "Buy a ticket"],
                answer: "Review the file",
                explanation: "The email says review the attached file.",
                explanationCn: "邮件中提到请审阅附件。",
            },
        ],
        vocabQuiz: [
            {
                id: "v3",
                word: "feedback",
                options: ["反馈", "附件", "会议"],
                answer: "反馈",
                explanation: "Feedback means opinions or comments.",
                explanationCn: "feedback 表示反馈意见。",
            },
        ],
    },
    {
        id: "healthy-habit",
        title: "A Healthy Habit",
        cnTitle: "一个健康习惯",
        level: "A1",
        minutes: 3,
        description: "Simple sentences about healthy habits.",
        cnDescription: "关于健康习惯的简单句子。",
        keyPhrases: [
            { id: "kp-10", word: "drink water", meaning: "consume water", meaningCn: "喝水" },
            { id: "kp-11", word: "take a walk", meaning: "go for a walk", meaningCn: "散步" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "I drink water every morning and take a short walk. I feel calm and ready for the day.",
                cn: "我每天早上喝水并散步。我感到平静并准备好开始一天。",
                highlights: [
                    { id: "drink", word: "drink", meaning: "to consume liquid", meaningCn: "喝" },
                    { id: "walk", word: "walk", meaning: "to move on foot", meaningCn: "步行" },
                ],
            },
            {
                id: "p2",
                en: "These habits make me feel energetic. I sleep better at night.",
                cn: "这些习惯让我精力充沛。我晚上睡得更好。",
                highlights: [
                    { id: "habits", word: "habits", meaning: "regular actions", meaningCn: "习惯" },
                    { id: "energetic", word: "energetic", meaning: "full of energy", meaningCn: "精力充沛的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c4",
                question: "What does the writer do every morning?",
                questionCn: "作者每天早上做什么？",
                options: ["Drink water", "Read books", "Watch TV"],
                answer: "Drink water",
                explanation: "The first sentence says drink water.",
                explanationCn: "第一句提到喝水。",
            },
        ],
        vocabQuiz: [
            {
                id: "v4",
                word: "energetic",
                options: ["精力充沛的", "疲惫的", "安静的"],
                answer: "精力充沛的",
                explanation: "Energetic means full of energy.",
                explanationCn: "energetic 表示精力充沛。",
            },
        ],
    },
    {
        id: "weekend-plan",
        title: "Weekend Plans",
        cnTitle: "周末计划",
        level: "A2",
        minutes: 4,
        description: "Planning a simple weekend.",
        cnDescription: "计划一个简单的周末。",
        keyPhrases: [
            { id: "kp-12", word: "make a plan", meaning: "create a plan", meaningCn: "制定计划" },
            { id: "kp-13", word: "visit a museum", meaning: "go to a museum", meaningCn: "参观博物馆" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "On Saturday, we plan to visit a museum and have lunch nearby. We will buy tickets online first.",
                cn: "周六我们计划去参观博物馆，并在附近吃午饭。我们会先在网上买票。",
                highlights: [
                    { id: "plan", word: "plan", meaning: "to decide ahead", meaningCn: "计划" },
                    { id: "museum", word: "museum", meaning: "a place for art or history", meaningCn: "博物馆" },
                ],
            },
            {
                id: "p2",
                en: "On Sunday, we will stay home and watch a movie. In the evening, we prepare for Monday.",
                cn: "周日我们在家看电影。晚上我们为周一做准备。",
                highlights: [
                    { id: "stay", word: "stay", meaning: "remain in a place", meaningCn: "待在" },
                    { id: "movie", word: "movie", meaning: "a film", meaningCn: "电影" },
                ],
            },
            {
                id: "p3",
                en: "The weekend is short, but it feels relaxing.",
                cn: "周末很短，但感觉很放松。",
                highlights: [
                    { id: "relaxing", word: "relaxing", meaning: "making you feel calm", meaningCn: "放松的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c5",
                question: "What do they plan to do on Saturday?",
                questionCn: "他们周六计划做什么？",
                options: ["Visit a museum", "Go to the beach", "Work overtime"],
                answer: "Visit a museum",
                explanation: "Saturday plan is a museum.",
                explanationCn: "周六计划是参观博物馆。",
            },
        ],
        vocabQuiz: [
            {
                id: "v5",
                word: "nearby",
                options: ["附近", "远处", "中间"],
                answer: "附近",
                explanation: "Nearby means close to.",
                explanationCn: "nearby 表示附近。",
            },
        ],
    },
    {
        id: "rainy-commute",
        title: "A Rainy Commute",
        cnTitle: "雨天通勤",
        level: "A2",
        minutes: 4,
        description: "A short story about commuting in the rain.",
        cnDescription: "关于雨天通勤的小故事。",
        keyPhrases: [
            { id: "kp-28", word: "take the bus", meaning: "ride the bus", meaningCn: "乘公交" },
            { id: "kp-29", word: "get soaked", meaning: "become very wet", meaningCn: "被淋湿" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "It starts to rain in the morning. I grab an umbrella and hurry to the bus stop.",
                cn: "早上开始下雨。我拿上伞赶去公交站。",
                highlights: [
                    { id: "umbrella", word: "umbrella", meaning: "a tool for rain", meaningCn: "雨伞" },
                    { id: "hurry", word: "hurry", meaning: "move quickly", meaningCn: "赶紧" },
                ],
            },
            {
                id: "p2",
                en: "The bus is late, and the street is crowded. I wait patiently.",
                cn: "公交晚点了，街上很拥挤。我耐心地等待。",
                highlights: [
                    { id: "crowded", word: "crowded", meaning: "full of people", meaningCn: "拥挤的" },
                    { id: "patiently", word: "patiently", meaning: "with patience", meaningCn: "耐心地" },
                ],
            },
            {
                id: "p3",
                en: "When the bus arrives, I feel relieved and dry off my jacket.",
                cn: "公交来了后，我松了一口气并把外套擦干。",
                highlights: [
                    { id: "relieved", word: "relieved", meaning: "less worried", meaningCn: "松了一口气" },
                    { id: "jacket", word: "jacket", meaning: "a short coat", meaningCn: "外套" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c11",
                question: "Why does the writer hurry?",
                questionCn: "作者为什么赶时间？",
                options: ["To catch the bus", "To buy lunch", "To meet a friend"],
                answer: "To catch the bus",
                explanation: "They hurry to the bus stop.",
                explanationCn: "他赶去公交站。",
            },
        ],
        vocabQuiz: [
            {
                id: "v11",
                word: "crowded",
                options: ["拥挤的", "安静的", "干净的"],
                answer: "拥挤的",
                explanation: "Crowded means full of people.",
                explanationCn: "crowded 表示拥挤的。",
            },
        ],
    },
    {
        id: "office-day",
        title: "A Busy Office Day",
        cnTitle: "忙碌的办公室一天",
        level: "B1",
        minutes: 5,
        description: "A short story about tasks at work.",
        cnDescription: "关于工作任务的小故事。",
        keyPhrases: [
            { id: "kp-14", word: "meet a deadline", meaning: "finish on time", meaningCn: "按时完成" },
            { id: "kp-15", word: "send a report", meaning: "deliver a report", meaningCn: "发送报告" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "I review the budget and meet a deadline before noon. Then I join a short meeting.",
                cn: "我在中午前审阅预算并完成截止任务。然后我参加一个简短会议。",
                highlights: [
                    { id: "budget", word: "budget", meaning: "plan for money", meaningCn: "预算" },
                    { id: "deadline", word: "deadline", meaning: "latest time for a task", meaningCn: "截止日期" },
                ],
            },
            {
                id: "p2",
                en: "In the afternoon, I send a report to the client. I also reply to several emails.",
                cn: "下午我把报告发给客户。我还回复了几封邮件。",
                highlights: [
                    { id: "report", word: "report", meaning: "a written summary", meaningCn: "报告" },
                    { id: "client", word: "client", meaning: "a customer", meaningCn: "客户" },
                ],
            },
            {
                id: "p3",
                en: "Before leaving, I update the project board and plan tomorrow's tasks.",
                cn: "下班前，我更新项目看板并计划明天的任务。",
                highlights: [
                    { id: "update", word: "update", meaning: "to refresh information", meaningCn: "更新" },
                    { id: "tasks", word: "tasks", meaning: "work items", meaningCn: "任务" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c6",
                question: "What does the writer send in the afternoon?",
                questionCn: "作者下午发送什么？",
                options: ["A report", "A ticket", "A photo"],
                answer: "A report",
                explanation: "The second paragraph says report.",
                explanationCn: "第二段提到报告。",
            },
        ],
        vocabQuiz: [
            {
                id: "v6",
                word: "deadline",
                options: ["截止日期", "会议", "地点"],
                answer: "截止日期",
                explanation: "Deadline is the latest time for a task.",
                explanationCn: "deadline 表示截止日期。",
            },
        ],
    },
    {
        id: "library-evening",
        title: "An Evening at the Library",
        cnTitle: "图书馆的夜晚",
        level: "B1",
        minutes: 6,
        description: "A calm evening with books and notes.",
        cnDescription: "关于夜晚学习的平静故事。",
        keyPhrases: [
            { id: "kp-30", word: "take notes", meaning: "write notes", meaningCn: "记笔记" },
            { id: "kp-31", word: "stay focused", meaning: "keep attention", meaningCn: "保持专注" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "After work, I go to the library to study. The room is quiet and warm.",
                cn: "下班后，我去图书馆学习。房间安静而温暖。",
                highlights: [
                    { id: "library", word: "library", meaning: "a place for books", meaningCn: "图书馆" },
                    { id: "quiet", word: "quiet", meaning: "not noisy", meaningCn: "安静的" },
                ],
            },
            {
                id: "p2",
                en: "I open my notebook and take notes from a history book.",
                cn: "我打开笔记本，从一本历史书中做笔记。",
                highlights: [
                    { id: "notebook", word: "notebook", meaning: "book for notes", meaningCn: "笔记本" },
                    { id: "history", word: "history", meaning: "study of the past", meaningCn: "历史" },
                ],
            },
            {
                id: "p3",
                en: "A friend texts me, but I stay focused and finish my chapter.",
                cn: "朋友给我发消息，但我保持专注并读完一章。",
                highlights: [
                    { id: "focused", word: "focused", meaning: "concentrated", meaningCn: "专注的" },
                    { id: "chapter", word: "chapter", meaning: "part of a book", meaningCn: "章节" },
                ],
            },
            {
                id: "p4",
                en: "When I leave, the sky is dark and the street is empty.",
                cn: "我离开时，天色已暗，街道很空。",
                highlights: [
                    { id: "empty", word: "empty", meaning: "without people", meaningCn: "空的" },
                    { id: "dark", word: "dark", meaning: "not bright", meaningCn: "昏暗的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c12",
                question: "Why does the writer go to the library?",
                questionCn: "作者为什么去图书馆？",
                options: ["To study", "To eat dinner", "To meet a client"],
                answer: "To study",
                explanation: "The first sentence says to study.",
                explanationCn: "第一句提到去学习。",
            },
        ],
        vocabQuiz: [
            {
                id: "v12",
                word: "focused",
                options: ["专注的", "害怕的", "无聊的"],
                answer: "专注的",
                explanation: "Focused means concentrated.",
                explanationCn: "focused 表示专注。",
            },
        ],
    },
    {
        id: "travel-story",
        title: "A Longer Travel Day",
        cnTitle: "一次较长的旅行日",
        level: "B1",
        minutes: 6,
        description: "A multi-paragraph story about travel.",
        cnDescription: "一篇多段旅行小故事。",
        keyPhrases: [
            { id: "kp-16", word: "check in", meaning: "register at the airport", meaningCn: "办理登机" },
            { id: "kp-17", word: "board the plane", meaning: "get on the plane", meaningCn: "登机" },
            { id: "kp-18", word: "missed the bus", meaning: "did not catch the bus", meaningCn: "错过公交" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "I arrived at the airport early and checked in. The line was long but moved quickly.",
                cn: "我很早到达机场并办理了登机。队伍很长，但移动很快。",
                highlights: [
                    { id: "arrived", word: "arrived", meaning: "came to a place", meaningCn: "到达" },
                    { id: "checked in", word: "checked in", meaning: "registered", meaningCn: "办理登机" },
                ],
            },
            {
                id: "p2",
                en: "After security, I found my gate and bought a sandwich. Boarding started at noon.",
                cn: "安检后，我找到登机口并买了三明治。中午开始登机。",
                highlights: [
                    { id: "security", word: "security", meaning: "safety check", meaningCn: "安检" },
                    { id: "gate", word: "gate", meaning: "boarding gate", meaningCn: "登机口" },
                ],
            },
            {
                id: "p3",
                en: "The flight was smooth, but the bus to the hotel was late. I waited and finally arrived.",
                cn: "飞行很顺利，但去酒店的公交晚点了。我等了一会儿终于到达。",
                highlights: [
                    { id: "smooth", word: "smooth", meaning: "without problems", meaningCn: "顺利的" },
                    { id: "late", word: "late", meaning: "not on time", meaningCn: "晚点的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c7",
                question: "What did the writer buy at the airport?",
                questionCn: "作者在机场买了什么？",
                options: ["A sandwich", "A ticket", "A map"],
                answer: "A sandwich",
                explanation: "The second paragraph mentions a sandwich.",
                explanationCn: "第二段提到三明治。",
            },
        ],
        vocabQuiz: [
            {
                id: "v7",
                word: "gate",
                options: ["登机口", "行李处", "出口"],
                answer: "登机口",
                explanation: "Gate is the boarding gate.",
                explanationCn: "gate 指登机口。",
            },
        ],
    },
    {
        id: "classic-pride-adapted",
        title: "A Conversation About First Impressions (Adapted)",
        cnTitle: "关于第一印象的对话（改写）",
        level: "B1",
        minutes: 6,
        description: "An adapted scene inspired by a classic novel.",
        cnDescription: "改写自经典小说的场景。",
        keyPhrases: [
            { id: "kp-19", word: "first impression", meaning: "initial opinion", meaningCn: "第一印象" },
            { id: "kp-20", word: "be polite", meaning: "show good manners", meaningCn: "有礼貌" },
            { id: "kp-21", word: "make a mistake", meaning: "do something wrong", meaningCn: "犯错误" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "At a small gathering, two sisters discuss a new guest. One thinks he is proud, the other says he is simply quiet.",
                cn: "在一个小型聚会上，两姐妹谈论一位新来宾。一位认为他很傲慢，另一位说他只是安静。",
                highlights: [
                    { id: "gathering", word: "gathering", meaning: "a small meeting", meaningCn: "聚会" },
                    { id: "guest", word: "guest", meaning: "a visitor", meaningCn: "来宾" },
                ],
            },
            {
                id: "p2",
                en: "They agree that first impressions can be misleading. A person might seem cold but be kind in private.",
                cn: "她们同意第一印象可能会误导。一个人看起来冷淡，但私下可能很友善。",
                highlights: [
                    { id: "misleading", word: "misleading", meaning: "giving the wrong idea", meaningCn: "误导的" },
                    { id: "private", word: "private", meaning: "personal, not public", meaningCn: "私下的" },
                ],
            },
            {
                id: "p3",
                en: "Later, the sisters decide to be polite and patient. They want to know him better before judging.",
                cn: "后来，她们决定保持礼貌和耐心。在下判断之前，她们想更了解他。",
                highlights: [
                    { id: "patient", word: "patient", meaning: "calm and willing to wait", meaningCn: "耐心的" },
                    { id: "judge", word: "judge", meaning: "to form an opinion", meaningCn: "评价" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c8",
                question: "What do the sisters agree about first impressions?",
                questionCn: "姐妹们对第一印象达成什么看法？",
                options: ["They can be misleading", "They are always correct", "They are unimportant"],
                answer: "They can be misleading",
                explanation: "They say first impressions can be misleading.",
                explanationCn: "她们说第一印象可能会误导。",
            },
        ],
        vocabQuiz: [
            {
                id: "v8",
                word: "polite",
                options: ["有礼貌的", "冷淡的", "生气的"],
                answer: "有礼貌的",
                explanation: "Polite means showing good manners.",
                explanationCn: "polite 表示有礼貌。",
            },
        ],
    },
    {
        id: "classic-odyssey-adapted",
        title: "A Long Journey Home (Adapted)",
        cnTitle: "回家的漫长旅程（改写）",
        level: "B1",
        minutes: 7,
        description: "An adapted passage about a traveler returning home.",
        cnDescription: "改写自史诗的回家之旅。",
        keyPhrases: [
            { id: "kp-22", word: "long journey", meaning: "a long trip", meaningCn: "漫长旅程" },
            { id: "kp-23", word: "face danger", meaning: "deal with risk", meaningCn: "面对危险" },
            { id: "kp-24", word: "stay determined", meaning: "keep resolved", meaningCn: "保持坚定" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "A sailor has traveled for many years. He misses his home and thinks about his family every night.",
                cn: "一名水手漂泊多年。他想念家，每晚都想着家人。",
                highlights: [
                    { id: "sailor", word: "sailor", meaning: "a person who works on a ship", meaningCn: "水手" },
                    { id: "misses", word: "misses", meaning: "feels sad without", meaningCn: "想念" },
                ],
            },
            {
                id: "p2",
                en: "The sea is rough and the wind is strong. Even so, he stays determined and keeps moving.",
                cn: "海面很汹涌，风也很大。即便如此，他仍保持坚定继续前行。",
                highlights: [
                    { id: "rough", word: "rough", meaning: "not smooth", meaningCn: "汹涌的" },
                    { id: "determined", word: "determined", meaning: "firm and resolved", meaningCn: "坚定的" },
                ],
            },
            {
                id: "p3",
                en: "When he finally sees land, he feels hope. He knows the journey is nearly over.",
                cn: "当他终于看到陆地时，他感到希望。他知道旅程快结束了。",
                highlights: [
                    { id: "hope", word: "hope", meaning: "a positive feeling about the future", meaningCn: "希望" },
                    { id: "nearly", word: "nearly", meaning: "almost", meaningCn: "几乎" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c9",
                question: "How does the sailor feel when he sees land?",
                questionCn: "水手看到陆地时是什么感受？",
                options: ["Hopeful", "Angry", "Confused"],
                answer: "Hopeful",
                explanation: "He feels hope when he sees land.",
                explanationCn: "看到陆地时他感到希望。",
            },
        ],
        vocabQuiz: [
            {
                id: "v9",
                word: "rough",
                options: ["汹涌的", "安静的", "干燥的"],
                answer: "汹涌的",
                explanation: "Rough means not smooth.",
                explanationCn: "rough 表示不平稳的。",
            },
        ],
    },
    {
        id: "classic-great-gatsby-adapted",
        title: "An Evening Across the Bay (Adapted)",
        cnTitle: "海湾对岸的夜晚（改写）",
        level: "B1",
        minutes: 7,
        description: "An adapted paragraph about a distant light.",
        cnDescription: "改写自经典小说的远处灯光描写。",
        keyPhrases: [
            { id: "kp-25", word: "across the bay", meaning: "on the other side", meaningCn: "海湾对岸" },
            { id: "kp-26", word: "a distant light", meaning: "a far light", meaningCn: "远处的灯光" },
            { id: "kp-27", word: "reach for", meaning: "try to get", meaningCn: "伸手去够" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "At night, a man stands by the water and looks across the bay. A distant light appears and seems to call him.",
                cn: "夜里，一个人站在水边望向海湾对岸。远处的灯光出现，似乎在召唤他。",
                highlights: [
                    { id: "bay", word: "bay", meaning: "a wide part of the sea", meaningCn: "海湾" },
                    { id: "distant", word: "distant", meaning: "far away", meaningCn: "遥远的" },
                ],
            },
            {
                id: "p2",
                en: "He reaches out with his hand, but the light stays far away. It becomes a symbol of his hope.",
                cn: "他伸出手，但灯光依然遥远。这成了他希望的象征。",
                highlights: [
                    { id: "reaches", word: "reaches", meaning: "stretches toward", meaningCn: "伸向" },
                    { id: "symbol", word: "symbol", meaning: "a sign or meaning", meaningCn: "象征" },
                ],
            },
            {
                id: "p3",
                en: "He knows the future may be uncertain, yet he cannot stop dreaming.",
                cn: "他知道未来可能不确定，但仍无法停止梦想。",
                highlights: [
                    { id: "uncertain", word: "uncertain", meaning: "not sure", meaningCn: "不确定的" },
                    { id: "dreaming", word: "dreaming", meaning: "imagining a better future", meaningCn: "梦想" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c10",
                question: "What does the distant light represent?",
                questionCn: "远处的灯光象征什么？",
                options: ["Hope", "Fear", "Anger"],
                answer: "Hope",
                explanation: "The light becomes a symbol of hope.",
                explanationCn: "灯光成了希望的象征。",
            },
        ],
        vocabQuiz: [
            {
                id: "v10",
                word: "symbol",
                options: ["象征", "房间", "风景"],
                answer: "象征",
                explanation: "Symbol means a sign or meaning.",
                explanationCn: "symbol 表示象征。",
            },
        ],
    },
    {
        id: "classic-little-prince-adapted",
        title: "A Boy from a Small Planet (Adapted)",
        cnTitle: "来自小星球的男孩（改写）",
        level: "B1",
        minutes: 7,
        description: "An adapted scene inspired by a modern classic.",
        cnDescription: "改写自现代经典的场景。",
        keyPhrases: [
            { id: "kp-32", word: "take care of", meaning: "look after", meaningCn: "照顾" },
            { id: "kp-33", word: "ask questions", meaning: "inquire", meaningCn: "提问" },
            { id: "kp-34", word: "feel lonely", meaning: "feel alone", meaningCn: "感到孤独" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "A traveler meets a boy who says he comes from a tiny planet. The boy is curious and asks many questions.",
                cn: "一位旅行者遇到一个男孩，男孩说他来自一个小小的星球。他很好奇，不停提问。",
                highlights: [
                    { id: "traveler", word: "traveler", meaning: "a person who travels", meaningCn: "旅行者" },
                    { id: "curious", word: "curious", meaning: "wanting to know", meaningCn: "好奇的" },
                ],
            },
            {
                id: "p2",
                en: "He talks about his flower and how he takes care of it. He also feels lonely at times.",
                cn: "他谈到他的花，以及他如何照顾它。他有时也会感到孤独。",
                highlights: [
                    { id: "flower", word: "flower", meaning: "a plant bloom", meaningCn: "花" },
                    { id: "lonely", word: "lonely", meaning: "feeling alone", meaningCn: "孤独的" },
                ],
            },
            {
                id: "p3",
                en: "The traveler listens and learns that important things are often simple.",
                cn: "旅行者倾听并明白重要的东西往往很简单。",
                highlights: [
                    { id: "important", word: "important", meaning: "having great value", meaningCn: "重要的" },
                    { id: "simple", word: "simple", meaning: "not complex", meaningCn: "简单的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c13",
                question: "Where does the boy say he comes from?",
                questionCn: "男孩说他来自哪里？",
                options: ["A tiny planet", "A big city", "A mountain village"],
                answer: "A tiny planet",
                explanation: "He says he comes from a tiny planet.",
                explanationCn: "他说他来自一个小小的星球。",
            },
        ],
        vocabQuiz: [
            {
                id: "v13",
                word: "curious",
                options: ["好奇的", "生气的", "疲惫的"],
                answer: "好奇的",
                explanation: "Curious means wanting to know.",
                explanationCn: "curious 表示好奇的。",
            },
        ],
    },
    {
        id: "classic-old-man-sea-adapted",
        title: "The Old Fisherman (Adapted)",
        cnTitle: "老渔夫（改写）",
        level: "B1",
        minutes: 7,
        description: "An adapted passage about an old fisherman at sea.",
        cnDescription: "改写自经典小说的海上片段。",
        keyPhrases: [
            { id: "kp-35", word: "set out", meaning: "start a journey", meaningCn: "出发" },
            { id: "kp-36", word: "hold on", meaning: "keep a firm grip", meaningCn: "坚持住" },
            { id: "kp-37", word: "feel exhausted", meaning: "be very tired", meaningCn: "感到筋疲力尽" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "An old fisherman sets out before dawn. The sea is quiet, and he rows steadily.",
                cn: "一位老渔夫在黎明前出发。海面安静，他稳稳地划船。",
                highlights: [
                    { id: "fisherman", word: "fisherman", meaning: "a person who fishes", meaningCn: "渔夫" },
                    { id: "dawn", word: "dawn", meaning: "early morning", meaningCn: "黎明" },
                ],
            },
            {
                id: "p2",
                en: "He feels the line pull and knows a big fish is there. He holds on for hours.",
                cn: "他感觉鱼线被拉动，知道有大鱼。他坚持了几个小时。",
                highlights: [
                    { id: "line", word: "line", meaning: "fishing line", meaningCn: "鱼线" },
                    { id: "holds on", word: "holds on", meaning: "keeps a firm grip", meaningCn: "坚持住" },
                ],
            },
            {
                id: "p3",
                en: "His hands ache, but he refuses to give up. He believes patience will win.",
                cn: "他的手很痛，但他拒绝放弃。他相信耐心会带来胜利。",
                highlights: [
                    { id: "ache", word: "ache", meaning: "feel pain", meaningCn: "疼痛" },
                    { id: "refuses", word: "refuses", meaning: "says no", meaningCn: "拒绝" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c14",
                question: "Why does the fisherman hold on?",
                questionCn: "渔夫为什么坚持？",
                options: ["A big fish is there", "The boat is broken", "He is lost"],
                answer: "A big fish is there",
                explanation: "He feels a big fish on the line.",
                explanationCn: "他感觉鱼线上有大鱼。",
            },
        ],
        vocabQuiz: [
            {
                id: "v14",
                word: "dawn",
                options: ["黎明", "夜晚", "中午"],
                answer: "黎明",
                explanation: "Dawn is early morning.",
                explanationCn: "dawn 表示黎明。",
            },
        ],
    },
    {
        id: "duties-of-a-student",
        title: "Duties of a Student",
        cnTitle: "学生的责任",
        level: "B1",
        minutes: 6,
        description: "An essay about student responsibilities and values.",
        cnDescription: "关于学生责任与价值观的短文。",
        keyPhrases: [
            { id: "kp-38", word: "in the first place", meaning: "firstly", meaningCn: "首先" },
            { id: "kp-39", word: "be filial to", meaning: "respect and care for parents", meaningCn: "孝顺" },
            { id: "kp-40", word: "tell lies", meaning: "say something untrue", meaningCn: "说谎" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Education is what we seek. Our parents send us to school so that we can gain knowledge and achieve great things. The duties of a student are clear: be filial to parents, respectful to teachers, study hard, and never tell lies.",
                cn: "教育是我们追求的东西。父母送我们上学是为了让我们获得知识并在未来成就大事。学生的责任很明确：孝顺父母，尊敬老师，用功学习，并且不说谎。",
                highlights: [
                    { id: "education", word: "education", meaning: "learning and schooling", meaningCn: "教育" },
                    { id: "gain-knowledge", word: "gain knowledge", meaning: "obtain knowledge", meaningCn: "获得知识" },
                    { id: "respectful", word: "respectful", meaning: "showing respect", meaningCn: "尊敬的" },
                ],
            },
            {
                id: "p2",
                en: "We should not criticize others. In short, these rules are the duties that every student should keep in mind.",
                cn: "我们不应批评他人。总之，这些规则就是每个学生应牢记的责任。",
                highlights: [
                    { id: "criticize", word: "criticize", meaning: "say negative things about", meaningCn: "批评" },
                    { id: "keep-in-mind", word: "keep in mind", meaning: "remember", meaningCn: "牢记" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c15",
                question: "Why do parents send children to school?",
                questionCn: "父母为什么送孩子上学？",
                options: ["To gain knowledge", "To travel abroad", "To earn money quickly"],
                answer: "To gain knowledge",
                explanation: "The passage says parents send children to gain knowledge and achieve great things.",
                explanationCn: "文中说父母送孩子上学是为了获得知识并成就大事。",
            },
        ],
        vocabQuiz: [
            {
                id: "v15",
                word: "respectful",
                options: ["尊敬的", "害羞的", "懒惰的"],
                answer: "尊敬的",
                explanation: "Respectful means showing respect.",
                explanationCn: "respectful 表示尊敬的。",
            },
        ],
    },
    {
        id: "love-is",
        title: "Love Is...",
        cnTitle: "爱是……",
        level: "B1",
        minutes: 6,
        description: "A reflection on love and kindness.",
        cnDescription: "关于爱与善意的随笔。",
        keyPhrases: [
            { id: "kp-41", word: "the crux of", meaning: "the most important part", meaningCn: "关键所在" },
            { id: "kp-42", word: "carry us through", meaning: "help us endure", meaningCn: "带我们度过" },
            { id: "kp-43", word: "appreciate differences", meaning: "respect different views", meaningCn: "求同存异" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "As we all know, love is the crux of a happy life. It helps us stay calm and serene even in hard times, and it can carry us through difficulties.",
                cn: "众所周知，爱是幸福生活的关键。它能在艰难时刻让我们保持冷静与平和，并帮助我们度过困境。",
                highlights: [
                    { id: "crux", word: "crux", meaning: "central point", meaningCn: "关键" },
                    { id: "serene", word: "serene", meaning: "calm and peaceful", meaningCn: "宁静的" },
                ],
            },
            {
                id: "p2",
                en: "Love looks for ways to serve others. It makes the world kind and gentle, and people who love appreciate differences instead of fighting over them.",
                cn: "爱会寻找帮助他人的方式。它让世界充满仁慈与温柔，心中有爱的人会求同存异，而不是为分歧争执。",
                highlights: [
                    { id: "serve", word: "serve", meaning: "help or give service", meaningCn: "服务、帮助" },
                    { id: "gentle", word: "gentle", meaning: "kind and soft", meaningCn: "温柔的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c16",
                question: "What does love help people do in hard times?",
                questionCn: "爱在困难时帮助人们做什么？",
                options: ["Stay calm", "Get angry", "Forget others"],
                answer: "Stay calm",
                explanation: "The passage says love helps us stay calm and serene.",
                explanationCn: "文章说爱帮助我们保持冷静与平和。",
            },
        ],
        vocabQuiz: [
            {
                id: "v16",
                word: "serene",
                options: ["平和的", "匆忙的", "嘈杂的"],
                answer: "平和的",
                explanation: "Serene means calm and peaceful.",
                explanationCn: "serene 表示平和的。",
            },
        ],
    },
    {
        id: "model-student",
        title: "A Model Student",
        cnTitle: "模范学生",
        level: "B1",
        minutes: 6,
        description: "How to become a model student.",
        cnDescription: "如何成为模范学生。",
        keyPhrases: [
            { id: "kp-44", word: "by no means", meaning: "not at all", meaningCn: "绝非" },
            { id: "kp-45", word: "do his best", meaning: "try as hard as possible", meaningCn: "尽力" },
            { id: "kp-46", word: "moral education", meaning: "education on values", meaningCn: "道德教育" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Everyone hopes to become a model student, but it is by no means easy. First, a student must do his best to obtain knowledge.",
                cn: "每个人都希望成为模范学生，但这绝非易事。首先，学生必须尽力获取知识。",
                highlights: [
                    { id: "model", word: "model student", meaning: "an excellent student", meaningCn: "模范学生" },
                    { id: "obtain", word: "obtain", meaning: "get or gain", meaningCn: "获得" },
                ],
            },
            {
                id: "p2",
                en: "Second, he should improve his health. Third, he needs moral education, because good conduct matters for friendship and trust.",
                cn: "其次，他应当改善健康。第三，他需要道德教育，因为良好的品行关系到友谊与信任。",
                highlights: [
                    { id: "conduct", word: "conduct", meaning: "behavior", meaningCn: "品行" },
                    { id: "trust", word: "trust", meaning: "belief in someone", meaningCn: "信任" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c17",
                question: "What is the first requirement of a model student?",
                questionCn: "模范学生的第一要求是什么？",
                options: ["Obtain knowledge", "Play games", "Avoid exercise"],
                answer: "Obtain knowledge",
                explanation: "The passage says the first step is to obtain knowledge.",
                explanationCn: "文章说第一步是获取知识。",
            },
        ],
        vocabQuiz: [
            {
                id: "v17",
                word: "conduct",
                options: ["品行", "衣服", "速度"],
                answer: "品行",
                explanation: "Conduct means behavior.",
                explanationCn: "conduct 表示品行。",
            },
        ],
    },
    {
        id: "how-to-get-happiness",
        title: "How to Get Happiness",
        cnTitle: "如何获得快乐",
        level: "A2",
        minutes: 5,
        description: "Two simple points about happiness.",
        cnDescription: "关于快乐的两个要点。",
        keyPhrases: [
            { id: "kp-47", word: "pay attention to", meaning: "focus on", meaningCn: "注意" },
            { id: "kp-48", word: "the key to", meaning: "the secret of", meaningCn: "关键" },
            { id: "kp-49", word: "consists in", meaning: "lies in", meaningCn: "在于" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Happiness is the most precious thing in the world. To get it, we should pay attention to two points.",
                cn: "快乐是世界上最宝贵的东西。要获得快乐，我们应注意两个要点。",
                highlights: [
                    { id: "precious", word: "precious", meaning: "very valuable", meaningCn: "珍贵的" },
                    { id: "points", word: "points", meaning: "important ideas", meaningCn: "要点" },
                ],
            },
            {
                id: "p2",
                en: "First, health is the key to happiness. Second, happiness consists in contentment; a person who is always dissatisfied stays in distress.",
                cn: "第一，健康是快乐的关键。第二，快乐在于知足；总是不满的人常处于痛苦之中。",
                highlights: [
                    { id: "contentment", word: "contentment", meaning: "satisfaction", meaningCn: "知足" },
                    { id: "distress", word: "distress", meaning: "pain or sadness", meaningCn: "痛苦" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c18",
                question: "What is the key to happiness?",
                questionCn: "快乐的关键是什么？",
                options: ["Health", "Money", "Fame"],
                answer: "Health",
                explanation: "The passage says health is the key to happiness.",
                explanationCn: "文章说健康是快乐的关键。",
            },
        ],
        vocabQuiz: [
            {
                id: "v18",
                word: "contentment",
                options: ["知足", "紧张", "后悔"],
                answer: "知足",
                explanation: "Contentment means satisfaction.",
                explanationCn: "contentment 表示知足。",
            },
        ],
    },
    {
        id: "books-and-reading",
        title: "Books",
        cnTitle: "书籍",
        level: "A2",
        minutes: 5,
        description: "Why books matter and how to choose them.",
        cnDescription: "书籍的价值与选择。",
        keyPhrases: [
            { id: "kp-50", word: "broaden our minds", meaning: "expand our thinking", meaningCn: "开阔思维" },
            { id: "kp-51", word: "good teachers", meaning: "helpful guides", meaningCn: "良师益友" },
            { id: "kp-52", word: "do harm", meaning: "cause damage", meaningCn: "有害" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Books teach us about life, truth, and science. They increase our knowledge, broaden our minds, and strengthen our character.",
                cn: "书籍教我们了解人生、真理和科学。它们增加知识，开阔思维，并强化品格。",
                highlights: [
                    { id: "broaden", word: "broaden", meaning: "widen or expand", meaningCn: "拓宽" },
                    { id: "character", word: "character", meaning: "moral qualities", meaningCn: "品格" },
                ],
            },
            {
                id: "p2",
                en: "Reading is good, but we must choose books carefully. Good books bring benefits, while bad books do harm.",
                cn: "读书是好事，但我们必须认真选择。好书带来益处，坏书有害无益。",
                highlights: [
                    { id: "carefully", word: "carefully", meaning: "with attention", meaningCn: "仔细地" },
                    { id: "benefits", word: "benefits", meaning: "good results", meaningCn: "益处" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c19",
                question: "What do good books bring?",
                questionCn: "好书带来什么？",
                options: ["Benefits", "Confusion", "Laziness"],
                answer: "Benefits",
                explanation: "The passage says good books bring benefits.",
                explanationCn: "文中说好书带来益处。",
            },
        ],
        vocabQuiz: [
            {
                id: "v19",
                word: "broaden",
                options: ["拓宽", "缩小", "停止"],
                answer: "拓宽",
                explanation: "Broaden means to widen or expand.",
                explanationCn: "broaden 表示拓宽。",
            },
        ],
    },
    {
        id: "value-of-time",
        title: "The Value of Time",
        cnTitle: "爱惜时光",
        level: "A2",
        minutes: 5,
        description: "Time is more valuable than money.",
        cnDescription: "时间比金钱更宝贵。",
        keyPhrases: [
            { id: "kp-53", word: "more valuable than", meaning: "worth more than", meaningCn: "比……更宝贵" },
            { id: "kp-54", word: "earn money", meaning: "make money by work", meaningCn: "赚钱" },
            { id: "kp-55", word: "waste time", meaning: "use time poorly", meaningCn: "浪费时间" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "An English proverb says time is money, but time is more valuable. We can earn money again, but we can never get back time.",
                cn: "英语谚语说时间就是金钱，但时间更宝贵。钱可以再赚回来，但时间无法追回。",
                highlights: [
                    { id: "valuable", word: "valuable", meaning: "worth a lot", meaningCn: "宝贵的" },
                    { id: "get-back", word: "get back", meaning: "recover", meaningCn: "找回" },
                ],
            },
            {
                id: "p2",
                en: "Many people forget the value of time. We must keep in mind that wasting time is equal to wasting life.",
                cn: "许多人忽视时间的价值。我们必须记住，浪费时间等于浪费生命。",
                highlights: [
                    { id: "equal-to", word: "equal to", meaning: "the same as", meaningCn: "等于" },
                    { id: "wasting", word: "wasting", meaning: "using without value", meaningCn: "浪费" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c20",
                question: "Why is time more valuable than money?",
                questionCn: "为什么时间比金钱更宝贵？",
                options: ["Time cannot be regained", "Money is useless", "Time is easy to find"],
                answer: "Time cannot be regained",
                explanation: "The passage says money can be earned again but time cannot return.",
                explanationCn: "文中说钱能再赚，但时间无法回来。",
            },
        ],
        vocabQuiz: [
            {
                id: "v20",
                word: "valuable",
                options: ["宝贵的", "吵闹的", "无聊的"],
                answer: "宝贵的",
                explanation: "Valuable means worth a lot.",
                explanationCn: "valuable 表示宝贵的。",
            },
        ],
    },
    {
        id: "how-to-spend-sundays",
        title: "How to Spend Sundays",
        cnTitle: "如何度过星期日",
        level: "A2",
        minutes: 5,
        description: "Use Sundays well for study and health.",
        cnDescription: "合理利用星期日进行学习与锻炼。",
        keyPhrases: [
            { id: "kp-56", word: "make good use of", meaning: "use well", meaningCn: "好好利用" },
            { id: "kp-57", word: "reference books", meaning: "books for study", meaningCn: "参考书" },
            { id: "kp-58", word: "be engaged in", meaning: "take part in", meaningCn: "从事" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Many people spend Sundays aimlessly. Sundays are for rest, but we should still make good use of the valuable time.",
                cn: "许多人把星期日过得毫无目的。星期日是休息日，但我们仍应好好利用这宝贵的时间。",
                highlights: [
                    { id: "aimlessly", word: "aimlessly", meaning: "without a goal", meaningCn: "毫无目的地" },
                    { id: "valuable-time", word: "valuable time", meaning: "time worth a lot", meaningCn: "宝贵时间" },
                ],
            },
            {
                id: "p2",
                en: "We can read reference books to increase knowledge and do sports or outings to strengthen our bodies.",
                cn: "我们可以阅读参考书来增长知识，并从事运动或郊游以强健身体。",
                highlights: [
                    { id: "utilize", word: "utilize", meaning: "use", meaningCn: "利用" },
                    { id: "strengthen", word: "strengthen", meaning: "make stronger", meaningCn: "增强" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c21",
                question: "What should we do to increase knowledge on Sundays?",
                questionCn: "星期日应该做什么来增加知识？",
                options: ["Read reference books", "Sleep all day", "Ignore study"],
                answer: "Read reference books",
                explanation: "The passage suggests reading reference books.",
                explanationCn: "文章建议阅读参考书。",
            },
        ],
        vocabQuiz: [
            {
                id: "v21",
                word: "aimlessly",
                options: ["毫无目的地", "认真地", "快速地"],
                answer: "毫无目的地",
                explanation: "Aimlessly means without a goal.",
                explanationCn: "aimlessly 表示毫无目的地。",
            },
        ],
    },
    {
        id: "honesty-best-policy",
        title: "Honesty Is the Best Policy",
        cnTitle: "诚为上策",
        level: "A2",
        minutes: 5,
        description: "Why honesty matters.",
        cnDescription: "为什么诚实很重要。",
        keyPhrases: [
            { id: "kp-59", word: "in return", meaning: "as a response", meaningCn: "作为回报" },
            { id: "kp-60", word: "look down upon", meaning: "despise", meaningCn: "看不起" },
            { id: "kp-61", word: "public enemy", meaning: "enemy of everyone", meaningCn: "公敌" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "An English proverb says, \"Honesty is the best policy.\" It shows the importance of honesty.",
                cn: "英语有一句谚语说：“诚为上策。”它说明诚实的重要性。",
                highlights: [
                    { id: "proverb", word: "proverb", meaning: "a traditional saying", meaningCn: "谚语" },
                    { id: "importance", word: "importance", meaning: "great value", meaningCn: "重要性" },
                ],
            },
            {
                id: "p2",
                en: "If you are honest to others, they will be honest in return. A dishonest person will be looked down upon by others.",
                cn: "如果你对他人诚实，他们也会以诚相待。不诚实的人会被人看不起。",
                highlights: [
                    { id: "dishonest", word: "dishonest", meaning: "not honest", meaningCn: "不诚实的" },
                    { id: "looked-down", word: "looked down upon", meaning: "despised", meaningCn: "被看不起" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c22",
                question: "What happens if you are honest to others?",
                questionCn: "如果你对他人诚实会怎样？",
                options: ["They are honest in return", "They ignore you", "They get angry"],
                answer: "They are honest in return",
                explanation: "The passage says others will be honest in return.",
                explanationCn: "文章说他人会以诚相待。",
            },
        ],
        vocabQuiz: [
            {
                id: "v22",
                word: "dishonest",
                options: ["不诚实的", "耐心的", "友好的"],
                answer: "不诚实的",
                explanation: "Dishonest means not honest.",
                explanationCn: "dishonest 表示不诚实的。",
            },
        ],
    },
    {
        id: "how-exercise-helps",
        title: "How Exercise Helps",
        cnTitle: "运动的利益",
        level: "A2",
        minutes: 5,
        description: "Exercise strengthens the body and spirit.",
        cnDescription: "运动让身体和精神更强。",
        keyPhrases: [
            { id: "kp-62", word: "pay attention to", meaning: "focus on", meaningCn: "注意" },
            { id: "kp-63", word: "avoid disease", meaning: "prevent illness", meaningCn: "避免疾病" },
            { id: "kp-64", word: "team work", meaning: "cooperation", meaningCn: "合作" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "If our bodies are not strong, our spirit will be dull and we lack energy to study. Diseases attack the weak, not the strong.",
                cn: "如果身体不强壮，精神会迟钝，读书也缺少精力。疾病会侵袭体弱的人，而不是强者。",
                highlights: [
                    { id: "dull", word: "dull", meaning: "slow or lacking energy", meaningCn: "迟钝的" },
                    { id: "attack", word: "attack", meaning: "harm or strike", meaningCn: "侵袭" },
                ],
            },
            {
                id: "p2",
                en: "Exercise strengthens our bodies and helps us avoid disease. It also teaches cooperation, because many sports are played by teams.",
                cn: "运动能强身并避免疾病。它也教会合作，因为许多运动是团队进行的。",
                highlights: [
                    { id: "strengthens", word: "strengthens", meaning: "makes stronger", meaningCn: "强化" },
                    { id: "cooperation", word: "cooperation", meaning: "working together", meaningCn: "合作" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c23",
                question: "What does exercise help us avoid?",
                questionCn: "运动帮助我们避免什么？",
                options: ["Disease", "Homework", "Friends"],
                answer: "Disease",
                explanation: "The passage says exercise helps avoid disease.",
                explanationCn: "文章说运动能避免疾病。",
            },
        ],
        vocabQuiz: [
            {
                id: "v23",
                word: "cooperation",
                options: ["合作", "竞争", "拒绝"],
                answer: "合作",
                explanation: "Cooperation means working together.",
                explanationCn: "cooperation 表示合作。",
            },
        ],
    },
    {
        id: "benefits-of-traveling",
        title: "The Benefits of Traveling",
        cnTitle: "旅行的益处",
        level: "A2",
        minutes: 5,
        description: "Traveling increases knowledge and improves health.",
        cnDescription: "旅行增长见识并有益健康。",
        keyPhrases: [
            { id: "kp-65", word: "in the first place", meaning: "firstly", meaningCn: "首先" },
            { id: "kp-66", word: "hometown", meaning: "home town", meaningCn: "故乡" },
            { id: "kp-67", word: "seize the opportunity", meaning: "take the chance", meaningCn: "抓住机会" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Traveling increases our knowledge. Only by traveling can we see things outside our hometown.",
                cn: "旅行增加我们的知识。只有通过旅行，我们才能看到故乡以外的事物。",
                highlights: [
                    { id: "viewpoints", word: "viewpoints", meaning: "ways of thinking", meaningCn: "观点" },
                    { id: "outside", word: "outside", meaning: "beyond", meaningCn: "外面" },
                ],
            },
            {
                id: "p2",
                en: "Traveling is also good for our health because we exercise while we travel. In conclusion, we should seize the opportunity to travel.",
                cn: "旅行也有益健康，因为旅行时我们会运动。总之，我们应抓住旅行的机会。",
                highlights: [
                    { id: "in-conclusion", word: "in conclusion", meaning: "to sum up", meaningCn: "总之" },
                    { id: "opportunity", word: "opportunity", meaning: "chance", meaningCn: "机会" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c24",
                question: "Why is traveling good for health?",
                questionCn: "为什么旅行有益健康？",
                options: ["It involves exercise", "It is free", "It makes time slower"],
                answer: "It involves exercise",
                explanation: "The passage says we usually exercise while traveling.",
                explanationCn: "文章说旅行时我们通常会运动。",
            },
        ],
        vocabQuiz: [
            {
                id: "v24",
                word: "opportunity",
                options: ["机会", "危险", "任务"],
                answer: "机会",
                explanation: "Opportunity means a chance.",
                explanationCn: "opportunity 表示机会。",
            },
        ],
    },
    {
        id: "good-citizen",
        title: "How to Be a Good Citizen",
        cnTitle: "如何做一个好公民",
        level: "B1",
        minutes: 6,
        description: "Duties and responsibilities of a good citizen.",
        cnDescription: "好公民的责任与义务。",
        keyPhrases: [
            { id: "kp-68", word: "render service", meaning: "give help or serve", meaningCn: "提供服务" },
            { id: "kp-69", word: "obey the law", meaning: "follow rules", meaningCn: "遵守法律" },
            { id: "kp-70", word: "maintain order", meaning: "keep things in order", meaningCn: "维持秩序" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "To become a good citizen is not easy. A good citizen loves the country and is ready to serve it.",
                cn: "成为一个好公民并不容易。好公民热爱国家，并愿意为国家服务。",
                highlights: [
                    { id: "citizen", word: "citizen", meaning: "a person of a country", meaningCn: "公民" },
                    { id: "serve", word: "serve", meaning: "help or work for", meaningCn: "效力" },
                ],
            },
            {
                id: "p2",
                en: "He or she obeys the law and helps maintain order. If everyone does this, the country will be strong.",
                cn: "他或她遵守法律并帮助维持秩序。若人人如此，国家就会富强。",
                highlights: [
                    { id: "obey", word: "obey", meaning: "follow", meaningCn: "遵守" },
                    { id: "order", word: "order", meaning: "peace and control", meaningCn: "秩序" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c25",
                question: "What should a good citizen do besides loving the country?",
                questionCn: "好公民除了爱国还应做什么？",
                options: ["Obey the law", "Avoid rules", "Stay away from others"],
                answer: "Obey the law",
                explanation: "The passage says a good citizen obeys the law.",
                explanationCn: "文章指出好公民要遵守法律。",
            },
        ],
        vocabQuiz: [
            {
                id: "v25",
                word: "citizen",
                options: ["公民", "游客", "学生"],
                answer: "公民",
                explanation: "Citizen means a person of a country.",
                explanationCn: "citizen 表示公民。",
            },
        ],
    },
    {
        id: "importance-of-education",
        title: "The Importance of Education",
        cnTitle: "教育的重要性",
        level: "B1",
        minutes: 6,
        description: "Education builds a strong and civilized country.",
        cnDescription: "教育是国家进步与文明的基础。",
        keyPhrases: [
            { id: "kp-71", word: "compulsory education", meaning: "required schooling", meaningCn: "义务教育" },
            { id: "kp-72", word: "develop education", meaning: "improve education", meaningCn: "发展教育" },
            { id: "kp-73", word: "serve the country", meaning: "work for the nation", meaningCn: "为国家效力" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "A country cannot become rich and strong without developing education. Education gives people knowledge and teaches them to serve their country.",
                cn: "一个国家若不发展教育就不可能富强。教育给予人民知识，并教他们为国家效力。",
                highlights: [
                    { id: "developing", word: "developing", meaning: "improving", meaningCn: "发展" },
                    { id: "serve-country", word: "serve the country", meaning: "work for the nation", meaningCn: "为国家效力" },
                ],
            },
            {
                id: "p2",
                en: "Many countries enforce compulsory education. It is necessary for people from all backgrounds.",
                cn: "许多国家实施义务教育。对各阶层的人来说都是必要的。",
                highlights: [
                    { id: "compulsory", word: "compulsory", meaning: "required by law", meaningCn: "义务的" },
                    { id: "backgrounds", word: "backgrounds", meaning: "social backgrounds", meaningCn: "背景" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c26",
                question: "What does education give people?",
                questionCn: "教育给予人们什么？",
                options: ["Knowledge", "Wealth only", "Time only"],
                answer: "Knowledge",
                explanation: "The passage says education gives people knowledge.",
                explanationCn: "文章说教育给予人民知识。",
            },
        ],
        vocabQuiz: [
            {
                id: "v26",
                word: "compulsory",
                options: ["义务的", "可选的", "秘密的"],
                answer: "义务的",
                explanation: "Compulsory means required by law.",
                explanationCn: "compulsory 表示义务的。",
            },
        ],
    },
    {
        id: "industry-diligence",
        title: "Industry (Diligence)",
        cnTitle: "勤勉",
        level: "B1",
        minutes: 5,
        description: "Diligence brings success while idleness brings failure.",
        cnDescription: "勤勉带来成功，懒惰导致失败。",
        keyPhrases: [
            { id: "kp-74", word: "bring success", meaning: "lead to success", meaningCn: "带来成功" },
            { id: "kp-75", word: "opposite of", meaning: "the reverse of", meaningCn: "……的反面" },
            { id: "kp-76", word: "doomed to", meaning: "sure to experience", meaningCn: "注定" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Industry brings success and good luck. A hard-working person can succeed in the work he wants to do.",
                cn: "勤勉会带来成功与好运。一个努力工作的人能在他想做的事情上取得成功。",
                highlights: [
                    { id: "industry", word: "industry", meaning: "hard work", meaningCn: "勤勉" },
                    { id: "hard-working", word: "hard-working", meaning: "diligent", meaningCn: "勤奋的" },
                ],
            },
            {
                id: "p2",
                en: "Idleness is the opposite of industry and is the source of evil. An idle person is often doomed to failure.",
                cn: "懒惰是勤勉的反面，也是万恶之源。懒惰的人往往注定失败。",
                highlights: [
                    { id: "idleness", word: "idleness", meaning: "laziness", meaningCn: "懒惰" },
                    { id: "failure", word: "failure", meaning: "lack of success", meaningCn: "失败" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c27",
                question: "What is the opposite of industry?",
                questionCn: "勤勉的反面是什么？",
                options: ["Idleness", "Kindness", "Creativity"],
                answer: "Idleness",
                explanation: "The passage says idleness is the opposite of industry.",
                explanationCn: "文中说懒惰是勤勉的反面。",
            },
        ],
        vocabQuiz: [
            {
                id: "v27",
                word: "diligent",
                options: ["勤奋的", "粗心的", "懒散的"],
                answer: "勤奋的",
                explanation: "Diligent means hard-working.",
                explanationCn: "diligent 表示勤奋的。",
            },
        ],
    },
    {
        id: "factors-of-success",
        title: "Factors of Success",
        cnTitle: "成功的要素",
        level: "B1",
        minutes: 6,
        description: "Diligence, perseverance, and honesty lead to success.",
        cnDescription: "勤奋、毅力与诚实是成功要素。",
        keyPhrases: [
            { id: "kp-77", word: "lose heart", meaning: "be discouraged", meaningCn: "灰心" },
            { id: "kp-78", word: "perseverance", meaning: "not giving up", meaningCn: "毅力" },
            { id: "kp-79", word: "keep one's word", meaning: "do what one promised", meaningCn: "守信" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Success depends on diligence and perseverance. When you fail, do not lose heart; keep working toward your goal.",
                cn: "成功取决于勤奋和毅力。失败时不要灰心，要继续朝目标努力。",
                highlights: [
                    { id: "perseverance", word: "perseverance", meaning: "steady effort", meaningCn: "毅力" },
                    { id: "goal", word: "goal", meaning: "aim", meaningCn: "目标" },
                ],
            },
            {
                id: "p2",
                en: "Honesty is also essential. If you do not keep your word, people will not trust you.",
                cn: "诚实也很重要。不守信用的人很难被信任。",
                highlights: [
                    { id: "honesty", word: "honesty", meaning: "being truthful", meaningCn: "诚实" },
                    { id: "trust", word: "trust", meaning: "belief in someone", meaningCn: "信任" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c28",
                question: "What should you do after failing?",
                questionCn: "失败后应该做什么？",
                options: ["Keep working", "Give up", "Blame others"],
                answer: "Keep working",
                explanation: "The passage says to keep working toward your goal.",
                explanationCn: "文中说要继续努力。",
            },
        ],
        vocabQuiz: [
            {
                id: "v28",
                word: "perseverance",
                options: ["毅力", "借口", "运气"],
                answer: "毅力",
                explanation: "Perseverance means steady effort without giving up.",
                explanationCn: "perseverance 表示毅力。",
            },
        ],
    },
    {
        id: "war-and-peace",
        title: "War",
        cnTitle: "战争",
        level: "B1",
        minutes: 6,
        description: "War brings fear and heavy loss.",
        cnDescription: "战争带来恐惧与损失。",
        keyPhrases: [
            { id: "kp-80", word: "untold miseries", meaning: "great suffering", meaningCn: "无尽的痛苦" },
            { id: "kp-81", word: "be opposed to", meaning: "be against", meaningCn: "反对" },
            { id: "kp-82", word: "lasting peace", meaning: "long-term peace", meaningCn: "持久和平" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "People are opposed to war, yet it is not easy to avoid. War is terrible and brings fear.",
                cn: "人们反对战争，但它并不容易避免。战争可怕，令人恐惧。",
                highlights: [
                    { id: "opposed", word: "opposed", meaning: "against", meaningCn: "反对的" },
                    { id: "terrible", word: "terrible", meaning: "very bad", meaningCn: "可怕的" },
                ],
            },
            {
                id: "p2",
                en: "War causes the loss of many lives and wastes money. Without peace, people cannot live happily.",
                cn: "战争会造成大量生命损失并浪费金钱。没有和平，人们难以安居乐业。",
                highlights: [
                    { id: "loss", word: "loss", meaning: "something lost", meaningCn: "损失" },
                    { id: "peace", word: "peace", meaning: "no war", meaningCn: "和平" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c29",
                question: "What does war bring?",
                questionCn: "战争带来什么？",
                options: ["Fear and loss", "More holidays", "Better health"],
                answer: "Fear and loss",
                explanation: "The passage says war brings fear and heavy loss.",
                explanationCn: "文章说战争带来恐惧与损失。",
            },
        ],
        vocabQuiz: [
            {
                id: "v29",
                word: "peace",
                options: ["和平", "战争", "疾病"],
                answer: "和平",
                explanation: "Peace means no war.",
                explanationCn: "peace 表示和平。",
            },
        ],
    },
    {
        id: "good-health",
        title: "Good Health",
        cnTitle: "健康状况良好",
        level: "A2",
        minutes: 5,
        description: "Health is the best treasure in life.",
        cnDescription: "健康是人生最宝贵的财富。",
        keyPhrases: [
            { id: "kp-83", word: "take care of", meaning: "look after", meaningCn: "照顾" },
            { id: "kp-84", word: "best treasure", meaning: "most precious thing", meaningCn: "最宝贵的财富" },
            { id: "kp-85", word: "pay attention to", meaning: "focus on", meaningCn: "注意" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "We all hope to be happy, so we should take care of our health. Health is the best treasure we can have.",
                cn: "我们都希望快乐，因此应当照顾好健康。健康是我们能拥有的最宝贵财富。",
                highlights: [
                    { id: "treasure", word: "treasure", meaning: "something very valuable", meaningCn: "宝贵之物" },
                    { id: "health", word: "health", meaning: "a good body condition", meaningCn: "健康" },
                ],
            },
            {
                id: "p2",
                en: "To keep healthy, we need good food, fresh air, and proper exercise.",
                cn: "要保持健康，我们需要营养的食物、新鲜的空气和适当的运动。",
                highlights: [
                    { id: "proper", word: "proper", meaning: "right or suitable", meaningCn: "适当的" },
                    { id: "exercise", word: "exercise", meaning: "physical activity", meaningCn: "运动" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c30",
                question: "What helps us keep healthy?",
                questionCn: "什么有助于保持健康？",
                options: ["Food, air, and exercise", "Staying up late", "Skipping meals"],
                answer: "Food, air, and exercise",
                explanation: "The passage lists good food, fresh air, and exercise.",
                explanationCn: "文章列出营养食物、新鲜空气和运动。",
            },
        ],
        vocabQuiz: [
            {
                id: "v30",
                word: "treasure",
                options: ["宝贵之物", "噪音", "疲劳"],
                answer: "宝贵之物",
                explanation: "Treasure means something very valuable.",
                explanationCn: "treasure 表示宝贵之物。",
            },
        ],
    },
    {
        id: "summer-vacation",
        title: "How I Spent My Summer Vacation",
        cnTitle: "我如何度过暑假",
        level: "A2",
        minutes: 5,
        description: "A short diary of summer vacation.",
        cnDescription: "关于暑假的简短日记。",
        keyPhrases: [
            { id: "kp-86", word: "make good use of", meaning: "use well", meaningCn: "好好利用" },
            { id: "kp-87", word: "review lessons", meaning: "study again", meaningCn: "复习功课" },
            { id: "kp-88", word: "go to bed", meaning: "sleep", meaningCn: "去睡觉" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "As soon as the summer vacation began, I returned to my hometown. I reviewed my lessons in the morning and read newspapers.",
                cn: "暑假一开始我就回到故乡。早晨我复习功课并阅读报纸。",
                highlights: [
                    { id: "hometown", word: "hometown", meaning: "home town", meaningCn: "故乡" },
                    { id: "review", word: "review", meaning: "study again", meaningCn: "复习" },
                ],
            },
            {
                id: "p2",
                en: "In the afternoon, I played ball games or went fishing. At night, I watched TV with my family and went to bed at ten.",
                cn: "下午我打球或去钓鱼。晚上我和家人看电视，十点上床睡觉。",
                highlights: [
                    { id: "fishing", word: "fishing", meaning: "catching fish", meaningCn: "钓鱼" },
                    { id: "family", word: "family", meaning: "family members", meaningCn: "家人" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c31",
                question: "What does the writer do in the afternoon?",
                questionCn: "作者下午做什么？",
                options: ["Play ball games or fish", "Go to class", "Sleep all day"],
                answer: "Play ball games or fish",
                explanation: "He plays ball games or goes fishing in the afternoon.",
                explanationCn: "他说下午打球或钓鱼。",
            },
        ],
        vocabQuiz: [
            {
                id: "v31",
                word: "review",
                options: ["复习", "抱怨", "跳舞"],
                answer: "复习",
                explanation: "Review means study again.",
                explanationCn: "review 表示复习。",
            },
        ],
    },
    {
        id: "choosing-friends",
        title: "Choosing Friends",
        cnTitle: "选择朋友",
        level: "B1",
        minutes: 6,
        description: "Carefully choosing friends brings benefits.",
        cnDescription: "谨慎选择朋友会带来益处。",
        keyPhrases: [
            { id: "kp-89", word: "derive benefit", meaning: "get advantages", meaningCn: "获得益处" },
            { id: "kp-90", word: "false friends", meaning: "untrue friends", meaningCn: "假朋友" },
            { id: "kp-91", word: "keep company", meaning: "spend time with", meaningCn: "结交" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "A person who chooses friends carefully will benefit. There are more false friends than real ones.",
                cn: "一个谨慎选择朋友的人一定会受益。假朋友比真朋友多。",
                highlights: [
                    { id: "benefit", word: "benefit", meaning: "advantage", meaningCn: "益处" },
                    { id: "false", word: "false", meaning: "not true", meaningCn: "假的" },
                ],
            },
            {
                id: "p2",
                en: "We should make friends with people who have good character and kindness, and avoid keeping company with bad people.",
                cn: "我们应与品格良好、心地善良的人交朋友，避免与坏人来往。",
                highlights: [
                    { id: "character", word: "character", meaning: "moral qualities", meaningCn: "品格" },
                    { id: "kindness", word: "kindness", meaning: "being kind", meaningCn: "善良" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c32",
                question: "Who should we make friends with?",
                questionCn: "我们应与什么样的人交朋友？",
                options: ["People with good character", "Anyone who flatters", "Only rich people"],
                answer: "People with good character",
                explanation: "The passage says to choose people with good character and kindness.",
                explanationCn: "文章说要选择品格好、善良的人。",
            },
        ],
        vocabQuiz: [
            {
                id: "v32",
                word: "character",
                options: ["品格", "名字", "速度"],
                answer: "品格",
                explanation: "Character refers to moral qualities.",
                explanationCn: "character 指品格。",
            },
        ],
    },
    {
        id: "thrift",
        title: "Thrift",
        cnTitle: "节俭",
        level: "B1",
        minutes: 6,
        description: "Thrift makes people rich; extravagance makes them poor.",
        cnDescription: "节俭使人变富，奢侈使人变穷。",
        keyPhrases: [
            { id: "kp-92", word: "sooner or later", meaning: "eventually", meaningCn: "迟早" },
            { id: "kp-93", word: "make a fortune", meaning: "become rich", meaningCn: "发财" },
            { id: "kp-94", word: "extravagance", meaning: "spending too much", meaningCn: "奢侈" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "A thrifty person becomes rich sooner or later because he avoids unnecessary spending.",
                cn: "节俭的人迟早会变富，因为他避免不必要的开销。",
                highlights: [
                    { id: "thrifty", word: "thrifty", meaning: "careful with money", meaningCn: "节俭的" },
                    { id: "spending", word: "spending", meaning: "using money", meaningCn: "花费" },
                ],
            },
            {
                id: "p2",
                en: "Extravagance makes people poor. In short, thrift makes poor people rich.",
                cn: "奢侈会使人变穷。总之，节俭能让穷人变富。",
                highlights: [
                    { id: "extravagance", word: "extravagance", meaning: "wasteful spending", meaningCn: "奢侈" },
                    { id: "poor", word: "poor", meaning: "not rich", meaningCn: "贫穷的" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c33",
                question: "What does thrift lead to?",
                questionCn: "节俭会带来什么？",
                options: ["Becoming rich", "Becoming lazy", "Becoming sick"],
                answer: "Becoming rich",
                explanation: "The passage says thrift makes poor people rich.",
                explanationCn: "文章说节俭使穷人变富。",
            },
        ],
        vocabQuiz: [
            {
                id: "v33",
                word: "extravagance",
                options: ["奢侈", "谨慎", "礼貌"],
                answer: "奢侈",
                explanation: "Extravagance means spending too much.",
                explanationCn: "extravagance 表示奢侈。",
            },
        ],
    },
    {
        id: "perseverance",
        title: "Perseverance",
        cnTitle: "毅力",
        level: "B1",
        minutes: 6,
        description: "Perseverance leads people to success.",
        cnDescription: "毅力引导人走向成功。",
        keyPhrases: [
            { id: "kp-95", word: "lead to success", meaning: "cause success", meaningCn: "导致成功" },
            { id: "kp-96", word: "give up", meaning: "stop trying", meaningCn: "放弃" },
            { id: "kp-97", word: "be discouraged", meaning: "lose confidence", meaningCn: "灰心" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Nothing but perseverance can lead a person to success. A persevering person keeps working until he succeeds.",
                cn: "只有毅力才能引导人走向成功。有毅力的人会坚持到成功为止。",
                highlights: [
                    { id: "persevering", word: "persevering", meaning: "not giving up", meaningCn: "有毅力的" },
                    { id: "succeeds", word: "succeeds", meaning: "achieves success", meaningCn: "成功" },
                ],
            },
            {
                id: "p2",
                en: "Even after many failures, he does not give up. As a result, he wins in the end.",
                cn: "即使经历多次失败，他也不放弃。结果他最终获胜。",
                highlights: [
                    { id: "failures", word: "failures", meaning: "unsuccessful attempts", meaningCn: "失败" },
                    { id: "result", word: "result", meaning: "outcome", meaningCn: "结果" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c34",
                question: "What helps a person succeed?",
                questionCn: "什么能帮助人成功？",
                options: ["Perseverance", "Luck only", "Sleeping more"],
                answer: "Perseverance",
                explanation: "The passage says perseverance leads to success.",
                explanationCn: "文章说毅力能带来成功。",
            },
        ],
        vocabQuiz: [
            {
                id: "v34",
                word: "persevering",
                options: ["有毅力的", "健忘的", "粗心的"],
                answer: "有毅力的",
                explanation: "Persevering means not giving up.",
                explanationCn: "persevering 表示有毅力的。",
            },
        ],
    },
    {
        id: "where-theres-a-will",
        title: "Where There Is a Will, There Is a Way",
        cnTitle: "有志者，事竟成",
        level: "B1",
        minutes: 6,
        description: "Strong will leads to success.",
        cnDescription: "坚强意志带来成功。",
        keyPhrases: [
            { id: "kp-98", word: "strong will", meaning: "firm determination", meaningCn: "坚强意志" },
            { id: "kp-99", word: "make up one's mind", meaning: "decide firmly", meaningCn: "下定决心" },
            { id: "kp-100", word: "accomplish", meaning: "achieve", meaningCn: "完成" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "The key to success is a strong will. Without it, people often fail in life.",
                cn: "成功的关键是坚强的意志。没有它，人往往会失败。",
                highlights: [
                    { id: "will", word: "will", meaning: "determination", meaningCn: "意志" },
                    { id: "fail", word: "fail", meaning: "not succeed", meaningCn: "失败" },
                ],
            },
            {
                id: "p2",
                en: "If you make up your mind to do something, you can accomplish it.",
                cn: "如果你下定决心去做某事，就能完成它。",
                highlights: [
                    { id: "decide", word: "decide", meaning: "make a choice", meaningCn: "决定" },
                    { id: "accomplish", word: "accomplish", meaning: "achieve", meaningCn: "完成" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c35",
                question: "What is the key to success according to the passage?",
                questionCn: "文章认为成功的关键是什么？",
                options: ["A strong will", "Money", "Fame"],
                answer: "A strong will",
                explanation: "The passage says the key is a strong will.",
                explanationCn: "文章说关键是坚强意志。",
            },
        ],
        vocabQuiz: [
            {
                id: "v35",
                word: "accomplish",
                options: ["完成", "忘记", "拒绝"],
                answer: "完成",
                explanation: "Accomplish means achieve.",
                explanationCn: "accomplish 表示完成。",
            },
        ],
    },
    {
        id: "my-aim",
        title: "My Aim",
        cnTitle: "我的志向",
        level: "B1",
        minutes: 6,
        description: "Everyone needs an aim in life.",
        cnDescription: "人人都需要人生志向。",
        keyPhrases: [
            { id: "kp-101", word: "stand on one's own feet", meaning: "be independent", meaningCn: "自立" },
            { id: "kp-102", word: "aim at", meaning: "have as a goal", meaningCn: "以……为目标" },
            { id: "kp-103", word: "apply oneself", meaning: "work hard", meaningCn: "专心" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Everyone needs an aim in life. Without it, a person can hardly stand on his own feet.",
                cn: "每个人都需要人生目标。没有目标的人很难自立。",
                highlights: [
                    { id: "aim", word: "aim", meaning: "goal", meaningCn: "志向" },
                    { id: "independent", word: "independent", meaning: "self-reliant", meaningCn: "独立的" },
                ],
            },
            {
                id: "p2",
                en: "We should aim at doing something useful. I hope to be a teacher and will apply myself to my studies.",
                cn: "我们应以做对社会有益的事为目标。我希望成为老师，会专心学业。",
                highlights: [
                    { id: "useful", word: "useful", meaning: "helpful", meaningCn: "有用的" },
                    { id: "apply", word: "apply oneself", meaning: "work hard", meaningCn: "专心" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c36",
                question: "What does the writer hope to be?",
                questionCn: "作者希望成为什么？",
                options: ["A teacher", "A doctor", "An engineer"],
                answer: "A teacher",
                explanation: "The passage says the writer hopes to be a teacher.",
                explanationCn: "文章说作者希望成为老师。",
            },
        ],
        vocabQuiz: [
            {
                id: "v36",
                word: "aim",
                options: ["目标", "机会", "错误"],
                answer: "目标",
                explanation: "Aim means goal.",
                explanationCn: "aim 表示目标。",
            },
        ],
    },
    {
        id: "protect-environment",
        title: "Protect Our Environment",
        cnTitle: "保护环境",
        level: "B1",
        minutes: 6,
        description: "Simple actions to protect the environment.",
        cnDescription: "保护环境的简单行动。",
        keyPhrases: [
            { id: "kp-104", word: "throw rubbish", meaning: "litter", meaningCn: "乱扔垃圾" },
            { id: "kp-105", word: "plastic bags", meaning: "bags made of plastic", meaningCn: "塑料袋" },
            { id: "kp-106", word: "pay attention to", meaning: "care about", meaningCn: "重视" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "The environment is getting worse, so we must protect it. We can go to school on foot or by bike and not throw rubbish.",
                cn: "环境变得越来越差，因此我们必须保护它。我们可以步行或骑车上学，不乱扔垃圾。",
                highlights: [
                    { id: "environment", word: "environment", meaning: "natural world around us", meaningCn: "环境" },
                    { id: "protect", word: "protect", meaning: "keep safe", meaningCn: "保护" },
                ],
            },
            {
                id: "p2",
                en: "We should use baskets instead of plastic bags and use both sides of paper. Small actions matter.",
                cn: "购物时使用购物篮而不是塑料袋，并写字时用纸的两面。小行动很重要。",
                highlights: [
                    { id: "instead", word: "instead", meaning: "in place of", meaningCn: "代替" },
                    { id: "actions", word: "actions", meaning: "things we do", meaningCn: "行动" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c37",
                question: "Which action helps protect the environment?",
                questionCn: "哪种行为有助于保护环境？",
                options: ["Using both sides of paper", "Throwing rubbish", "Driving short trips"],
                answer: "Using both sides of paper",
                explanation: "The passage suggests using both sides of paper.",
                explanationCn: "文章建议用纸的两面。",
            },
        ],
        vocabQuiz: [
            {
                id: "v37",
                word: "protect",
                options: ["保护", "损坏", "忽视"],
                answer: "保护",
                explanation: "Protect means keep safe.",
                explanationCn: "protect 表示保护。",
            },
        ],
    },
    {
        id: "time-is-money",
        title: "Time Is Money",
        cnTitle: "时间就是金钱",
        level: "B1",
        minutes: 6,
        description: "Time is even more valuable than money.",
        cnDescription: "时间比金钱更宝贵。",
        keyPhrases: [
            { id: "kp-107", word: "more valuable than", meaning: "worth more than", meaningCn: "比……更宝贵" },
            { id: "kp-108", word: "regain", meaning: "get back", meaningCn: "重新获得" },
            { id: "kp-109", word: "make use of", meaning: "use well", meaningCn: "好好利用" },
        ],
        paragraphs: [
            {
                id: "p1",
                en: "Time is money, but time is more valuable. We can regain money, yet wasted time can never be regained.",
                cn: "时间就是金钱，但时间更宝贵。钱可以再赚回来，但浪费的时间无法重来。",
                highlights: [
                    { id: "valuable", word: "valuable", meaning: "worth a lot", meaningCn: "宝贵的" },
                    { id: "wasted", word: "wasted", meaning: "used without value", meaningCn: "浪费的" },
                ],
            },
            {
                id: "p2",
                en: "Time is often neglected, so we should make good use of it and never waste it.",
                cn: "时间常被忽视，因此我们应好好利用它，切勿浪费。",
                highlights: [
                    { id: "neglected", word: "neglected", meaning: "not paid attention to", meaningCn: "忽视" },
                    { id: "make-use", word: "make good use of", meaning: "use well", meaningCn: "好好利用" },
                ],
            },
        ],
        comprehension: [
            {
                id: "c38",
                question: "Why is time more valuable than money?",
                questionCn: "为什么时间比金钱更宝贵？",
                options: ["Time cannot be regained", "Money is useless", "Time is easy to get"],
                answer: "Time cannot be regained",
                explanation: "The passage says wasted time cannot be regained.",
                explanationCn: "文章说时间无法重来。",
            },
        ],
        vocabQuiz: [
            {
                id: "v38",
                word: "regain",
                options: ["重新获得", "减少", "拒绝"],
                answer: "重新获得",
                explanation: "Regain means get back.",
                explanationCn: "regain 表示重新获得。",
            },
        ],
    },
];
