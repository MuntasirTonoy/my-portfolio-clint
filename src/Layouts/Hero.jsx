import React from "react";
import Button from "../Components/Button";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import WordFlip from "../Components/WordFlip";

const Hero = () => {
  return (
    <div id="hero" className="h-screen bg-blue-700">
      <div className="hero bg-base-200 min-h-screen px-4 lg:px-20 py-10">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-8">
          {/* Image stays first */}
          <img
            src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/486576202_1787487388480587_6687481655588993159_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGRosFKgmXtzxs7Vr_uCPOdct_4aoWXUeVy3_hqhZdR5UHptS1E-CxHN4NmpvhCrm3NUUB3S52zC4sLq9aKjoN5&_nc_ohc=xxElasdrQ7cQ7kNvwGsmFB3&_nc_oc=AdnGhFtKve_h_IwqD2xB-wIVYQBN-B0wmMOzbqbpEVvIhSP50XTvQlNN8lgaldgxOlk&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=ItRVEwi6GIV5e-SHjmy_nA&oh=00_AfVNrYERJoPKiNY1HJXLrT4-OEDs8gavylMdUsxsxY7YGw&oe=68976B8A"
            alt="Hero"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-lg shadow-2xl"
          />

          {/* Text content stays second */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold ">
              HELLO! I'm
              <br />{" "}
              <span className="md:text-8xl text-5xl text-spotify">
                Muntasir
              </span>
            </h1>
            <WordFlip />
            <p className="py-2  text-base md:text-lg ">
              Passionate Full Stack Developer skilled in building robust,
              scalable, and user-friendly web applications. Proficient in both
              frontend and backend technologies, I turn creative ideas into
              complete digital solutions. Let’s build your next project
              together.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Button>
                {" "}
                Download CV <FiDownload />{" "}
              </Button>
              <Button>
                {" "}
                Hire Me <FiArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
