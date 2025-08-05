import React from "react";
import Hero from "../Layouts/Hero";
import About from "../Layouts/About";
import Skills from "../Layouts/Skills";
import MyProjects from "../Layouts/MyProjects";
import Contact from "../Layouts/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
    </>
  );
};

export default Home;
