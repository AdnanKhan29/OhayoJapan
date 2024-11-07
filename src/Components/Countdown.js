import React, { useState, useEffect } from "react";
import { TweenMax, Quart } from "gsap";
import { ShineBorder } from "./ShineBorder"; // Import the ShineBorder component

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0,
      hours: difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };
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
    const $days1 = document.querySelector(".days-1");
    const $days2 = document.querySelector(".days-2");
    const $hours1 = document.querySelector(".hours-1");
    const $hours2 = document.querySelector(".hours-2");
    const $minutes1 = document.querySelector(".min-1");
    const $minutes2 = document.querySelector(".min-2");
    const $seconds1 = document.querySelector(".sec-1");
    const $seconds2 = document.querySelector(".sec-2");
    checkAndAnimate(timeLeft.days, $days1, $days2);
    checkAndAnimate(timeLeft.hours, $hours1, $hours2);
    checkAndAnimate(timeLeft.minutes, $minutes1, $minutes2);
    checkAndAnimate(timeLeft.seconds, $seconds1, $seconds2);
  }, [timeLeft]);

  return (
    <>
      <div className="relative flex h-[500px] w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg  bg-inherit">
        <div className="wrap">
          <div className="countdown">
            <div className="bloc-time days" data-init-value="00">
              <span className="count-title">Days</span>
              <div className="figure days days-1">
                <span className="top">0</span>
                <span className="top-back">
                  <span>0</span>
                </span>
                <span className="bottom">0</span>
                <span className="bottom-back">
                  <span>0</span>
                </span>
              </div>
              <div className="figure days days-2">
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
      </div>
      <style jsx>{`
        body {
          background-color: #f2f1ed;
        }

        .wrap {
          position: absolute;
          bottom: 0;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          height: 310px;
        }

        a {
          text-decoration: none;
          color: #1a1a1a;
        }

.countdown {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.bloc-time {
  margin: 0 10px; /* Reducing margin for closer alignment */
  text-align: center;
}

.count-title {
  margin-bottom: 10px; /* Slightly closer title to the figures */
}

/* Responsive Styles */
@media (max-width: 600px) {
  .bloc-time {
    margin: 0 5px; /* Further reduce margins on smaller screens */
  }
  
  .figure {
    height: 80px;
    width: 60px;
  }

  .figure > span {
    font-size: 3em; /* Adjust font size for smaller screens */
  }
}



          .count-title {
            display: block;
            margin-bottom: 15px;
            font: normal 0.94em "Lato";
            color: #1a1a1a;
            text-transform: uppercase;
          }

          .figure {
            position: relative;
            float: left;
            height: 110px;
            width: 100px;
            margin-right: 10px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2),
              inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);

            &:last-child {
              margin-right: 0;
            }

            > span {
              position: absolute;
              left: 0;
              right: 0;
              margin: auto;
              font: normal 5.94em/107px "Lato";
              font-weight: 700;
              color: #de4848;
            }

            .top,
            .bottom-back {
              &:after {
                content: "";
                position: absolute;
                z-index: -1;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              }
            }

            .top {
              z-index: 3;
              background-color: #f7f7f7;
              transform-origin: 50% 100%;
              transform: perspective(200px);
            }

            .bottom {
              z-index: 1;

              &:before {
                content: "";
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 50%;
                background-color: rgba(0, 0, 0, 0.02);
              }
            }

            .bottom-back {
              z-index: 2;
              top: 0;
              height: 50%;
              overflow: hidden;
              background-color: #f7f7f7;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;

              span {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: auto;
              }
            }

            .top,
            .top-back {
              height: 50%;
              overflow: hidden;
              backface-visibility: hidden;
            }

            .top-back {
              z-index: 4;
              bottom: 0;
              background-color: #fff;
              transform-origin: 50% 0;
              transform: perspective(200px) rotateX(180deg);
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;

              span {
                position: absolute;
                top: -100%;
                left: 0;
                right: 0;
                margin: auto;
              }
            }
          }
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          /* Medium devices */
          .countdown {
            width: 600px;
            .figure {
              height: 90px;
              width: 80px;

              > span {
                font-size: 4.8em;
                line-height: 90px;
              }
            }
            .bloc-time {
              margin-right: 30px;
            }
          }
        }

        @media (max-width: 768px) {
          /* Small devices */
          .countdown {
            width: 100%;
            max-width: 480px;

            .bloc-time {
              margin-right: 15px;
            }

            .figure {
              height: 70px;
              width: 60px;

              > span {
                font-size: 3.6em;
                line-height: 70px;
              }
            }

            .count-title {
              font-size: 0.85em;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Countdown;
