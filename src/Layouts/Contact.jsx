import React from "react";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-xl text-spotify" />,
    value: "mdmuntasir.dev@gmail.com",
    link: "https://gmail.com",
  },
  {
    icon: <FaPhone className="text-xl text-spotify" />,
    value: "+8801783424220",
  },
  {
    icon: <FaGithub className="text-xl text-spotify" />,
    link: "https://github.com/muntasirtonoy",
    value: "@Muntasirtonoy",
  },
  {
    icon: <FaLinkedin className="text-xl text-spotify" />,
    link: "https://www.linkedin.com/in/muntasirtonoy/",
    value: "@muntasirtonoy",
  },
  {
    icon: <FaFacebook className="text-xl text-spotify" />,
    link: "https://facebook.com/nameistonoy",
    value: "Tonoy",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen  p-5 md:p-12 flex flex-col md:flex-row  justify-center items-center gap-10"
      aria-label="Contact section"
    >
      {/* Left: Contact Info */}
      <div className="w-full md:w-3/12">
        <h2 className="text-4xl md:text-5xl font-bold text-spotify mb-8">
          Contact
        </h2>
        <ul className="space-y-5">
          {contactInfo.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-lg text-base-content"
            >
              {item.icon}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-spotify hover:underline transition"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-7/12 space-y-6"
        noValidate
      >
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text font-semibold ">Your Name</span>
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            type="text"
            className={`input input-bordered w-full ${
              errors.name ? "input-error" : ""
            }`}
            placeholder="Enter your name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && (
            <p id="name-error" className="text-error mt-1 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-semibold">Your Email</span>
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
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-error mt-1 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="message" className="label">
            <span className="label-text font-semibold">Your Message</span>
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className={`textarea textarea-bordered w-full h-28 resize-none ${
              errors.message ? "textarea-error" : ""
            }`}
            placeholder="Type your message..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <p id="message-error" className="text-error mt-1 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default Contact;
