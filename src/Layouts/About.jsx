import React from "react";
import { motion } from "framer-motion";
import Tabs from "../Components/Tabs";
import Button from "../Components/Button";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  const blobVariants = {
    animate: {
      x: [0, 20, 30, 20, 0, -20, -30, -20, 0], // Reduced movement for mobile
      y: [0, -15, 0, 15, 30, 15, 0, -15, 0], // Reduced movement for mobile
      scale: [1, 1.1, 1, 1.05, 1, 1.08, 1, 1.1, 1],
      opacity: [0.6, 0.75, 0.65, 0.7, 0.6, 0.75, 0.65, 0.7, 0.6],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div id="about" className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12">
        {/* Image Section with Blob Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 flex-shrink-0"
        >
          {/* Animated Blob - Responsive sizing */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-red-600 filter blur-3xl"
            style={{
              backgroundColor: "#02b677",
              zIndex: 0,
              boxShadow: `0 0 150px 60px rgba(2, 182, 119, 0.3)`,
            }}
          />

          {/* Static Glow - Responsive sizing and positioning */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] 
            rounded-full blur-[100px] opacity-20 sm:opacity-25"
            style={{ backgroundColor: "#02b677", zIndex: 0 }}
          />

          {/* Profile Image with responsive sizing */}
          <div className="relative overflow-hidden rounded-xl z-10 w-full">
            <img
              src="https://i.ibb.co.com/xtpjxgrt/486460944-1787173155178677-9048366253880968612-n.jpg"
              alt="Profile"
              className="w-full h-auto object-cover transition-transform duration-500 rounded-lg hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-4 sm:space-y-6 flex flex-col justify-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-start font-extrabold mb-4">
            <span className="text-spotify">About</span> Me
          </h2>
          <p className="text-base-content text-justify text-sm sm:text-base">
            I'm a front-end developer with a strong foundation in HTML, CSS, and
            JavaScript. I focus on creating clean, responsive, and accessible
            websites that provide a seamless user experience. I'm passionate
            about web design and continuously learning to improve my skills,
            bringing creative ideas to life through code.
          </p>

          {/* Tabs rendered here */}
          <Tabs />
        </motion.div>
      </div>

      {/* Button with responsive margin */}
      <div className="text-center mt-8 sm:mt-12">
        <Button>
          <span className="flex items-center gap-2">
            More about me <BsArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default About;
