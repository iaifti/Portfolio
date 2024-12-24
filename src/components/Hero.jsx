import React from "react";
import Header from "./Header";
import Istiaq from "../assets/istiaq.jpg";

const Hero = () => (
  <div className="font-nunito bg-gradient-to-tr from-orange via-offwhite to-white min-h-screen flex flex-col pt-4">
    <Header />
    <div className="flex-1 container mx-auto flex flex-col-reverse items-center px-6 py-12 md:flex-row md:justify-between md:py-24">
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img src={Istiaq} alt="Portrait of Istiaq" className="w-3/4 md:w-2/3 h-auto rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-medium uppercase text-navy">
          Into the Coding Realm.
        </h2>
        <p className="mt-4 md:text-md lg:text-xl">
          Hi, I am Istiaq. I am a <span className="bg-navy text-offwhite p-1 rounded-lg">Software engineer</span>. I have a passion for coding and I love to solve problems.
        </p>
        <div className="mt-8">
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
  </div>
);

export default Hero;
