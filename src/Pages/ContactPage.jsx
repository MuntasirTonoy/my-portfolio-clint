import React from "react";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-xl text-spotify" />,
    value: "mdmuntasir.dev@gmail.com",
    link: "mailto:mdmuntasir.dev@gmail.com",
  },
  {
    icon: <FaPhone className="text-xl text-spotify" />,
    value: "+8801783424220",
    link: "tel:+8801783424220",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-spotify" />,
    value: "Dhaka, Bangladesh",
  },
  {
    icon: <FaGithub className="text-xl text-spotify" />,
    link: "https://github.com/muntasirtonoy",
    value: "github.com/muntasirtonoy",
  },
  {
    icon: <FaLinkedin className="text-xl text-spotify" />,
    link: "https://www.linkedin.com/in/muntasirtonoy/",
    value: "linkedin.com/in/muntasirtonoy",
  },
  {
    icon: <FaFacebook className="text-xl text-spotify" />,
    link: "https://facebook.com/nameistonoy",
    value: "facebook.com/nameistonoy",
  },
];

const ContactPage = () => {
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
    <div className="min-h-screen my-20 bg-base-100 px-5 ">
      <section
        className=" py-16  md:px-12 lg:px-24  flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16"
        aria-label="Contact section"
      >
        {/* Left: Contact Info */}
        <div className="w-full md:w-5/12 lg:w-4/12">
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
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-7/12 lg:w-6/12 space-y-6 bg-base-300 p-5 md:p-8 rounded-lg  border border-base-300"
          noValidate
        >
          <h3 className="text-2xl font-semibold text-spotify mb-6">
            Send Me a Message
          </h3>

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
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-error mt-2 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

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
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-error mt-2 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

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
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby="message-error"
            ></textarea>
            {errors.message && (
              <p id="message-error" className="text-error mt-2 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full mt-4">
            Send Message
          </Button>
        </form>
      </section>

      {/* <div className="grid md:grid-cols-2 container mx-auto mb-10 gap-8 mt-16">
        <div className="bg-green-400/10 p-8 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold mb-3 text-spotify">
            Work Inquiry
          </h3>
          <p className="mb-6 text-base-content/80">
            Interested in collaborating on a project? Let's discuss how we can
            work together.
          </p>
          <Button type="submit">Submit</Button>
        </div>
        <div className="bg-green-400/10 p-8 rounded-lg border border-secondary/20">
          <h3 className="text-xl font-semibold mb-3 text-spotify">
            Quick Question
          </h3>
          <p className="mb-6 text-base-content/80">
            Have a brief question? Send me a quick email and I'll get back to
            you as soon as possible.
          </p>
          <Button type="submit">email me</Button>
        </div>
      </div> */}
      <section className="bg-base-300 rounded-xl py-16 container mx-auto   text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center t font-extrabold mb-4">
          <span className="text-spotify">Let's</span> Collaborate
        </h2>
        <p className="mb-6 max-w-4xl mx-auto p-5">
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
          <Link to="/projects">
            <Button>
              <span className=" flex items-center gap-2">View My Projects</span>
            </Button>
          </Link>
          {/* <Link to="/contact">
            <Button>
              <span className=" flex items-center gap-2">Contact Me</span>
            </Button>
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
