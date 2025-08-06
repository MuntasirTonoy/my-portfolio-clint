import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { Link } from "react-scroll";
import whiteLogo from "../assets/white-logo.png";
import blackLogo from "../assets/black-logo.png";
import { FiDownload } from "react-icons/fi";
import Button from "../Components/Button";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const navItems = ["about", "skills", "projects", "contact"];

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`navbar bg-base-100 shadow-md fixed z-50 top-0 w-full lg:px-10 transition-transform duration-300  `}
    >
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active"
                  className="capitalize cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          className="ml-2 cursor-pointer"
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
        >
          <img
            src={theme === "light" ? blackLogo : whiteLogo}
            alt="Logo"
            className="h-8"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className="capitalize cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="navbar-end gap-2 ">
        <div className="hidden md:block">
          <Button>
            {" "}
            <span className="flex items-center gap-2">
              Resume <FiDownload />
            </span>
          </Button>
        </div>
        <button
          onClick={toggleTheme}
          className="btn btn-ghost text-xl"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FaMoon /> : <LuSun />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
