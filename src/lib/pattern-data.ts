export type PatternItem = {
    id: string;
    title: string;
    titleCn: string;
    instruction: string;
    instructionCn: string;
    base: string;
    options: string[];
    answer: string;
    explanation: string;
    explanationCn: string;
};

export const PATTERN_DATA: PatternItem[] = [
    {
        id: "pat-1",
        title: "Past Simple",
        titleCn: "一般过去时",
        instruction: "Change the sentence to the past tense.",
        instructionCn: "把句子改为一般过去时。",
        base: "I walk to school.",
        options: ["I walked to school.", "I am walking to school.", "I will walk to school."],
        answer: "I walked to school.",
        explanation: "Use the past form of the verb.",
        explanationCn: "动词用过去式。",
    },
    {
        id: "pat-2",
        title: "Negative",
        titleCn: "否定句",
        instruction: "Make the sentence negative.",
        instructionCn: "把句子改为否定句。",
        base: "She likes coffee.",
        options: ["She doesn't like coffee.", "She isn't liking coffee.", "She won't like coffee."],
        answer: "She doesn't like coffee.",
        explanation: "Use do/does + not for simple present negatives.",
        explanationCn: "一般现在时否定用 do/does + not。",
    },
    {
        id: "pat-3",
        title: "Question",
        titleCn: "疑问句",
        instruction: "Turn it into a question.",
        instructionCn: "把句子改为疑问句。",
        base: "They are ready.",
        options: ["Are they ready?", "Do they ready?", "They are ready?"],
        answer: "Are they ready?",
        explanation: "Move the be verb to the front.",
        explanationCn: "把 be 动词提前。",
    },
    {
        id: "pat-4",
        title: "Future Simple",
        titleCn: "一般将来时",
        instruction: "Change to future with will.",
        instructionCn: "用 will 改为一般将来时。",
        base: "We meet at 9.",
        options: ["We will meet at 9.", "We are meeting at 9.", "We met at 9."],
        answer: "We will meet at 9.",
        explanation: "Use will + base verb.",
        explanationCn: "用 will + 动词原形。",
    },
    {
        id: "pat-5",
        title: "Comparative",
        titleCn: "比较级",
        instruction: "Make a comparative sentence.",
        instructionCn: "把句子改为比较级。",
        base: "This bag is small.",
        options: ["This bag is smaller.", "This bag is the smallest.", "This bag is small."],
        answer: "This bag is smaller.",
        explanation: "Add -er or use more for comparisons.",
        explanationCn: "比较级用 -er 或 more。",
    },
    {
        id: "pat-6",
        title: "Present Continuous",
        titleCn: "现在进行时",
        instruction: "Use present continuous.",
        instructionCn: "把句子改为现在进行时。",
        base: "He reads a book.",
        options: ["He is reading a book.", "He read a book.", "He will read a book."],
        answer: "He is reading a book.",
        explanation: "Use be + verb-ing.",
        explanationCn: "用 be + 动词ing。",
    },
];
