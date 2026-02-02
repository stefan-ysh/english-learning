"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    backHref: string;
    backLabel: string;
    title: string;
    rightSlot?: React.ReactNode;
    className?: string;
}

export function PageHeader({ backHref, backLabel, title, rightSlot, className }: PageHeaderProps) {
    return (
        <div className={cn("z-10 w-full flex items-center justify-between gap-3 text-sm mb-8", className)}>
            <Link
                href={backHref}
                className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full px-2 py-1"
            >
                <ArrowLeft className="w-5 h-5" /> {backLabel}
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-center flex-1">{title}</h1>
            {rightSlot ? (
                <div className="flex items-center justify-end">{rightSlot}</div>
            ) : (
                <div className="w-16"></div>
            )}
        </div>
    );
}
