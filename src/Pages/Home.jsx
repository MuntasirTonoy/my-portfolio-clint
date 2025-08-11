import React from "react";
import Hero from "../Layouts/Hero";
import About from "../Layouts/About";
import Skills from "../Layouts/Skills";
import Testimonials from "../Components/Testimonial";
import Service from "../Layouts/Service";
import FeaturedProjects from "../Layouts/FeaturedProjects";

const Home = () => {
  return (
    <>
      <div className="space-y-40 my-10">
        <Hero />
        <About />
        <Skills />
        <Service />
        <FeaturedProjects />
        <Testimonials />
        {/* <Certificates /> */}
      </div>
    </>
  );
};

export default Home;
