"use client";
import React from "react";
import Lazy from "../assets/Lazy.png";
import Negotiate from "../assets/Negotiation.png";
import ComingSoon from "../assets/comingsoon.jpg";
import Cran from "../assets/Cran.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [

  {
    img: ComingSoon,
    title: "Inscript AI",
    desc: "InscriptAI is a web-based platform that generates content for various social media platforms using AI, allowing users to create posts, captions, and hashtags effortlessly just by entering a topic.",
    tech: ["nextjs", "tailwindcss","typescript", "nodejs", "postgresql", "github"],
    link: "https://inscriptai.vercel.app/",

  },
  {
    img: Negotiate,
    title: "Negotiation AI",
    desc: "Negotiation AI is an intelligent coaching assistant that guides users through real-time negotiation scenarios with personalized strategies and feedback.",
    tech: [
      "nextjs",
      "tailwindcss",
      "typescript",
      "nodejs",
      "supabase",
      "github",
    ],
    link: "https://no-ai.vercel.app/",
  },
  {
    img: Cran,
    title: "Cran US",
    desc: "Cran US is a community-focused startup delivering tailored web and software development solutions to empower local businesses with modern digital tools.",
    tech: ["react", "tailwindcss", "javascript", "vercel", "nodejs"],
    link: "https://www.cran-us.com/",
  },
  {
    img: Lazy,
    title: "LazyProf",
    desc: "An AI-powered auto-grader for CS assignments, offering test case evaluation, personalized feedback, and secure sandbox execution.",
    tech: ["react", "express", "nodejs", "mongodb", "postman", "tailwind"],
    link: "https://github.com/iaifti/LazyProf",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-16 lg:px-32">
      <h2 className="text-center font-overpass text-2xl md:text-4xl font-bold text-navy mb-16">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {projectData.map((proj, index) => (
          <div
            key={index}
            className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden drop-shadow-2xl hover:drop-shadow-3xl transition duration-300 ease-in-out"
            data-aos="flip-left"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
          >
            <img
              src={proj.img}
              alt={`${proj.title} preview`}
              className="w-full h-56 object-fit lg:object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {proj.tech.map((tech, i) => (
                  <img
                    key={i}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={`${tech} icon`}
                    className="w-7 h-7"
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 bg-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-offwhite transition"
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
