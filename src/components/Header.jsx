import React, { useState } from "react";
import HB from "../components/hb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="block w-full max-w-screen-lg px-4 py-2 font-overpass mx-auto bg-none lg:px-8">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-navy font-semibold sm:text-lg md:text-xl lg:text-2xl transition transform hover:-translate-y-1"
        >
          Md Istiaq Ahmed
        </a>

        <div className={`hidden lg:block ${isMenuOpen ? "block" : "lg:block"}`}>
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a
                href="#projects"
                className="flex items-center sm:text-lg md:text-xl hover:text-orange hover:underline"
              >
                Projects
              </a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-navy sm:text-lg md:text-xl hover:text-orange hover:underline">
              <a href="#experience">Experience</a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-navy sm:text-lg md:text-xl hover:text-orange hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-navy sm:text-lg md:text-xl hover:text-orange hover:underline">
              <a href="#contact">Connect</a>
            </li>
          </ul>
        </div>

        <HB toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-center bg-slate-200">
          <li>
            <a href="#" className="text-navy hover:text-orange font-semibold">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-navy hover:text-orange font-semibold">
              Experience
            </a>
          </li>
          <li>
            <a href="#about" className="text-navy hover:text-orange font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-navy hover:text-orange font-semibold">
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
