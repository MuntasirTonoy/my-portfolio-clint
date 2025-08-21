import React from "react";
import Button from "../Components/Button";
import { FiDownload } from "react-icons/fi";
import WordFlip from "../Components/WordFlip";
import { IoChatbubblesOutline } from "react-icons/io5";
import HeroPhoto from "../Components/HeroPhoto";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 lg:px-20">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
        {/* Text content with animation */}
        <motion.div
          className="text-center order-2 lg:order-1 lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold ">
            HELLO! I'm
            <br /> <span className="text-6xl text-spotify">Muntasir</span>
          </h1>
          <h1 className=" lg:hidden md:text-3xl text-xl my-2">
            A Full Stack Developer
          </h1>
          <WordFlip />
          <p className="py-2  text-base md:text-lg mx-w-2 ">
            Passionate Full Stack Developer skilled in building robust,
            scalable, and user-friendly web applications. Proficient in both
            frontend and backend technologies, I turn creative ideas into
            complete digital solutions. Let’s build your next project together.
          </p>
          <div className="flex gap-3 justify-center lg:justify-start">
            <a href="https://drive.google.com/uc?export=download&id=1S7hX9xfMWYdf6S6A-IeB4MwEugaRTraG">
              <Button>
                <span className="flex items-center gap-2 ">
                  Download CV <FiDownload />
                </span>
              </Button>
            </a>
            <a
              href="https://wa.me/8801783424220?text=Hello%20there!%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <span className="flex items-center gap-2">
                  Discussion <IoChatbubblesOutline />
                </span>
              </Button>
            </a>
          </div>
        </motion.div>
        <HeroPhoto />
      </div>
    </div>
  );
};

export default Hero;
