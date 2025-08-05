import React from "react";
import { motion } from "framer-motion";
import Tabs from "../Components/Tabs";
import Button from "../Components/Button";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="min-h-screen">
      <div className=" max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-center items-start gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-auto flex-shrink-0 overflow-hidden rounded-xl"
        >
          <img
            src="https://i.ibb.co.com/xtpjxgrt/486460944-1787173155178677-9048366253880968612-n.jpg"
            alt="Profile"
            className="w-72 mx-auto sm:w-80 md:w-96 object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-4 flex flex-col justify-start min-h-[300px]"
        >
          <h2 className="text-5xl text-center md:text-start font-bold text-spotify">
            About Me
          </h2>
          <p className="text-base-content text-justif">
            "I'm a front-end developer with a strong foundation in HTML, CSS,
            and JavaScript. I focus on creating clean, responsive, and
            accessible websites that provide a seamless user experience. I’m
            passionate about web design and continuously learning to improve my
            skills, bringing creative ideas to life through code."
          </p>

          {/* Tabs rendered here */}
          <Tabs />
        </motion.div>
      </div>
      <div className="text-center">
        <Button>
          More about me <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default About;
