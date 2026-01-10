"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "cn";

interface I18nContextType {
    lang: Language;
    toggleLang: () => void;
    t: (key: string) => string;
}

const UI_STRINGS: Record<string, Record<Language, string>> = {
    "app.title": { en: "Jingyan English", cn: "语妍英语" },
    "module.vocab": { en: "Vocabulary", cn: "高频词汇" },
    "module.phrases": { en: "Phrases", cn: "实用短句" },
    "module.grammar": { en: "Grammar", cn: "语法" },
    "vocab.desc": { en: "High frequency words & flashcards", cn: "高频词汇 & 闪卡学习" },
    "phrases.desc": { en: "Common expressions", cn: "日常口语 & 常用短语" },
    "btn.start": { en: "Start Learning", cn: "开始学习" },
    "btn.back": { en: "Back", cn: "返回" },
    "quiz.complete": { en: "Quiz Complete!", cn: "挑战完成！" },
    "quiz.score": { en: "You scored", cn: "你的得分" },
    "btn.tryAgain": { en: "Try Again", cn: "再试一次" },
    "mode.learn": { en: "Learn", cn: "学习模式" },
    "mode.quiz": { en: "Quiz", cn: "测试模式" },
    "grammar.desc": { en: "Visual syntax guides", cn: "可视化语法结构分析" },
    "phrase": { en: "Phrase", cn: "短语" },
    "learn.swipe": { en: "Swipe cards to learn phrases & syntax", cn: "滑动卡片学习短语和句法" },
    "quiz.test": { en: "Test your knowledge", cn: "测试你的知识" },
    "syntax.subject": { en: "Subject", cn: "主语" },
    "syntax.verb": { en: "Verb", cn: "谓语" },
    "syntax.object": { en: "Object", cn: "宾语" },
    "calendar.title": { en: "Study Calendar", cn: "学习日历" },
    "calendar.streak": { en: "Current Streak", cn: "当前连续打卡" },
    "calendar.days": { en: "Days Active", cn: "活跃天数" },
    "roadmap.title": { en: "Development Roadmap", cn: "开发计划" },
    "vocab.select": { en: "Vocabulary Selection", cn: "选择词汇类别" },
    "grammar.title": { en: "Grammar Visuals", cn: "语法可视化分析" },
    "phrases.title": { en: "Common Phrases", cn: "常用短语大全" },
    "learn.vocab.desc": { en: "Swipe cards to learn new words", cn: "滑动卡片学习新单词" },
    "quiz.vocab.desc": { en: "Test your memory with a quiz", cn: "通过测试检验记忆" },
    "quiz.loading": { en: "Loading Quiz...", cn: "正在加载测试..." },
    "quiz.question": { en: "Question", cn: "题目" },
    "quiz.select_meaning": { en: "SELECT MEANING", cn: "选择正确含义" },
    "vocab.learn_count": { en: "words to learn", cn: "个词汇待学习" },
    "common.loading": { en: "Loading...", cn: "加载中..." },
    "learn.grammar_hint": { en: "Tap words to see grammar analysis", cn: "点击单词查看语法分析" },
    "cat.housekeeping": { en: "Housekeeping", cn: "家务管理" },
    "cat.vegetables": { en: "Vegetables", cn: "蔬菜百科" },
    "cat.travel": { en: "Travel", cn: "旅游出行" },
    "cat.restaurant": { en: "Restaurant", cn: "餐厅用语" },
    "cat.animals": { en: "Animals", cn: "动物世界" },
    "cat.colors": { en: "Colors", cn: "色彩缤纷" },
    "cat.feelings": { en: "Feelings", cn: "情绪表达" },
    "cat.greeting": { en: "Greetings", cn: "日常问候" },
    "cat.travel_essentials": { en: "Travel Essentials", cn: "旅行必备" },
    "cat.dining_out": { en: "Dining Out", cn: "外出就餐" },
    "cat.shopping": { en: "Shopping", cn: "购物达人" },
    "cat.emergency": { en: "Emergency", cn: "紧急求助" }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("cn"); // Default to Chinese as requested

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "cn" : "en"));
    };

    const t = (key: string) => {
        return UI_STRINGS[key]?.[lang] || key;
    };

    return (
        <I18nContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}
