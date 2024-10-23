import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className={clsx(
            "text-center font-display font-bold drop-shadow-sm",
            "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
          )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        In Collaboration with
      </motion.h1>
      
    </motion.div>
  );
}