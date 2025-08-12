import React from "react";
import Hero from "../Layouts/Hero";
import Skills from "../Layouts/Skills";
import Testimonials from "../Components/Testimonial";
import Service from "../Layouts/Service";
import FeaturedProjects from "../Layouts/FeaturedProjects";
import Introduction from "../Layouts/Introduction";

const Home = () => {
  return (
    <>
      <div className="space-y-40 my-10">
        <Hero />
        <Introduction />
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
