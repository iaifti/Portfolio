import React, { useState } from "react";
import HB from "../components/hb";
// import { FaCode } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block w-full max-w-screen-lg px-4 pt-2 font-overpass mx-auto bg-none lg:px-8">
      <div className="container flex items-center justify-between mx-auto text-slate-800">
        {/* Logo */}
        <a
          href="#"
          className="mr-4 font-caveat block cursor-pointer py-1.5 text-base text-navy font-semibold sm:text-lg md:text-xl lg:text-2xl transition transform hover:scale-110 duration-200"
        >
          Ahmed.
        </a>

        {/* Center Navigation Links */}
        <div className="hidden font-signika lg:flex flex-1 justify-center">
          <ul className="flex gap-12">
            <li className="text-navy">
              <a
                href="#projects"
                className="px-3 py-2 text-navy font-semibold sm:text-sm md:text-md hover:bg-orange/10 hover:bg-opacity-30 rounded-lg transition-all duration-200"
              >
                Projects
              </a>
            </li>
            <li className="text-navy">
              <a
                href="#experience"
                className="px-3 py-2 text-navy font-semibold sm:text-sm md:text-md hover:bg-orange/10 hover:bg-opacity-30 rounded-lg transition-all duration-200"
              >
                Experience
              </a>
            </li>
            <li className="text-navy">
              <a
                href="#about"
                className="px-3 py-2 text-navy font-semibold sm:text-sm md:text-md hover:bg-orange/10 hover:bg-opacity-30 rounded-lg transition-all duration-200"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Link on the Right */}
        <div className="hidden lg:block">
          <a
            href="https://www.linkedin.com/in/ahmedmdistiaq"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-navy font-semibold sm:text-sm md:text-md hover:bg-orange/10 hover:bg-opacity-30  rounded-lg transition-all transform hover:scale-110 duration-200"
          >
            Connect
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <HB toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-center bg-none">
          <li>
            <a
              href="#projects"
              className="text-navy hover:text-orange font-semibold"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-navy hover:text-orange font-semibold"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-navy hover:text-orange font-semibold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-navy hover:text-orange font-semibold"
            >
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
