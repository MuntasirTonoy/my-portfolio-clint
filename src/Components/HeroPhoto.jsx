import React from "react";
import { motion } from "framer-motion";

const HeroPhoto = () => {
  const photo =
    "https://i.ibb.co.com/kss7vSR8/486576202-1787487388480587-6687481655588993159-n.jpg";

  const blobVariants = {
    animate: {
      x: [0, 40, 60, 40, 0, -40, -60, -40, 0],
      y: [0, -30, 0, 30, 60, 30, 0, -30, 0],
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
    <motion.div
      className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto rounded-lg overflow-visible order-1 lg:order-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Animated Blurred Blob */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-red-600 filter blur-3xl"
        style={{ zIndex: 0 }}
      />

      {/* Static Glow Background - Responsive */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[200px] h-[200px] sm:w-96 sm:h-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#02b677", zIndex: 0 }}
      />

      {/* Main Photo with Segmented Neon Border */}
      <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden flex items-center justify-center bg-black">
        {/* Segmented Border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="100"
            cy="100"
            r="100"
            stroke="#00ff99"
            strokeWidth="4"
            strokeDasharray="40 20"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Actual Photo */}
        <img
          src={photo}
          alt="hero"
          loading="lazy"
          className="w-full h-full object-cover rounded-full "
        />
      </div>
    </motion.div>
  );
};

export default HeroPhoto;
