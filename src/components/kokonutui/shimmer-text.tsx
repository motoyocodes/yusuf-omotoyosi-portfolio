"use client";

/**
 * @author: @dorian_baffier
 * @description: Shimmer Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text_01Props {
  text: string;
  className?: string;
}

export default function ShimmerText({
  text = "Text Shimmer",
  className,
}: Text_01Props) {
  return (
    <div className="flex items-center justify-center ">
      <motion.div
        className="relative px-4  overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={cn(
            "text-3xl font-family-momo font-bold bg-linear-to-r from-blue-700 via-indigo-600 to-violet-700 bg-size-[200%_100%] bg-clip-text text-transparent",
            className
          )}
          animate={{
            backgroundPosition: ["200% center", "-200% center"],
          }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
}
