import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router";

const educationData = [
  {
    level: "HSC (Science)",
    institution: "Khulna Public College",
    year: "2020",
    result: "GPA 5.00",
  },
  {
    level: "B.Sc in Mathematics",
    institution: "Government College, Kushtia",
    year: "2021 - Present",
    result: "Current CGPA: 3.85",
  },
  {
    level: "M.Sc in Mathematics",
    institution: "Planned for Future",
    year: "Upcoming",
    result: "N/A",
  },
];

const aboutData = {
  aboutMe: {
    name: "Md Munatsir Mahmud (Tonoy) ",
    designation: "Full Stack Developer",
    location: "Kushtia, Bangladesh",
    experience: "2+ Years of Experience",
    availability: "Available",
    professionalJourney: [
      {
        heading: "Who I Am",
        content: `I'm a dedicated Full Stack Developer with 2+ years of experience in building modern web applications. I focus on creating accessible and robust digital experiences that truly impact users.`,
      },
      {
        heading: "My Approach",
        content: `Writing clean, maintainable code is my mantra. My background in Physics has honed my analytical and problem-solving skills, which I apply daily to solve complex development challenges.`,
      },
      {
        heading: "Academic Background",
        content: `While currently completing my Bachelor's degree in Mathematics, I find the structured, analytical approach of mathematical thinking perfectly complements my programming work.`,
      },
    ],
    journey: [
      {
        year: 2021,
        title: "Academic Beginning & Discovery",
        description:
          "Embarked on my Bachelor's degree in Mathematics, which honed my problem-solving and analytical thinking skills. During this time, I was introduced to the world of programming, sparking a deep curiosity for technology and its potential to solve real-world problems.",
        iconColor: "text-green-400",
      },
      {
        year: "2022-2023",
        title: "Web Development Foundations",
        description:
          "Focused on mastering the core building blocks of the web—HTML, CSS, and JavaScript. Developed an understanding of responsive design, semantic markup, and interactive UI behaviors, laying a strong foundation for future full-stack development.",
        iconColor: "text-blue-400",
      },
      {
        year: "2024-2025",
        title: "Structured Learning & Growth",
        description:
          "Completed the Level 1 course from Programming Hero, which provided a structured approach to modern web development. Learned to work with frameworks, apply best coding practices, and collaborate on small-scale projects that simulated real-world workflows.",
        iconColor: "text-purple-400",
      },
      {
        year: "Present",
        title: "Continuous Improvement",
        description:
          "Actively balancing my Mathematics degree with ongoing programming projects and advanced learning. Exploring backend technologies, refining frontend skills, and contributing to personal and collaborative projects to expand both technical depth and creative problem-solving abilities.",
        iconColor: "text-yellow-400",
      },
    ],

    socialLinks: {
      github: "https://github.com/muntasirtonoy",
      linkedin: "https://linkedin.com/in/mdmunatsirtonoy",
      email: "mailto:mdmunatsir.dev@gmail.com",
      resume:
        "https://drive.google.com/uc?export=download&id=13zl3BQsdlwAsrhjQT8Yv8oC2KIZTDCnN",
      whatsapp: "https://wa.me/+8801783424220",
    },
  },
};

const AboutPage = () => {
  // destructure from aboutData
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

  // common animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: customDelay },
    }),
  };

  return (
    <section className="min-h-screen font-sans p-6 md:p-12 max-w-7xl mx-auto mt-20">
      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
        {/* Left Card */}
        <motion.div
          className="bg-base-300 rounded-xl p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0} // delay 0s
        >
          <img
            src="https://i.ibb.co.com/rR6w9b10/image.jpg"
            alt={name}
            className="w-40 h-40 rounded-full ring-4 ring-green-500 shadow-lg mb-6 object-cover"
          />
          <h2 className="text-3xl mb-2 font-bold">{name}</h2>
          <p className="text-spotify mb-4">{designation}</p>

          <div className="flex space-x-6 text-gray-400 mb-6 text-lg">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-green-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-green-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Email"
              className="hover:text-green-500 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href={socialLinks.whatsapp}
              aria-label="WhatsApp"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center space-x-3">
              <FaLocationArrow className="text-spotify" />
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
        </motion.div>

        {/* Right Content - Professional Journey */}
        <div className="lg:col-span-2">
          <section className="bg-base-300 rounded-xl p-8 h-full">
            <h2 className="text-xl sm:text-3xl md:text-3xl pb-4 text-start border-b-1 border-b-green-500 font-extrabold mb-4">
              <span className="text-spotify">About</span> Me
            </h2>
            {professionalJourney.map(({ heading, content }, i) => (
              <motion.div
                key={heading}
                className="mb-6 last:mb-0"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i * 0.2 + 0.3} // stagger with delay
              >
                <h4 className="text-spotify font-semibold mb-1">{heading}</h4>
                <p className="leading-relaxed">{content}</p>
              </motion.div>
            ))}
            <p className="mt-6">
              <Link
                to="#projects"
                className="text-spotify hover:underline font-semibold"
              >
                Explore my projects →
              </Link>
            </p>
          </section>
        </div>
      </div>

      {/* Education Section */}
      <section className="bg-base-300 rounded-xl p-8 mb-16">
        <h2 className="text-xl sm:text-3xl md:text-3xl text-start border-b-1 pb-4 border-b-green-500 font-extrabold mb-8">
          <span className="text-spotify ">My </span>Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 bg-base-100 rounded-xl space-y-3 transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={index * 0.2 + 0.2}
            >
              <h3 className="font-bold text-xl">{edu.level}</h3>
              <p className="text-md text-gray-400">{edu.institution}</p>
              <span className="text-sm text-spotify block">{edu.year}</span>
              <p className="text-sm font-semibold">{edu.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full-width Journey Timeline */}
      <section className="bg-base-300 rounded-xl md:p-8 p-6 mb-16">
        <h2 className="text-xl sm:text-3xl md:text-3xl text-start border-b-1 pb-4 border-b-green-500 font-extrabold mb-4">
          <span className="text-spotify">My</span> Journey
        </h2>
        <ul className="space-y-8">
          {journey.map(({ year, title, description, iconColor }, idx) => (
            <motion.li
              key={year}
              className="flex items-start space-x-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              custom={idx * 0.2 + 0.1}
            >
              <div
                className={`${iconColor} flex-shrink-0 mt-1 text-2xl`}
                aria-hidden="true"
              >
                ●
              </div>
              <div>
                <p className="font-semibold text-lg">{title}</p>
                <span className="text-xs text-spotify block mb-1">{year}</span>
                <p className="leading-relaxed">{description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AboutPage;
