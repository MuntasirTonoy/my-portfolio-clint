import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tabs from "../Components/Tabs";
import Button from "../Components/Button";
import { BsArrowRight } from "react-icons/bs";

// Import local images
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img4.jpg";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const imageArray = [image1, image2, image3, image4];

  const blobVariants = {
    animate: {
      x: [0, 20, 30, 20, 0, -20, -30, -20, 0],
      y: [0, -15, 0, 15, 30, 15, 0, -15, 0],
      scale: [1, 1.1, 1, 1.05, 1, 1.08, 1, 1.1, 1],
      opacity: [0.6, 0.75, 0.65, 0.7, 0.6, 0.75, 0.65, 0.7, 0.6],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % imageArray.length
        );
        setIsChanging(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <div id="about" className="min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 sm:gap-12">
        {/* Image Section with increased height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 flex-shrink-0 
             h-[400px] sm:h-[500px] lg:h-[600px]" // Responsive heights
        >
          {/* Animated Blob */}
          <motion.div
            variants={blobVariants}
            animate="animate"
            className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 rounded-full filter blur-3xl"
            style={{
              backgroundColor: "#02b677",
              zIndex: 0,
              boxShadow: `0 0 150px 60px rgba(2, 182, 119, 0.3)`,
            }}
          />

          {/* Static Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] 
               rounded-full blur-[100px] opacity-20 sm:opacity-25"
            style={{ backgroundColor: "#02b677", zIndex: 0 }}
          />

          {/* Profile Image */}
          <div className="relative overflow-hidden rounded-xl z-10 w-full h-full">
            <motion.img
              key={currentImageIndex}
              src={imageArray[currentImageIndex]}
              alt="Profile"
              initial={{ opacity: 0, scale: 1.1 }} // Start zoomed in
              animate={{ opacity: isChanging ? 0 : 1, scale: 1 }} // Zoom out
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-full object-cover rounded-lg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex-1 space-y-4 sm:space-y-6 flex flex-col justify-start"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-start font-extrabold mb-4">
            <span className="text-spotify">About</span> Me
          </h2>
          <p className="text-base-content text-justify text-sm sm:text-base">
            I’m a passionate front-end developer with a solid foundation in
            HTML, CSS, and JavaScript, dedicated to crafting clean, responsive,
            and accessible websites. My work is driven by a commitment to
            delivering seamless user experiences that balance aesthetics with
            functionality. I have a keen eye for detail, ensuring every design
            element aligns with modern web standards. Beyond coding, I’m deeply
            interested in UI/UX principles, and I continuously explore new
            tools, frameworks, and techniques to stay ahead in the ever-evolving
            world of web development. My goal is to transform creative concepts
            into engaging, user-friendly digital solutions that leave a lasting
            impact.
          </p>

          {/* Tabs rendered here */}
          <Tabs />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
