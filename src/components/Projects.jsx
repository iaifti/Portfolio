import React from "react";
import Drum from "../assets/drum.png";
import Lazy from "../assets/Lazy.png";
import pass from "../assets/password.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      img: Lazy,
      title: "Lazy Prof",
      desc: "LazyProf is a free auto-grader tool for computer science assignments with automated test cases, personalized feedback, and secure sandbox testing.",
      tech: "https://skillicons.dev/icons?i=react,express,nodejs,mongodb,postman,tailwind",
      link: "https://github.com/iaifti/LazyProf",
    },
    {
      img: Drum,
      title: "Drum Kit",
      desc: "A fun interactive drum kit that responds to both clicks and keyboard events, showcasing JavaScript sound integration and event handling.",
      tech: "https://skillicons.dev/icons?i=html,css,javascript,vercel,figma,jndn",
      link: "https://gocrazydrumkit.vercel.app/",
    },
    {
      img: pass,
      title: "Password Generator",
      desc: "Generates secure, random passwords with options for length and character types for enhanced online safety.",
      tech: "https://skillicons.dev/icons?i=html,css,javascript,vercel,figma,jndn",
      link: "https://basicpasswordgen.vercel.app/",
    },
  ];

  return (
    <div id="projects" className="py-16 lg:pb-32 md:pt-40 bg-white to-navy/20">
      <h1 className="text-3xl md:text-6xl font-poppins uppercase pb-10 md:pb-20 font-bold hover:text-navy text-center text-navy">
        Work Studio
      </h1>

      <div className="flex flex-wrap justify-center gap-16">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Tech Stack Above */}
            <img src={proj.tech} className="w-44" />

            {/* Card */}
            <div
              className="relative group w-[320px] h-[240px] md:w-[400px] md:h-[300px] overflow-hidden rounded-3xl shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={proj.img}
                alt="project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 text-center">
                <h2 className="text-white text-xl font-bold mb-2">
                  {proj.title}
                </h2>
                <p className="text-white text-sm mb-4">{proj.desc}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange text-white px-4 py-2 rounded hover:bg-navy transition"
                >
                  Learn More <FaExternalLinkAlt className="inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
