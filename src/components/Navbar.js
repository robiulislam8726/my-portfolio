import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ toggleTheme, currentTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${
        currentTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-blue-600"
      } shadow-md transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold ${
                currentTheme === "dark" ? "text-white" : "text-blue-600"
              }`}
            >
              MyPortfolio
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/work" className="hover:text-blue-600">Work</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <Link to="/education" className="hover:text-blue-600">Education</Link>

            <button
              onClick={toggleTheme}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              {currentTheme === "blue"
                ? "Dark"
                : currentTheme === "dark"
                ? "Light"
                : "Blue"} Theme
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

      {isOpen && (
        <div
          className={`md:hidden px-2 pt-2 pb-3 space-y-1 ${
            currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-blue-600"
          } shadow transition-colors duration-500`}
        >
          <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-100">Home</Link>
          <Link to="/work" className="block px-3 py-2 rounded hover:bg-blue-100">Work</Link>
          <Link to="/projects" className="block px-3 py-2 rounded hover:bg-blue-100">Projects</Link>
          <Link to="/education" className="block px-3 py-2 rounded hover:bg-blue-100">Education</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
