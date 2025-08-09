import React from "react";
import Hero from "../Layouts/Hero";
import About from "../Layouts/About";
import Skills from "../Layouts/Skills";
import MyProjects from "../Layouts/MyProjects";
import Contact from "../Layouts/Contact";
import Service from "../Layouts/Service";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Service />
      <MyProjects />
      <Contact />
    </>
  );
};

export default Home;
