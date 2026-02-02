"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";

interface BlurFadeProps extends HTMLMotionProps<"div"> {
    delay?: number;
    duration?: number;
    blur?: string;
}

export function BlurFade({
    children,
    className,
    delay = 0,
    duration = 0.4,
    blur = "10px",
    ...props
}: BlurFadeProps) {
    const reduceMotion = useReducedMotion();
    const initial = reduceMotion ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: `blur(${blur})`, y: 10 };
    const animate = reduceMotion ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 1, filter: "blur(0px)", y: 0 };
    const transition = reduceMotion ? { duration: 0 } : { duration, delay, ease: "easeOut" };
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
