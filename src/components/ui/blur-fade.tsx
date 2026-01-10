"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

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
    return (
        <motion.div
            initial={{ opacity: 0, filter: `blur(${blur})`, y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
