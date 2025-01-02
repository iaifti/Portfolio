import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Drum from "../assets/drum.png";
import Lazy from "../assets/Lazy.png";
import stat from "../assets/stat.jpg";
import doc from "../assets/Covid-19Impact.docx";
import pass from "../assets/password.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        id="projects"
        className="pb-20 md:pt-40 bg-gradient-to-b from-white via-gray-300/35 to-navy/10"
      >
        <h1
          className="text-3xl md:text-5xl font-league tracking-wide uppercase pb-14 font-bold hover:text-navy text-center text-navy"
          data-aos="fade-up"
        >
          Some of my works
        </h1>

        {/* First Row */}
        <div className="flex flex-col mx-auto md:mb-20 font-signika md:flex-row gap-10 md:gap-28 items-center justify-center mt-10">
          <div
            className="group relative w-80 h-56 md:w-1/3 md:h-80 overflow-hidden rounded-lg md:rounded-3xl shadow-2xl"
            data-aos="zoom-in"
          >
            {/* Image */}
            <img
              src={Lazy}
              alt="Card Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <h2 className="text-white text-lg md:text-xl font-signika font-bold">
                Lazy Prof
              </h2>
              <p className="text-white text-sm md:text-md mt-2 text-center px-10">
                LazyProf is a free auto-grader tool for computer science
                assignments, blending automated and manual feedback to
                streamline grading and ensure detailed responses. Key features
                include automated test case evaluation, personalized
                annotations, a secure sandbox for testing, and flexible
                on-demand testing.
              </p>
            </div>
            <p className="absolute bottom-0 left-2 p-1 bg-none opacity-100 flex gap-3">
              <img
                src="https://skillicons.dev/icons?i=react,express,nodejs,mongodb,postman,tailwind"
                className="w-40"
              />
            </p>
            <a
              href="https://github.com/iaifti/LazyProf"
              className="absolute bottom-0 right-0 p-1 bg-orange hover:bg-navy hover:text-white opacity-0 group-hover:opacity-100"
            >
              <button className="px-2 py-1">
                {" "}
                <FaExternalLinkAlt />
              </button>
            </a>
          </div>

          <div
            className="group relative w-80 h-56 md:w-1/3 md:h-80 overflow-hidden rounded-lg md:rounded-3xl shadow-2xl"
            data-aos="fade-up"
          >
            {/* Image */}
            <img
              src={stat}
              alt="Card Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-lg md:text-xl font-signika font-bold">
                Analysis of the Impact of COVID-19
              </h2>
              <p className="text-white text-sm md:text-md mt-2 text-center px-10">
                This project applied data analysis techniques, including
                hypothesis testing, correlation analysis, and visualization, to
                explore trends in COVID-19 housing and energy insecurity. It
                analyzed the relationship between eviction risk and energy bill
                nonpayment across all U.S. states over four weeks.
              </p>
            </div>
            <a
              href={doc}
              className="absolute bottom-0 right-0 p-1 bg-orange hover:bg-navy hover:text-white opacity-0 group-hover:opacity-100"
            >
              <button className="px-2 py-1">
                {" "}
                <FaExternalLinkAlt />
              </button>
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col mx-auto font-signika md:flex-row gap-10 md:gap-28 items-center justify-center mt-10">
          <div
            className="group relative w-80 h-56 md:w-1/3 md:h-80 overflow-hidden rounded-lg md:rounded-3xl shadow-2xl"
            data-aos="flip-left"
          >
            {/* Image */}
            <img
              src={Drum}
              alt="Card Image"
              className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-125"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <h2 className="text-white text-lg md:text-xl font-signika font-bold">
                Drum Kit
              </h2>
              <p className="text-white text-sm md:text-md mt-2 text-center px-10">
                Each sound can be activated by clicks or keypresses, allowing
                users to experiment with rhythms and create custom beats. This
                project showcases my JavaScript skills in sound integration and
                event handling, bringing a creative, hands-on musical experience
                to the web.
              </p>
            </div>
            <p className="absolute bottom-0 left-2 p-1 bg-none opacity-100 flex gap-3">
              <img
                src="https://skillicons.dev/icons?i=html,css,javascript,vercel"
                className="w-24"
              />
            </p>
            <a
              href="https://gocrazydrumkit.vercel.app/"
              className="absolute bottom-0 right-0 p-1 bg-orange hover:bg-navy hover:text-white opacity-0 group-hover:opacity-100"
            >
              <button className="px-2 py-1">
                {" "}
                <FaExternalLinkAlt />
              </button>
            </a>
          </div>

          <div
            className="group relative w-80 h-56 md:w-1/3 md:h-80 overflow-hidden rounded-lg md:rounded-3xl shadow-2xl"
            data-aos="flip-left"
          >
            {/* Image */}
            <img
              src={pass}
              alt="Card Image"
              className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-125"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-lg md:text-xl font-signika font-bold">
                Password Generator
              </h2>
              <p className="text-white text-sm md:text-md mt-2 text-center px-10">
                A password generator creates secure, random passwords by
                combining uppercase and lowercase letters, numbers, and special
                characters. It allows customization of length and character
                types for enhanced security.
              </p>
            </div>
            <p className="absolute bottom-0 left-2 p-1 bg-none opacity-100 flex gap-3">
              <img
                src="https://skillicons.dev/icons?i=html,css,javascript,vercel"
                className="w-24"
              />
            </p>
            <div className="absolute bottom-0 right-0 p-1 bg-orange hover:bg-navy hover:text-white opacity-0 group-hover:opacity-100">
              <a
                href="https://basicpasswordgen.vercel.app/"
                className="absolute bottom-0 right-0 p-1 bg-orange hover:bg-navy hover:text-white opacity-0 group-hover:opacity-100"
              >
                <button className="px-2 py-1">
                  {" "}
                  <FaExternalLinkAlt />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
