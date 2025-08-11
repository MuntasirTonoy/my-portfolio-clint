import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router";
import Button from "../Components/Button";

const aboutData = {
  aboutMe: {
    name: "Md Munatsir Mahmud",
    designation: "Full Stack Developer",
    location: "Kushtia, Bangladesh",
    experience: "2+ Years of Experience",
    availability: "Available for new opportunities",
    introduction: `Hi, I'm MD Munatsir MMahmud. My programming journey began after completing my degree in Physics, where I realized my passion for creating digital solutions. I enjoy crafting responsive and scalable web applications that solve real-world problems. Outside of programming, I love exploring nature through hiking and capturing moments with photography. I believe in continuous learning, creativity, and a balanced life.`,
    professionalJourney: [
      {
        heading: "Who I Am",
        content: `I'm a dedicated Full Stack Developer with 2+ years of experience in building modern web applications. I focus on creating accessible and robust digital experiences that truly impact users.`,
      },
      {
        heading: "My Approach",
        content: `Writing clean, maintainable code is my mantra. My background in Physics has honed my analytical and problem-solving skills, which I apply daily to solve complex development challenges. I'm passionate about learning new technologies and staying ahead.`,
      },
      {
        heading: "Academic Background",
        content: `While currently completing my Bachelor's degree in Mathematics, I find the structured, analytical approach of mathematical thinking perfectly complements my programming work. The problem-solving methodologies I'm mastering translate directly to writing efficient algorithms and debugging complex systems.`,
      },
    ],
    journey: [
      {
        year: 2021,
        title: "Academic Beginning & Discovery",
        description:
          "Started my Bachelor's degree in Mathematics while simultaneously discovering my passion for programming. Began exploring basic coding concepts alongside my academic studies, finding parallels between mathematical logic and programming.",
        iconColor: "text-green-400",
      },
      {
        year: "2022-2023",
        title: "Web Development Foundations",
        description:
          "Dedicated myself to learning HTML, CSS, and JavaScript fundamentals. Built several basic websites to practice my skills, transitioning from academic theory to practical web building. This period marked my conversion from casual interest to serious pursuit of web development.",
        iconColor: "text-blue-400",
      },
      {
        year: 2024,
        title: "Structured Learning & Growth",
        description:
          "Completed the Level 1 course from Programming Hero, gaining structured knowledge in modern web development. Expanded my understanding of responsive design, JavaScript frameworks, and development best practices while continuing my Mathematics degree.",
        iconColor: "text-purple-400",
      },
      {
        year: "Present",
        title: "Continuous Improvement",
        description:
          "Currently balancing my Mathematics studies with ongoing programming education. Focusing on mastering React, Next.js, and backend technologies to become a full-stack developer. Applying mathematical problem-solving approaches to optimize code and algorithms.",
        iconColor: "text-yellow-400",
      },
    ],
    socialLinks: {
      github: "https://github.com/ranokraihan",
      linkedin: "https://linkedin.com/in/ranokraihan",
      email: "mailto:ranok@example.com",
      resume: "https://example.com/ranok_raihan_resume.pdf",
      whatsapp: "https://wa.me/1234567890",
    },
  },
};

const AboutPage = () => {
  const {
    name,
    designation,
    location,
    experience,
    availability,
    professionalJourney,
    journey,
    socialLinks,
  } = aboutData.aboutMe;

  return (
    <section className="min-h-screen  font-sans p-8 md:p-16 max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Left Card */}
        <div className="bg-base-300 rounded-xl p-8  flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://i.ibb.co.com/rR6w9b10/image.jpg" // Replace with your actual photo URL
            alt={name}
            className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg mb-6 object-cover"
          />

          <h2 className="text-3xl font-bold ">{name}</h2>
          <p className="text-spotify mb-4">{designation}</p>

          <div className="flex space-x-6 text-gray-400 mb-6 text-lg">
            <Link
              to={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-spotify transition"
            >
              <FaGithub />
            </Link>
            <Link
              to={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-spotify transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={socialLinks.email}
              aria-label="Email"
              className="hover:text-spotify transition"
            >
              <FaEnvelope />
            </Link>
            <Link
              to={socialLinks.whatsapp}
              aria-label="WhatsApp"
              className="hover:text-spotify transition"
            >
              <FaWhatsapp />
            </Link>
          </div>

          <ul className="space-y-3 text-gray-400 mb-6">
            <li className="flex items-center space-x-3">
              <FaPhone className="text-spotify" />
              <span>{location}</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaClock className="text-spotify" />
              <span>{experience}</span>
            </li>
            <li className="flex items-center space-x-3">
              <IoCheckmarkDoneCircle className="text-spotify" />
              <span>{availability}</span>
            </li>
          </ul>

          <div className="flex space-x-4 w-full">
            <Link to={socialLinks.resume}>
              <Button>
                <span className=" flex items-center gap-2">Resume</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button>
                <span className=" flex items-center gap-2">Contact </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Professional Journey */}
        <div className="md:col-span-2">
          <section className="bg-base-300 rounded-xl p-8  h-full">
            <h2 className="text-xl sm:text-3xl md:text-3xl text-center lg:text-start border-b-1   border-b-green-500 font-extrabold mb-4">
              <span className="text-spotify">About</span> Me
            </h2>

            {professionalJourney.map(({ heading, content }) => (
              <div key={heading} className="mb-6 last:mb-0">
                <h4 className="text-spotify font-semibold mb-1">{heading}</h4>
                <p className=" leading-relaxed">{content}</p>
              </div>
            ))}

            <p className="mt-6">
              <a
                href="#projects"
                className="text-spotify hover:underline font-semibold"
              >
                Explore my projects →
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Full-width Journey Timeline Section */}
      <section className="bg-base-300 rounded-xl p-8  mb-16">
        <h3 className="text-xl text-purple-400 font-semibold mb-6 border-b border-purple-400 pb-2">
          My Journey
        </h3>
        <ul className="space-y-8">
          {journey.map(({ year, title, description, iconColor }) => (
            <li key={year} className="flex items-start space-x-6">
              <div
                className={`${iconColor} flex-shrink-0 mt-1 text-2xl`}
                aria-hidden="true"
              >
                ●
              </div>
              <div>
                <p className="font-semibold text-lg ">{title}</p>
                <span className="text-xs text-spotify block mb-1">{year}</span>
                <p className=" leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Full-width CTA Section */}
      <section className="bg-base-300 rounded-xl py-16   text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center t font-extrabold mb-4">
          <span className="text-spotify">Let's</span> Collaborate
        </h2>
        <p className="mb-6 max-w-4xl mx-auto">
          I’m actively seeking new challenges, collaborations, and opportunities
          to grow as a developer. Whether you have a project idea, a technical
          question, or just want to connect over shared interests—I’d love to
          hear from you! When I’m not immersed in code, I recharge by exploring
          nature (camera in hand) or experimenting with photography. Capturing
          moments through a lens helps me approach problem-solving with
          creativity and patience—skills I bring to every project. Let’s build
          something meaningful together!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to={socialLinks.resume}>
            <Button>
              <span className=" flex items-center gap-2">View My Projects</span>
            </Button>
          </Link>
          <Link to="#contact">
            <Button>
              <span className=" flex items-center gap-2">Contact Me</span>
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
