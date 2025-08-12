import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "../Components/ServiceCard";

const serviceDescription =
  " I build your product with responsive design, clean code, and a focus on user experience, ensuring a seamless and engaging interface. My full-stack expertise lets me handle projects from concept to deployment with efficiency and creativity.";

const services = [
  {
    icon: <FaCode size={40} className="text-spotify" />,
    title: "Frontend Development",
    description:
      "Crafting responsive, user-friendly interfaces with React, Tailwind CSS, and modern JavaScript to bring designs to life.",
  },
  {
    icon: <FaServer size={40} className="text-spotify" />,
    title: "Backend Development",
    description:
      "Building scalable and secure APIs with Node.js and Express, ensuring smooth communication between frontend and backend.",
  },
  {
    icon: <FaDatabase size={40} className="text-spotify" />,
    title: "Database Management",
    description:
      "Designing and managing efficient databases using MongoDB, ensuring fast queries and reliable data storage.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-spotify" />,
    title: "Full-Stack Solutions",
    description:
      "Integrating frontend and backend into complete MERN applications, from concept to deployment.",
  },
];

const Services = () => (
  <section className="bg-base-100">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Intro with animation */}
        <motion.div
          className="mx-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h4 className="text-spotify font-bold text-lg mb-2">SERVICES</h4>
          <h2 className="text-4xl font-extrabold  mb-4">
            How I Help You To <br /> Build Your Product
          </h2>
          <p className="text-base-content leading-relaxed">
            {serviceDescription}
          </p>
        </motion.div>

        {/* Right: Services (cards animate individually in ServiceCard) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5 lg:gap-10">
          {services.map(({ icon, title, description }, index) => (
            <ServiceCard
              delay={index * 0.4}
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
