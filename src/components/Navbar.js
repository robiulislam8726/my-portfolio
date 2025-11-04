// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ toggleTheme, currentTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  // Common active/inactive style function
  const linkClass = ({ isActive }) =>
    `px-3 py-2 transition-all duration-200 ${
      isActive
        ? "text-blue-600 font-bold border-b-2 border-blue-600"
        : "hover:text-blue-500"
    }`;

  return (
    <nav
      className={`${
        currentTheme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-blue-600"
      } shadow-md transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className={`text-2xl font-bold ${
                currentTheme === "dark" ? "text-white" : "text-blue-600"
              }`}
            >
              MyPortfolio
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/work" className={linkClass}>
              Work
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/education" className={linkClass}>
              Education
            </NavLink>
             <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            {/* Theme Switch Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              {currentTheme === "blue"
                ? "Dark"
                : currentTheme === "dark"
                ? "Light"
                : "Blue"}{" "}
              Theme
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-500 transition"
            >
              {currentTheme === "blue"
                ? "Dark"
                : currentTheme === "dark"
                ? "Light"
                : "Blue"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-2 pt-2 pb-3 space-y-1 ${
            currentTheme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-blue-600"
          } shadow transition-colors duration-500`}
        >
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/work" className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/education" className={linkClass}>
            Education
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
