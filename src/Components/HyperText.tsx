"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "./utils/utils"; // Assuming you have this utility for classNames

interface HyperTextProps {
  text: string;
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

// Utility function to detect non-Latin characters (including Japanese, Chinese, etc.)
const isNonLatinText = (text: string) => {
  return /[^\u0000-\u007F]+/.test(text); // Checks for any non-ASCII characters (Japanese, Chinese, etc.)
};

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(text.split("")); // Holds the displayed text
  const [trigger, setTrigger] = useState(false); // Controls whether animation is triggered
  const iterations = useRef(0); // Keeps track of current iteration
  const isFirstRender = useRef(true); // Prevents animation on first load unless specified

  const isNonLatin = isNonLatinText(text); // Check if the text contains non-Latin characters

  const triggerAnimation = () => {
    iterations.current = 0;
    setTrigger(true); // Trigger animation on mouse enter
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animateOnLoad && isFirstRender.current) {
        // Skip animation on load if animateOnLoad is false
        clearInterval(interval);
        isFirstRender.current = false;
        return;
      }

      if (iterations.current < text.length) {
        setDisplayText((prevText) =>
          prevText.map((char, i) =>
            char === " "
              ? char // Keep spaces as is
              : i <= iterations.current
              ? text[i] // Display the correct letter after iteration
              : isNonLatin
              ? text[i] // Directly display the non-Latin character (avoid randomization)
              : String.fromCharCode(65 + Math.floor(Math.random() * 26)), // Random English letters
          ),
        );
        iterations.current += 0.1; // Slow down the iteration slightly
      } else {
        setTrigger(false); // Stop animation when done
        clearInterval(interval); // Clear the interval when animation completes
      }
    }, duration / (text.length * 10)); // Dynamic duration based on text length

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [text, duration, trigger, animateOnLoad, isNonLatin]);

  return (
    <div
      className="overflow-hidden py-2 flex cursor-default scale-100"
      onMouseEnter={triggerAnimation} // Trigger animation on hover
    >
      {displayText.map((letter, i) => (
        <motion.h1
          key={i}
          className={cn("font-mono", letter === " " ? "w-3" : "", className)}
          {...framerProps} // Spread framer-motion props for animation
          style={{ fontFamily: "MyCustomFont" }} // Custom font styling
        >
          {letter} {/* Display the letter */}
        </motion.h1>
      ))}
    </div>
  );
}
