import React from "react";
import Navbar from "./Layouts/Navbar";
import { Outlet } from "react-router";
import Footer from "./Layouts/Footer";
import Home from "./Pages/Home";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
