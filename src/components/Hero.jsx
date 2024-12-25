import React from "react";
import Header from "./Header";
import Istiaq from "../assets/istiaqremovebg.png";

const Hero = () => (
  <div className="font-nunito bg-gradient-to-br from-orange via-offwhite to-white min-h-screen flex flex-col pt-4">
    <Header />
    <div className="flex-1 container mx-auto flex flex-col md:flex-row items-center px-10 pt-10 md:py-0 relative z-10">
      <div className="flex flex-row">
        <div className="mt-20 flex md:pl-20 items-center">
          <h2 className="font-charm text-4xl md:text-7xl font-extrabold text-navy">
            I am Istiaq Ahmed!
          </h2>
        </div>

        <div className=" md:mr-36 md:mt-0 md:w-1/2 flex justify-center md:justify-end z-0">
          <img
            src={Istiaq}
            alt="Portrait of Istiaq"
            className="w-2/3 md:w-screen h-auto"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 15%)",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="hidden md:w-1/3 md:flex flex-col items-start md:pr-10 mt-4 md:pt-60 ">
        <p className="font-overpass md:text-sm lg:text-lg flex flex-col gap-1">
          <span className="bg-navy text-offwhite p-1 rounded-sm">
            Software engineer
          </span>
          <span className="bg-navy text-offwhite p-1 rounded-sm">
            Web Developer
          </span>
          <span className="bg-navy text-offwhite p-1 rounded-sm">
            Digital Marketing
          </span>
        </p>
      </div>

      <div className="md:hidden mt-8 mb-0">
        <a
          href="https://www.linkedin.com/in/ahmedmdistiaq/"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 text-sm md:text-lg font-medium text-navy border-2 border-gray-600 rounded md:px-6 md:py-3 hover:bg-orange shadow-2xl"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
