import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  return (
    <div
      id="contact"
      className="font-nunito py-20 bg-navy bg-opacity-20 text-center"
    >
      <h2
        className="text-3xl font-bold mb-10 hover:text-orange"
        data-aos="zoom-in"
      >
        Contact Me
      </h2>
      <div className="flex justify-center space-x-10" data-aos="fade-right">
        <a
          href="https://www.youtube.com/@iFish0315"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-youtube hover:scale-125 transition-transform duration-300"
          data-aos="flip-left"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedmdistiaq"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-linkedin hover:scale-125 transition-transform duration-300 hover:text-blue-500"
          data-aos="flip-left"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/iaifti"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-github hover:scale-125 transition-transform duration-300 hover:text-gray-600"
          data-aos="flip-left"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/iftii._/"
          target="_blank"
          rel="noreferrer"
          className="text-5xl text-instagram hover:scale-125 transition-transform duration-300 hover:text-pink-400"
          data-aos="flip-left"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:mdistiaqahmed0@gmail.com"
          className="text-5xl text-gmail hover:scale-125 transition-transform duration-300 hover:text-green-500"
          data-aos="flip-left"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
