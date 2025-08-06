import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        relative overflow-hidden 
        border border-[#02b677] text-[#02b677]
        font-medium text-[17px] rounded-md 
        px-6 py-2 z-10 
        transition-colors duration-500 
        hover:text-white
      "
    >
      {/* Animated Circle */}
      <motion.div
        initial={{ top: "100%", left: "100%" }}
        animate={
          isHovered
            ? { top: "-30px", left: "-30px" }
            : { top: "100%", left: "100%" }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute w-[250px] h-[150px] bg-[#02b677] rounded-full -z-10"
      />

      {children}
    </motion.button>
  );
};

export default Button;
