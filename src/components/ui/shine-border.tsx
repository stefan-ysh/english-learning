"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
    children: React.ReactNode;
    className?: string;
    color?: string | string[];
}

/**
 * Shine Border
 * 
 * An animated border effect using CSS conic-gradient or background position.
 * For this simplified version, we use a moving background gradient on a pseudo-element.
 */
export function ShineBorder({ children, className, color = "#FFF" }: ShineBorderProps) {
    return (
        <div className={cn("relative group rounded-xl overflow-hidden", className)}>
            <div
                className="absolute inset-[-2px] -z-10 bg-[linear-gradient(110deg,#000103,45%,var(--shine-color,rgba(255,255,255,0.5)),55%,#000103)] bg-[length:200%_100%] animate-shine"
                style={{ "--shine-color": Array.isArray(color) ? color[0] : color } as React.CSSProperties}
            />
            {/* Background Mask */}
            <div className="absolute inset-[1px] bg-white dark:bg-black rounded-xl -z-10" />

            {children}
        </div>
    );
}
