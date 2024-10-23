import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Components/Navbar";
import { FadeDown } from "./Components/fadedown";

export default function App() {
  const [scrollX, setScrollX] = useState(0); // State to track the scroll position

  // Helper function to generate random positions for petals
  const generateRandomPetals = (numPetals) => {
    const petals = [];
    for (let i = 0; i < numPetals; i++) {
      const randomLeft = Math.random() * 100; // Random horizontal position
      const randomDuration = Math.random() * 5 + 10; // Random fall duration (10 to 15 seconds for a slower fall)
      const randomDelay = Math.random() * 5; // Random delay before fall
      const randomSize = Math.random() * 0.5 + 0.5; // Random size for petals (scale between 0.5 and 1)

      petals.push(
        <motion.img
          key={i}
          src="/assets/images/petal.png"
          alt="falling petal"
          className="falling-petal"
          style={{
            left: `${randomLeft}%`, // Random starting horizontal position
            transform: `scale(${randomSize})`, // Vary the size of the petals
            animationDuration: `${randomDuration}s`, // Random fall duration
            animationDelay: `${randomDelay}s`, // Random delay before fall
          }}
          animate={{
            y: ["-10%", "110vh"], // Falling from above the viewport to below
            x: ["0%", "5%", "-3%", "2%"], // Simulate horizontal swaying
            rotate: [0, 15, -15, 0], // Slight rotation for realism
          }}
          transition={{
            repeat: Infinity, // Infinite loop for petals
            ease: "easeInOut", // Smooth transition
            duration: randomDuration, // Use the random duration for fall
          }}
        />,
      );
    }
    return petals;
  };

  // Update scroll position when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollX(scrollY); // Track vertical scroll as horizontal movement for images
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create an array of images to fill the width
  const generateMovingImages = (numImages) => {
    const images = [];
    for (let i = 0; i < numImages; i++) {
      images.push(
        <motion.img
          key={i}
          src="/assets/images/movingimage.webp"
          alt="Moving Image"
          style={{
            width: "800px", // Increased width of each moving image
            height: "600px", // Set the height of each image
            objectFit: "cover", // Ensure image fits well in the container
          }}
        />,
      );
    }
    return images;
  };

  return (
    <>
      {/* First section with falling petals and logo */}
      <section
        style={{
          backgroundImage: `url("/assets/images/bg2.webp")`, // Use the imported background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjust the height to fill the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden", // Ensure the petals stay within the section
          backgroundColor: "#1e1e1e", // Dark background color
        }}
      >
        {/* Darker Overlay for background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent overlay
            zIndex: 1, // Make sure it's below the logo and content but above the background image
          }}
        />

        {/* Falling petals */}
        <div className="falling-petals-container">
          {generateRandomPetals(25)}{" "}
          {/* Generates 25 random realistic petals */}
        </div>

        {/* Logo inside the hero section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            zIndex: 2, // Place logo above the overlay
            textAlign: "center",
          }}
        >
          <motion.img
            src="/assets/Images/logo.png" // Logo image source
            alt="Logo"
            style={{
              width: "60vw", // Use responsive units for width
              height: "auto", // Maintain aspect ratio
              maxWidth: "400px", // Set a max width for larger screens
            }}
          />
        </motion.div>
      </section>

      {/* Section with the moving images */}
      <section
        style={{
          backgroundColor: "#333", // Dark background color
          height: "600px", // Define a fixed height for the moving image section
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden", // Ensure the images stay within the section
        }}
      >
        {/* Container for moving images */}
        <motion.div
          style={{
            display: "flex",
            width: "100%", // Make sure it stretches across the full width
            position: "absolute",
            left: `${-scrollX * 0.2}px`, // Move container of images based on scroll
            whiteSpace: "nowrap", // Ensure images are aligned in a single row
          }}
        >
          {generateMovingImages(10)} {/* Generate multiple images */}
        </motion.div>
      </section>

      {/* Combined section for FadeDown and company logos */}
      <section
        style={{
          backgroundColor: "#000000", // Same dark background color to maintain theme
          padding: "100px 20px", // Spacing for the section
          textAlign: "center",
          color: "#fff", // Light text color for dark theme
        }}
      >
        {/* Typing text animation */}
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
          className="text-4xl font-bold text-center sm:text-5xl md:text-5xl lg:text-5xl pb-12" // Tailwind classes for responsive styling
          repeat={Infinity}
        />

        {/* Company Logos and Text */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around", // Space logos evenly
            flexWrap: "wrap", // Allow logos to wrap on smaller screens
            gap: "20px", // Add some spacing between logos
            marginTop: "50px", // Spacing between FadeDown and logos
          }}
        >
          {/* Company Logo and Text */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/assets/images/jetaa.png" // Add your logo image source
              alt="JETAA"
              style={{
                width: "150px", // Set a width for the logo
                height: "auto", // Maintain aspect ratio
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
            </p>{" "}
            {/* Company Name */}
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
        </div>
      </section>

      <style jsx>{`
        .falling-petals-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none; // Ensures no interaction with the falling petals
          overflow: hidden;
        }

        .falling-petal {
          position: absolute;
          top: -10%; // Start offscreen at the top
          width: 3vw; // Responsive size for the petals (this will be scaled dynamically)
          height: 3vw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 10vw;
          }
        }
        }
      `}</style>

      <Navbar />
    </>
  );
}
