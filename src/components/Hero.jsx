import React from "react";
import Header from "./Header";
import Istiaq from "../assets/istiaqremovebg.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import resume from "../assets/_Resume.pdf";

const Hero = () => (
  <div className="font-nunito bg-gradient-to-b from-offwhite via-yellow-300/35 to-white md:min-h-screen flex flex-col pt-4 mb-*">
    <Header />
    <div className="flex-1 container mx-auto flex flex-col md:flex-row items-center px-10 pt-10 md:py-0 relative z-10">
      <div className="flex flex-row">
        {/* Left Side */}
        <div className="mt-20 flex md:pl-4 items-center">
          <h2 className="font-league text-4xl md:text-7xl font-semibold tracking-widest text-navy">
            <span className=" text-lg md:text-xl font-signika font-thin tracking-normal">
              Meet
            </span>{" "}
            <br />
            Istiaq Ahmed
          </h2>
        </div>

        {/* Image Section */}
        <div className="md:mt-0 md:w-1/2 flex justify-center md:justify-center z-0">
          <img
            src={Istiaq}
            alt="Portrait of Istiaq"
            className="w-3/4 md:w-4/5 h-auto"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 5%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 30%)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 flex flex-col gap-6 items-center mt-64 md:pl-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-6">
              <a
                href="https://www.linkedin.com/in/ahmedmdistiaq"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-3xl text-linkedin hover:scale-125 transition-transform duration-300 hover:text-blue-500"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/iaifti"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-3xl text-github hover:scale-125 transition-transform duration-300 hover:text-gray-600"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-3xl text-gray-400 hover:scale-125 transition-transform duration-300 hover:text-gray-600"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <p className="hidden font-manrope font-bold md:text-sm lg:text-lg md:flex flex-col">
            <span className="text-navy p-1 ">Software Engineer</span>
            <span className="text-navy p-1 ">FullStack Developer</span>
            <span className="text-navy p-1 ">DevOps Engineer</span>
          </p>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden mt-20">
        <a
          href="https://www.linkedin.com/in/ahmedmdistiaq/"
          target="_blank"
          rel="noreferrer"
          className="btn animate-bounce inline-block px-4 py-2 text-sm md:text-lg font-medium text-navy border-2 border-gray-600 rounded md:px-6 md:py-3 hover:bg-orange/55 shadow-2xl"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
