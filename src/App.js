import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Components/Navbar";
import Meteors from "./Components/Meteor";

export default function App() {
  const [scrollX, setScrollX] = useState(0);
  const [startTyping, setStartTyping] = useState(false); // State to trigger typing animation
  const typingSectionRef = useRef(null); // Reference to the typing section

  const generateRandomPetals = (numPetals) => {
    const petals = [];
    for (let i = 0; i < numPetals; i++) {
      const randomLeft = Math.random() * 100;
      const randomDuration = Math.random() * 5 + 10;
      const randomDelay = Math.random() * 5;
      const randomSize = Math.random() * 0.5 + 0.5;

      petals.push(
        <motion.img
          key={i}
          src="/assets/images/petal.png"
          alt="falling petal"
          className="falling-petal"
          style={{
            left: `${randomLeft}%`,
            transform: `scale(${randomSize})`,
            animationDuration: `${randomDuration}s`,
            animationDelay: `${randomDelay}s`,
          }}
          animate={{
            y: ["-10%", "110vh"],
            x: ["0%", "5%", "-3%", "2%"],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: randomDuration,
          }}
        />,
      );
    }
    return petals;
  };

  const generateMovingImages = (numImages) => {
    const images = [];
    for (let i = 0; i < numImages; i++) {
      images.push(
        <motion.img
          key={i}
          src="/assets/images/movingimage.webp"
          alt="Moving Image"
          style={{
            width: "800px",
            height: "600px",
            objectFit: "cover",
          }}
        />,
      );
    }
    return images;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollX(scrollY);

      // Check if the typing section is in view
      const section = typingSectionRef.current;
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 2;

        if (sectionTop < triggerPoint) {
          setStartTyping(true); // Start typing when section is in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url("/assets/images/bg2.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="falling-petals-container">
          {generateRandomPetals(25)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <motion.img
            src="/assets/Images/logo.png"
            alt="Logo"
            style={{
              width: "60vw",
              height: "auto",
              maxWidth: "400px",
            }}
          />
        </motion.div>
      </section>

      <section
        style={{
          backgroundColor: "#f0f0f0", // Light background
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            left: `${-scrollX * 0.2}px`,
            whiteSpace: "nowrap",
          }}
        >
          {generateMovingImages(10)}
        </motion.div>
      </section>

      <section
        ref={typingSectionRef} // Attach the ref to this section
        style={{
          backgroundColor: "#ffffff", // White background for light theme
          padding: "100px 20px",
          textAlign: "center",
          color: "#000000", // Black text for light theme
        }}
      >
        {/* Typing animation only starts when the section is in view */}
        {startTyping && (
          <TypeAnimation
            sequence={[
              "In Collaboration With",
              2000,
              "In Collaboration With",
              2000,
              "In Collaboration With",
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl font-bold text-center sm:text-5xl md:text-5xl lg:text-5xl pb-12"
            repeat={Infinity}
          />
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jetaa.png"
              alt="JETAA"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              JETAA
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jal.png"
              alt="Company 2"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              JAPAN AIRLINES
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jetaain.png"
              alt="JETAA"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              JETAA INDIA
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION */}
      <section
        style={{
          backgroundColor: "#ffffff", // Light background color
          padding: "100px 20px",
          textAlign: "center",
          color: "#000000", // Black text for contrast
        }}
      >
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
            Meteors
          </span>
        </div>
      </section>

      <style jsx>{`
        .falling-petals-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .falling-petal {
          position: absolute;
          top: -10%;
          width: 3vw;
          height: 3vw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 10vw;
          }
        }
      `}</style>

      <Navbar />
    </>
  );
}
