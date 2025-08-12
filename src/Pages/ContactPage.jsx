import React, { useState } from "react";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion"; // <-- Import motion

const contactInfo = [
  {
    icon: <FaEnvelope />,
    value: "mdmunatsir.dev@gmail.com",
    link: "mailto:mdmunatsir.dev@gmail.com",
  },
  {
    icon: <FaPhone />,
    value: "+8801783-424220",
    link: "tel:+8801783424220",
  },
  {
    icon: <FaGithub />,
    value: "Munatsir",
    link: "https://github.com/mdmunatsirtonoy",
  },
  {
    icon: <FaLinkedin />,
    value: "Munatsir MMahmud",
    link: "https://linkedin.com/in/mdmunatsirtonoy",
  },
  {
    icon: <FaMapMarkerAlt />,
    value: "Kushtia, Bangladesh",
  },
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_b24hywd",
        "template_nrnbgbp",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "w3L0GmacoYEpdGzIV"
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire("Success!", "Your message has been sent!", "success");
          reset();
        },
        () => {
          setLoading(false);
          Swal.fire("Oops!", "Failed to send message. Try again.", "error");
        }
      );
  };

  // animation variants for reveal
  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <div className="min-h-screen my-20 bg-base-100 px-5">
      <section className="py-16 md:px-5 lg:px-24 flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
        {/* Left: Contact Info */}
        <motion.div
          className="w-full md:w-5/12 lg:w-4/12"
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0} // delay 0s
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-spotify mb-8">
            Get In <span className="text-base-content">Touch</span>
          </h2>
          <p className="text-lg text-base-content/80 mb-8">
            Feel free to reach out for collaborations or just a friendly hello.
            I'll try my best to get back to you!
          </p>

          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-lg text-base-content"
              >
                <span className="mt-1">{item.icon}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-spotify hover:underline transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-7/12 lg:w-6/12 space-y-6 bg-base-300 p-5 md:p-8 rounded-lg border border-base-300"
          noValidate
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={0.3} // delay 0.3s
        >
          <h3 className="text-2xl font-semibold text-spotify mb-6">
            Send Me a Message
          </h3>

          {/* Name */}
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              type="text"
              className={`input input-bordered w-full ${
                errors.name ? "input-error" : ""
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-error mt-2 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text font-medium">Your Email</span>
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-error mt-2 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text font-medium">Your Message</span>
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className={`textarea textarea-bordered w-full h-32 ${
                errors.message ? "textarea-error" : ""
              }`}
              placeholder="How can I help you?"
            ></textarea>
            {errors.message && (
              <p className="text-error mt-2 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </section>

      {/* Bottom Section */}
      <motion.section
        className="bg-base-300 rounded-xl py-16 container mx-auto text-center"
        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={0.3} // delay 0.3s
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-spotify">Let's</span> Collaborate
        </h2>
        <p className="mb-6 max-w-4xl mx-auto p-5">
          I’m actively seeking new challenges, collaborations, and opportunities
          to grow as a developer. Whether you have a project idea, a technical
          question, or just want to connect—I’d love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/projects">
            <Button>
              <span className="flex items-center gap-2">View My Projects</span>
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
