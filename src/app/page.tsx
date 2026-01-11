"use client";

import Link from "next/link";
import { ArrowRight, Book, BookOpen, MessageCircle, Type, AudioLines } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { StudyCalendar } from "@/components/home/StudyCalendar";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="relative flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
        <div className="w-full text-center my-8">
          <h1 className="text-4xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {t("app.title")}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3">
            {t("home.subtitle")}
          </p>
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Alphabet Module */}
        <BlurFade delay={0.1}>
          <Link href="/vocab/alphabet" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <Type className="w-9 h-9 sm:w-12 sm:h-12 text-emerald-600" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("module.alphabet")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("alphabet.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Phonetics Module */}
        <BlurFade delay={0.2}>
          <Link href="/vocab/phonetics" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <AudioLines className="w-9 h-9 sm:w-12 sm:h-12 text-cyan-600" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("module.phonetics")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("phonetics.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Vocabulary Module - Active */}
        <BlurFade delay={0.3}>
          <Link href="/vocab" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <Book className="w-9 h-9 sm:w-12 sm:h-12 text-pink-500" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("module.vocab")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("vocab.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Phrases Module - Active */}
        <BlurFade delay={0.4}>
          <Link href="/phrases" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <MessageCircle className="w-9 h-9 sm:w-12 sm:h-12 text-blue-500" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("module.phrases")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("phrases.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Grammar Module - Active */}
        <BlurFade delay={0.5}>
          <Link href="/grammar" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <Book className="w-9 h-9 sm:w-12 sm:h-12 text-orange-500" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("module.grammar")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("grammar.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Reading Module */}
        <BlurFade delay={0.6}>
          <Link href="/reading" className="group relative block h-64 sm:h-80 lg:h-96 active:scale-[0.99] transition-transform">
            <span className="absolute inset-0 border border-gray-200 dark:border-slate-700 sm:border-2 sm:border-dashed sm:border-black sm:dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 md:group-hover:shadow-2xl">
              <div className="text-center p-5 sm:p-8">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 sm:p-6 rounded-full inline-block mb-3 sm:mb-6">
                  <BookOpen className="w-9 h-9 sm:w-12 sm:h-12 text-amber-600" />
                </div>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{t("reading.title")}</h2>
                <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400">{t("reading.desc")}</p>
                <div className="mt-5 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm font-bold">
                  {t("btn.start")} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </BlurFade>
      </div>

      <div className="w-full max-w-5xl mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{t("practice.title")}</h2>
          <Link href="/practice" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            {t("btn.start")}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/practice/dictation" className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:hover:-translate-y-0.5 transition-transform active:scale-[0.99]">
            <div className="text-sm font-bold mb-1">{t("practice.dictation")}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{t("practice.dictation_desc")}</div>
          </Link>
          <Link href="/practice/patterns" className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:hover:-translate-y-0.5 transition-transform active:scale-[0.99]">
            <div className="text-sm font-bold mb-1">{t("practice.patterns")}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{t("practice.patterns_desc")}</div>
          </Link>
          <Link href="/practice/quick" className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:hover:-translate-y-0.5 transition-transform active:scale-[0.99]">
            <div className="text-sm font-bold mb-1">{t("practice.quick")}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{t("practice.quick_desc")}</div>
          </Link>
          <Link href="/practice/mistakes" className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 md:hover:-translate-y-0.5 transition-transform active:scale-[0.99]">
            <div className="text-sm font-bold mb-1">{t("practice.mistakes")}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{t("practice.mistakes_desc")}</div>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-12 mb-20">
        <StudyCalendar />
      </div>
    </main >
  );
}
