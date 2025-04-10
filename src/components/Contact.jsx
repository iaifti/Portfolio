import React, { useEffect } from "react";
import { SiGmail } from 'react-icons/si';

const Contact = () => {

  return (
    <div
      id="contact"
      className="font-nunito py-10 lg:py-20 bg-navy bg-opacity-15 text-center px-4 sm:px-8"
    >
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold mb-10 hover:text-orange"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Feel free to connect with me
      </h2>
      <div
        className="flex flex-wrap justify-center space-x-2 sm:space-x-6 lg:space-x-8 gap-y-6"
        data-aos="fade-right"
        data-aos-duration="1900"
      >
        <a
          href="https://www.youtube.com/@iFish0315"
          target="_blank"
          rel="noreferrer"
          className="text-3xl sm:text-5xl text-youtube hover:scale-125 transition-transform duration-300"
          data-aos="flip-left"
          data-aos-duration="1600"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedmdistiaq"
          target="_blank"
          rel="noreferrer"
          className="text-3xl sm:text-5xl text-linkedin hover:scale-125 transition-transform duration-300 hover:text-blue-500"
          data-aos="flip-left"
          data-aos-duration="1300"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/iaifti"
          target="_blank"
          rel="noreferrer"
          className="text-3xl sm:text-5xl text-github hover:scale-125 transition-transform duration-300 hover:text-gray-600"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/iftii._/"
          target="_blank"
          rel="noreferrer"
          className="text-3xl sm:text-5xl text-instagram hover:scale-125 transition-transform duration-300 hover:text-pink-400"
          data-aos="flip-left"
          data-aos-duration="800"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:mdistiaqahmed0@gmail.com"
          className="text-3xl sm:text-5xl text-green-900 hover:scale-125 transition-transform duration-300 hover:text-black"
          data-aos="flip-left"
          data-aos-duration="500"
        >
          <SiGmail />
        </a>
      </div>
      <div className="max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto font-overpass bg-offwhite p-6 sm:p-8 md:p-10 rounded-lg shadow-md mt-10 md:mt-20">
        <h1 className="font-caveat font-extrabold text-xl md:text-2xl lg:text-3xl mb-5">
          Thank you for visiting!
        </h1>
        <div className="mt-10">
          <h4 className="font-overpass font-medium text-md sm:text-lg py-5">
            I am open to
          </h4>
          <p className="flex flex-wrap justify-center gap-2">
            <span className="font-signika text-sm sm:text-md px-2 py-1 border border-orange rounded-xl">
              Full-time
            </span>
            <span className="font-signika text-sm sm:text-md px-2 py-1 border border-orange rounded-xl">
              Internship
            </span>
            <span className="font-signika text-sm sm:text-md px-2 py-1 border border-orange rounded-xl">
              Fellowship
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
