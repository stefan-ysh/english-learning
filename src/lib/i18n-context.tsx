"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "cn";

interface I18nContextType {
    lang: Language;
    toggleLang: () => void;
    t: (key: string, vars?: Record<string, string | number>) => string;
    hasHydrated: boolean;
}

const UI_STRINGS: Record<string, Record<Language, string>> = {
    "app.title": { en: "Jingyan English", cn: "语妍英语" },
    "home.subtitle": { en: "Learn fast with flashcards, phrases, grammar, and reading.", cn: "用词卡、短语、语法与阅读高效学习英语。" },
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
    "learn.swipe_hint": { en: "Swipe to continue", cn: "左右滑动继续" },
    "audio.tap_to_enable": { en: "Tap to enable sound", cn: "点击启用声音" },
    "audio.load_failed": { en: "Audio failed to load", cn: "音频加载失败" },
    "audio.listen_again": { en: "Listen Again", cn: "再听一遍" },
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
    "grammar.show_examples": { en: "Show Examples", cn: "展开示例" },
    "grammar.hide_examples": { en: "Hide Examples", cn: "收起示例" },
    "grammar.listen": { en: "Listen", cn: "朗读" },
    "grammar.show_translation": { en: "Show Translation", cn: "显示译文" },
    "grammar.hide_translation": { en: "Hide Translation", cn: "隐藏译文" },
    "grammar.show_analysis": { en: "Show Analysis", cn: "显示解析" },
    "grammar.hide_analysis": { en: "Hide Analysis", cn: "隐藏解析" },
    "grammar.tap_reveal_cn": { en: "Tap to reveal translation", cn: "点击显示译文" },
    "grammar.tap_reveal_exp": { en: "Tap to reveal analysis", cn: "点击显示解析" },
    "grammar.practice": { en: "Practice", cn: "练一练" },
    "phrases.title": { en: "Common Phrases", cn: "常用短语大全" },
    "learn.vocab.desc": { en: "Swipe cards to learn new words", cn: "滑动卡片学习新单词" },
    "quiz.vocab.desc": { en: "Test your memory with a quiz", cn: "通过测试检验记忆" },
    "quiz.loading": { en: "Loading Quiz...", cn: "正在加载测试..." },
    "quiz.question": { en: "Question", cn: "题目" },
    "quiz.select_meaning": { en: "SELECT MEANING", cn: "选择正确含义" },
    "quiz.listen_choose": { en: "Listen and choose", cn: "听音选择" },
    "quiz.spell_word": { en: "SPELL THE WORD", cn: "拼写单词" },
    "quiz.correct": { en: "Correct!", cn: "答对了！" },
    "quiz.incorrect": { en: "Incorrect", cn: "答错了" },
    "learn.completed": { en: "Completed! Streak updated.", cn: "完成学习，已打卡" },
    "learn.back_home": { en: "Back Home", cn: "返回首页" },
    "quiz.image_hint": { en: "Image hint", cn: "图片提示" },
    "quiz.reset": { en: "Reset", cn: "重新拼写" },
    "quiz.hint": { en: "Hint", cn: "提示一字母" },
    "quiz.backspace": { en: "Backspace", cn: "退格" },
    "quiz.show_hint": { en: "Show Hint", cn: "显示提示" },
    "quiz.hide_hint": { en: "Hide Hint", cn: "隐藏提示" },
    "quiz.hint_example": { en: "Example", cn: "示例" },
    "quiz.hint_starts_with": { en: "Starts with", cn: "首字母" },
    "quiz.hint_word_count": { en: "Word count", cn: "词数" },
    "quiz.hint_length": { en: "Length", cn: "长度" },
    "practice.title": { en: "Practice Hub", cn: "练习中心" },
    "practice.dictation": { en: "Dictation", cn: "听写" },
    "practice.dictation_desc": { en: "Listen and type the sentence", cn: "听音写句子" },
    "practice.patterns": { en: "Pattern Practice", cn: "句型替换" },
    "practice.patterns_desc": { en: "Replace with correct pattern", cn: "同句型变体训练" },
    "practice.quick": { en: "Quick Check", cn: "轻量测验" },
    "practice.quick_desc": { en: "2–3 minute mixed quiz", cn: "2-3 分钟综合检测" },
    "practice.mistakes": { en: "Mistake Review", cn: "错题本" },
    "practice.mistakes_desc": { en: "Review frequent mistakes", cn: "按错误类型复习" },
    "practice.progress": { en: "Progress", cn: "进度" },
    "practice.play_audio": { en: "Play Audio", cn: "播放音频" },
    "practice.type_here": { en: "Type what you hear...", cn: "写下你听到的句子..." },
    "practice.check": { en: "Check", cn: "检查" },
    "practice.next": { en: "Next", cn: "下一题" },
    "practice.show_answer": { en: "Show Answer", cn: "显示答案" },
    "practice.hide_answer": { en: "Hide Answer", cn: "隐藏答案" },
    "practice.answer": { en: "Answer", cn: "答案" },
    "practice.complete": { en: "Practice Complete", cn: "练习完成" },
    "practice.dictation_done": { en: "Great job finishing dictation.", cn: "听写完成，继续保持！" },
    "practice.back_hub": { en: "Back to Hub", cn: "返回练习中心" },
    "practice.quick_done": { en: "Quick Check Done", cn: "轻量测验完成" },
    "practice.no_mistakes": { en: "No mistakes yet. Keep it up!", cn: "暂无错题，继续保持！" },
    "practice.clear_all": { en: "Clear All", cn: "清空全部" },
    "practice.correct": { en: "Correct", cn: "正确答案" },
    "practice.last_answer": { en: "Last Answer", cn: "上次答案" },
    "practice.mistake_count": { en: "Mistake Count", cn: "错误次数" },
    "practice.remove": { en: "Remove", cn: "移除" },
    "practice.duration": { en: "{minutes} min", cn: "{minutes} 分钟" },
    "reading.title": { en: "Reading", cn: "阅读" },
    "reading.desc": { en: "Learn through short articles", cn: "通过短文学习英语" },
    "reading.minutes": { en: "{minutes} min read", cn: "约 {minutes} 分钟" },
    "reading.show_translation": { en: "Show Translation", cn: "显示译文" },
    "reading.hide_translation": { en: "Hide Translation", cn: "隐藏译文" },
    "reading.vocab": { en: "Key Vocabulary", cn: "重点词汇" },
    "reading.tap_word": { en: "Tap highlighted words for meaning", cn: "点击高亮词查看释义" },
    "reading.definition": { en: "Definition", cn: "释义" },
    "reading.example": { en: "Example", cn: "示例" },
    "reading.phrases": { en: "Key Phrases", cn: "重点短语" },
    "reading.quiz": { en: "Reading Quiz", cn: "阅读小测" },
    "reading.comprehension": { en: "Comprehension", cn: "理解题" },
    "reading.vocab_quiz": { en: "Vocabulary", cn: "词汇回忆" },
    "reading.bookmark": { en: "Bookmark", cn: "收藏" },
    "reading.bookmarked": { en: "Bookmarked", cn: "已收藏" },
    "reading.read": { en: "Read", cn: "已读" },
    "reading.reading": { en: "Reading", cn: "阅读中" },
    "reading.filter_all": { en: "All", cn: "全部" },
    "reading.filter_read": { en: "Read", cn: "已读" },
    "reading.filter_bookmarked": { en: "Bookmarked", cn: "已收藏" },
    "module.alphabet": { en: "Alphabet", cn: "26 字母" },
    "module.phonetics": { en: "Phonetics", cn: "音标" },
    "alphabet.desc": { en: "Learn A–Z letters with examples", cn: "学习 A–Z 字母及示例" },
    "phonetics.desc": { en: "Master core IPA sounds", cn: "掌握核心音标发音" },
    "vocab.learn_count": { en: "words to learn", cn: "个词汇待学习" },
    "common.loading": { en: "Loading...", cn: "加载中..." },
    "common.loading_dots": { en: "Loading...", cn: "加载中..." },
    "nav.prev": { en: "Previous", cn: "上一条" },
    "nav.next": { en: "Next", cn: "下一条" },
    "nav.reset": { en: "Reset", cn: "重置" },
    "calendar.weekday_sun": { en: "S", cn: "日" },
    "calendar.weekday_mon": { en: "M", cn: "一" },
    "calendar.weekday_tue": { en: "T", cn: "二" },
    "calendar.weekday_wed": { en: "W", cn: "三" },
    "calendar.weekday_thu": { en: "T", cn: "四" },
    "calendar.weekday_fri": { en: "F", cn: "五" },
    "calendar.weekday_sat": { en: "S", cn: "六" },
    "learn.grammar_hint": { en: "Tap words to see grammar analysis", cn: "点击单词查看语法分析" },
    "learn.order_default": { en: "Default", cn: "默认顺序" },
    "learn.order_az": { en: "A-Z", cn: "字母顺序" },
    "cat.housekeeping": { en: "Housekeeping", cn: "家务管理" },
    "cat.vegetables": { en: "Vegetables", cn: "蔬菜百科" },
    "cat.travel": { en: "Travel", cn: "旅游出行" },
    "cat.restaurant": { en: "Restaurant", cn: "餐厅用语" },
    "cat.animals": { en: "Animals", cn: "动物世界" },
    "cat.colors": { en: "Colors", cn: "色彩缤纷" },
    "cat.feelings": { en: "Feelings", cn: "情绪表达" },
    "cat.daily_life": { en: "Daily Life", cn: "家庭日常" },
    "cat.school": { en: "School & Classroom", cn: "学校课堂" },
    "cat.work": { en: "Work & Business", cn: "职场商务" },
    "cat.medical": { en: "Medical", cn: "医疗看病" },
    "cat.travel_advanced": { en: "Travel Advanced", cn: "旅行进阶" },
    "cat.technology": { en: "Technology", cn: "科技数码" },
    "cat.greeting": { en: "Greetings", cn: "日常问候" },
    "cat.travel_essentials": { en: "Travel Essentials", cn: "旅行必备" },
    "cat.dining_out": { en: "Dining Out", cn: "外出就餐" },
    "cat.shopping": { en: "Shopping", cn: "购物达人" },
    "cat.emergency": { en: "Emergency", cn: "紧急求助" },
    "cat.all-az": { en: "All Words (A-Z)", cn: "全部词汇 A-Z" },
    "cat.numbers": { en: "Numbers & Ordinals", cn: "数字与序数" },
    "cat.prepositions": { en: "Prepositions", cn: "介词" },
    "cat.body_parts": { en: "Body Parts", cn: "人体部位" },
    "cat.school_supplies": { en: "School Supplies", cn: "学习用品" },
    "cat.people": { en: "People", cn: "人物称呼" },
    "cat.jobs": { en: "Jobs", cn: "职业" },
    "cat.vehicles": { en: "Vehicles", cn: "交通工具" },
    "cat.directions": { en: "Directions", cn: "方位" },
    "cat.seasons": { en: "Seasons", cn: "季节" },
    "cat.weather": { en: "Weather", cn: "天气" },
    "cat.alphabet": { en: "Alphabet", cn: "26 字母" },
    "cat.phonetics": { en: "Phonetics", cn: "音标" },
    "cat.oxford_b2": { en: "Oxford 5000 B2", cn: "牛津5000 B2" },
    "cat.oxford_c1": { en: "Oxford 5000 C1", cn: "牛津5000 C1" }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("cn");
    const [hasHydrated, setHasHydrated] = useState(false);

    React.useEffect(() => {
        const stored = window.localStorage.getItem("lang");
        if (stored === "en" || stored === "cn") {
            setLang(stored);
        }
        setHasHydrated(true);
    }, []);

    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === "en" ? "cn" : "en";
            if (typeof window !== "undefined") {
                window.localStorage.setItem("lang", next);
            }
            return next;
        });
    };

    const t = (key: string, vars?: Record<string, string | number>) => {
        let text = UI_STRINGS[key]?.[lang] || key;
        if (vars) {
            Object.entries(vars).forEach(([k, v]) => {
                text = text.replaceAll(`{${k}}`, String(v));
            });
        }
        return text;
    };

    return (
        <I18nContext.Provider value={{ lang, toggleLang, t, hasHydrated }}>
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
