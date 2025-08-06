import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ category, items, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-base-200 rounded-2xl p-6 shadow-xs border-1 border-base-300  transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-spotify mb-6 border-b border-gray-300 pb-2">
        {category}
      </h3>
      <div className="flex flex-col gap-5">
        {items.map((skill, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-1">
              <img src={skill.icon} alt={skill.name} className="w-6 h-6  " />
              <span className="font-medium text-base-content">
                {skill.name}
              </span>
              <span className="ml-auto text-sm text-gray-500">
                {skill.proficiency}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <motion.div
                className="bg-[#02b677] h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
