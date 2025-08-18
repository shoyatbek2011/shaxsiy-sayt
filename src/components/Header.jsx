import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-indigo-600 hover:text-indigo-800 transition"
        >
          Ibrohimov
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        {/* Desktop Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-center font-medium text-gray-700">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-indigo-600 transition"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
