"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { cn } from "./utils/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  console.log("words passed to WordFadeIn: ", words); // Debugging: Check the input
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-start text-4xl font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-3xl md:leading-[2rem]",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
