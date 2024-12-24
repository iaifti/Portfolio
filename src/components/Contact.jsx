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
      <div className="max-w-md mx-auto font-overpass bg-offwhite p-6 rounded-lg shadow-md mt-10 md:mt-20 sm:p-10">
        <h1 className="font-signika md:text-xl mb-5">Thank you for visiting!</h1>
        <form action="/submit" method="POST" className="space-y-4">
          <div>
            <label for="name" className="block text-sm font-medium text-navy">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border-b-[1px] bg-orange bg-opacity-5 border-orange rounded-md shadow-sm focus:ring-orange focus:border-orange sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="email" className="block text-sm font-medium text-navy">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full bg-orange bg-opacity-5 border-b-[1px] border-orange rounded-md shadow-sm focus:ring-orange focus:border-orange sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              for="message"
              className="block text-sm font-medium text-navy"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full bg-orange bg-opacity-5 border-b-[1px] border-orange rounded-md shadow-sm focus:ring-orange focus:border-orange sm:text-sm"
              ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-1/3 bg-orange text-navy py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
