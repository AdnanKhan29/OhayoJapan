import React, { useState, useEffect } from "react";
import { TweenMax, Quart } from "gsap";
import { ShineBorder } from "./ShineBorder"; // Import the ShineBorder component
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [previousTimeLeft, setPreviousTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousTimeLeft(timeLeft);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const animateFigure = ($el, value) => {
    const $top = $el.querySelector(".top");
    const $bottom = $el.querySelector(".bottom");
    const $backTop = $el.querySelector(".top-back");
    const $backBottom = $el.querySelector(".bottom-back");

    $backTop.querySelector("span").innerHTML = value;
    $backBottom.querySelector("span").innerHTML = value;

    TweenMax.to($top, 0.8, {
      rotationX: "-180deg",
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: () => {
        $top.innerHTML = value;
        $bottom.innerHTML = value;
        TweenMax.set($top, { rotationX: 0 });
      },
    });

    TweenMax.to($backTop, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: "all",
    });
  };

  const checkAndAnimate = (value, $el1, $el2) => {
    const val1 = value.toString().charAt(0);
    const val2 = value.toString().charAt(1);
    const fig1Value = $el1.querySelector(".top").innerHTML;
    const fig2Value = $el2.querySelector(".top").innerHTML;

    if (value >= 10) {
      if (fig1Value !== val1) animateFigure($el1, val1);
      if (fig2Value !== val2) animateFigure($el2, val2);
    } else {
      if (fig1Value !== "0") animateFigure($el1, "0");
      if (fig2Value !== val1) animateFigure($el2, val1);
    }
  };

  useEffect(() => {
    const $hours1 = document.querySelector(".hours-1");
    const $hours2 = document.querySelector(".hours-2");
    const $minutes1 = document.querySelector(".min-1");
    const $minutes2 = document.querySelector(".min-2");
    const $seconds1 = document.querySelector(".sec-1");
    const $seconds2 = document.querySelector(".sec-2");

    checkAndAnimate(timeLeft.hours, $hours1, $hours2);
    checkAndAnimate(timeLeft.minutes, $minutes1, $minutes2);
    checkAndAnimate(timeLeft.seconds, $seconds1, $seconds2);
  }, [timeLeft]);

  return (
    <ShineBorder
      className="relative flex h-[500px] w-[800px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} // Customize the border colors
    >
      {/* Countdown Timer Title */}
      <span className="countdown-title pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mb-4">
        COUNTDOWN TIMER
      </span>

      {/* Actual Countdown Timer */}
      <div className="wrap">
        <div className="countdown">
          <div className="bloc-time hours" data-init-value="24">
            <span className="count-title">Hours</span>
            <div className="figure hours hours-1">
              <span className="top">2</span>
              <span className="top-back">
                <span>2</span>
              </span>
              <span className="bottom">2</span>
              <span className="bottom-back">
                <span>2</span>
              </span>
            </div>
            <div className="figure hours hours-2">
              <span className="top">4</span>
              <span className="top-back">
                <span>4</span>
              </span>
              <span className="bottom">4</span>
              <span className="bottom-back">
                <span>4</span>
              </span>
            </div>
          </div>

          <div className="bloc-time min" data-init-value="0">
            <span className="count-title">Minutes</span>
            <div className="figure min min-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure min min-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>

          <div className="bloc-time sec" data-init-value="0">
            <span className="count-title">Seconds</span>
            <div className="figure sec sec-1">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
            <div className="figure sec sec-2">
              <span className="top">0</span>
              <span className="top-back">
                <span>0</span>
              </span>
              <span className="bottom">0</span>
              <span className="bottom-back">
                <span>0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ShineBorder>
  );
};

export default Countdown;
