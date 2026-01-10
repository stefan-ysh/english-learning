"use client";

import Link from "next/link";
import { Book, MessageCircle } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { useI18n } from "@/lib/i18n-context";
import { StudyCalendar } from "@/components/home/StudyCalendar";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24 bg-gray-50 dark:bg-gray-950">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
        <h1 className="text-4xl font-bold text-center w-full my-8 text-primary bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {t("app.title")}
        </h1>
      </div>

      <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {/* Vocabulary Module - Active */}
        <BlurFade delay={0.1}>
          <Link href="/vocab" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="text-center p-8">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-6 rounded-full inline-block mb-6">
                  <Book className="w-12 h-12 text-pink-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">{t("module.vocab")}</h2>
                <p className="text-gray-500 dark:text-gray-400">{t("vocab.desc")}</p>
                <div className="mt-8 inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold">{t("btn.start")}</div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Phrases Module - Active */}
        <BlurFade delay={0.2}>
          <Link href="/phrases" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="text-center p-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full inline-block mb-6">
                  <MessageCircle className="w-12 h-12 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">{t("module.phrases")}</h2>
                <p className="text-gray-500 dark:text-gray-400">{t("phrases.desc")}</p>
                <div className="mt-8 inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold">{t("btn.start")}</div>
              </div>
            </div>
          </Link>
        </BlurFade>

        {/* Grammar Module - Active */}
        <BlurFade delay={0.3}>
          <Link href="/grammar" className="group relative block h-64 sm:h-80 lg:h-96 sm:col-span-2 lg:col-span-2">
            <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white rounded-3xl"></span>
            <div className="relative flex h-full items-center justify-center border-2 border-black bg-white dark:bg-slate-900 dark:border-white rounded-3xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="text-center p-8">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-full inline-block mb-6">
                  <Book className="w-12 h-12 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">{t("module.grammar")}</h2>
                <p className="text-gray-500 dark:text-gray-400">{t("grammar.desc")}</p>
                <div className="mt-8 inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold">{t("btn.start")}</div>
              </div>
            </div>
          </Link>
        </BlurFade>
      </div>

      <div className="w-full max-w-5xl mt-12 mb-20">
        <StudyCalendar />
      </div>
    </main >
  );
}
