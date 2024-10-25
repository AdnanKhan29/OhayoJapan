"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import Meteors from "./Components/Meteor";
import Countdown from "./Components/Countdown"; // Import the Countdown component
import { CardBody, CardContainer, CardItem } from "./Components/3d-card";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Home() {
  const { t } = useTranslation(); // Use the translation hook

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
            src="/assets/images/logo.png"
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
        {startTyping && (
          <TypeAnimation
            sequence={[t("inCollaborationWith"), 2000]}
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
              {t("jetaa")}
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/C.gif"
              alt="CLAIR"
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
              {t("clair")}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jal.png"
              alt="JAPAN AIRLINES"
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
              {t("jal")}
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jetaain.png"
              alt="JETAA INDIA"
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
              {t("jetaaIndia")}
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#ffffff", // Light background color
          padding: "50px 20px", // Reduce padding to decrease the gap
          textAlign: "center",
          color: "#000000", // Black text for contrast
        }}
      >
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={30} />
          <span
            className="november-text pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-400 bg-clip-text text-center font-semibold leading-none text-transparent"
            style={{
              fontSize: "10vw", // Initial size for larger screens
              maxWidth: "100vw", // Ensure text doesn't overflow the viewport
            }}
          >
            {t("november")}
          </span>
          <span
            className="date-text pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-400 bg-clip-text text-center font-semibold leading-none text-transparent mt-2" // Reduce margin to bring it closer
            style={{
              fontSize: "5vw", // Initial size for larger screens
              maxWidth: "100vw", // Ensure text doesn't overflow the viewport
            }}
          >
            {t("date")}
          </span>

          {/* Responsive dividing line with faded ends */}
          <div
            style={{
              width: "60vw", // Use viewport width for responsiveness
              maxWidth: "500px", // Maximum width to avoid it being too wide on large screens
              height: "2px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), #000000, rgba(0, 0, 0, 0))", // Faded ends
              margin: "10px 0", // Reduce margin between elements
            }}
          ></div>

          {/* Add information below the line */}
          <p
            style={{
              fontSize: "18px", // Adjust font size as needed
              color: "#333333", // Darker text for information
              maxWidth: "600px", // Optional: limit the width for better readability
              margin: "0 auto 20px", // Adjust margin-bottom to reduce space
            }}
          >
            {t("eventInfo")}
          </p>
        </div>
      </section>

      <h1
        className="november-text font-semibold text-center "
        style={{
          fontSize: "6vw", // Initial size for larger screens
          maxWidth: "100vw", // Ensure text doesn't overflow the viewport
        }}
      >
        {t("countdownTimer")} {/* Use the translated text */}
      </h1>
      <section className="flex justify-center items-center ">
        <Countdown targetDate="2024-11-07T00:00:00" theme="dark" />
      </section>

      <section
        style={{
          backgroundColor: "#f5f5f5", // Light grey background for contrast
          padding: "50px 20px", // Add some padding for spacing
          textAlign: "center",
        }}
      >
        <span
          className="november-text pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-700 to-gray-400 bg-clip-text text-center font-semibold leading-none text-transparent"
          style={{
            fontSize: "6vw", // Initial size for larger screens
            maxWidth: "100vw", // Ensure text doesn't overflow the viewport
          }}
        >
          {t("faculty")}
        </span>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {/* Row 1 - Card 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 text-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {t("facultyCard1Name")} {/* Translated name */}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/assets/images/F1.jpeg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {t("facultyCard1Desc")} {/* Translated description */}
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Row 1 - Card 2 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 text-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {t("facultyCard2Name")} {/* Translated name */}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/assets/images/F2.jpeg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {t("facultyCard2Desc")}
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-8 mt-3">
          {/* Row 2 - Card 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 text-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {t("facultyCard3Name")} {/* Translated name */}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/assets/images/F3.jpeg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {t("facultyCard3Desc")}
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Row 2 - Card 2 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 text-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {t("facultyCard4Name")} {/* Translated name */}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/assets/images/F4.png"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {t("facultyCard4Desc")}
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
      <footer
        style={{
          backgroundColor: "#f9f9f9", // Light background for modern look
          padding: "40px 20px",
          textAlign: "center",
          color: "#333",
          fontSize: "16px",
          paddingBottom: "40px",
          borderTop: "2px solid #ddd",
          boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.05)", // Soft shadow to lift the footer
        }}
      >
        {/* Title */}
        <p
          style={{
            margin: "0 0 20px 0",
            fontWeight: "600",
            fontSize: "18px",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {t("footerTitle")}
        </p>

        {/* Container for Adnan and Jayaram */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px", // Spacing between the two profiles
            marginTop: "20px",
          }}
        >
          {/* Adnan's Info */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                margin: "0",
                fontWeight: "600",
                color: "#333",
                fontSize: "16px",
              }}
            >
              {t("footerNameAdnan")}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px", // Spacing between icons
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/adnan-khan-547713246/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0072b1",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://uiuxadnan.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#333",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <FaGlobe size={28} />
              </a>
            </div>
          </div>

          {/* Jayaram's Info */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                margin: "0",
                fontWeight: "600",
                color: "#333",
                fontSize: "16px",
              }}
            >
              {t("footerNameJayaram")}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                marginTop: "10px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/jaya-ram-samavedam-714108249/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0072b1",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://jayaramsamavedam.live/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#333",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                <FaGlobe size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Simple copyright text */}
        <p
          style={{
            marginTop: "40px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          {t("footerRights").replace("{year}", new Date().getFullYear())}
        </p>
      </footer>

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
          width: 1.5vw;
          height: 1.5vw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 10vw;
          }
        }
      `}</style>
    </>
  );
}
