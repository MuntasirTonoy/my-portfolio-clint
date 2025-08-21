import React, { useState, useEffect } from "react";
import whiteLogo from "../assets/logo/white-logo.png";
import blackLogo from "../assets/logo/black-logo.png";
import { FiDownload } from "react-icons/fi";
import Button from "../Components/Button";
import Switch from "../Components/Switch";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const navItems = ["about", "projects", "contact"];

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`navbar bg-transparent  backdrop-blur-2xl  shadow-xs fixed z-50 top-0  w-full lg:px-10 transition-transform duration-300  `}
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 max-w-[80vw] "
          >
            <li>
              <NavLink to="/" className="capitalize cursor-pointer">
                Home
              </NavLink>
            </li>
            {navItems.map((item) => (
              <li key={item}>
                <NavLink to={item} className="capitalize cursor-pointer">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link className="ml-2 cursor-pointer" to="/">
          <img
            src={theme === "light" ? blackLogo : whiteLogo}
            alt="home logo"
            className="h-8"
          />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="capitalize cursor-pointer">
              Home
            </NavLink>
          </li>
          {navItems.map((item) => (
            <li key={item}>
              <NavLink to={item} className="capitalize cursor-pointer">
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="navbar-end gap-2 ">
        <div className="hidden md:block">
          <a href="https://drive.google.com/uc?export=download&id=1S7hX9xfMWYdf6S6A-IeB4MwEugaRTraG">
            <Button>
              <span className="flex items-center gap-2">
                Resume <FiDownload />
              </span>
            </Button>
          </a>
        </div>

        <Switch theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
