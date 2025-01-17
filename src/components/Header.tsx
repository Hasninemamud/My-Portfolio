import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>
        <div className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="hover:text-teal-200 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-teal-200 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-teal-200 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-teal-200 transition duration-300"
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-teal-700 text-white">
          <a
            href="#about"
            className="block py-2 px-4 text-sm hover:bg-teal-800 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-sm hover:bg-teal-800 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 text-sm hover:bg-teal-800 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-sm hover:bg-teal-800 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
