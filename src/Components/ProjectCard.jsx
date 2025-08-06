import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const statusColors = {
  completed: "bg-green-100 text-green-700",
  working: "bg-yellow-100 text-yellow-700",
};

const ProjectCard = ({ project }) => {
  const { image, title, description, tags, status, id } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group w-full max-w-md mx-auto bg-base-100 rounded-lg shadow-md overflow-hidden z-10"
    >
      {/* Animated Circle Background */}
      <motion.div
        initial={{ top: "100%", left: "100%" }}
        animate={
          isHovered
            ? { top: "150px", left: "150px" }
            : { top: "100%", left: "100%" }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-96 h-96 bg-[#02b677] opacity-90 rounded-full z-10"
      />

      {/* Top tool section */}
      <div className="flex items-center p-2">
        <span className="w-3 h-3 bg-red-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full mx-1"></span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-base-content">{title}</h2>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="text-sm text-base-content line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated Arrow Link */}
      <Link
        to={`/projects/${id}`}
        className="absolute bottom-15 right-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white text-spotify p-2 rounded-full shadow-md z-20 "
      >
        <FiArrowRight size={20} />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
