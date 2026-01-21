"use client";

import { useEffect } from "react";
import AOS from "aos";
import { FaExternalLinkAlt } from "react-icons/fa";

import Lazy from "../assets/Lazy.png";
import Negotiate from "../assets/Negotiation.png";
import DataAnalysis from "../assets/DataAnalysis.png";
import Cran from "../assets/Cran.png";
import Dashboard from "../assets/Dashboard.png";

const projectData = [
  {
    img: DataAnalysis,
    title: "Github Activity Pipeline",
    desc: "Built a data pipeline to analyze GitHub data using dbt for transformation and Snowflake as the data warehouse. From ELT to ETL transformation to meaningful insights.",
    tech: [
      { name: "github", color: "181717" },
      { name: "snowflake", color: "29B5E8" },
      { name: "python", color: "3776AB" },
      { name: "apacheairflow", color: "017CEE" },
    ],
    link: "https://github.com/iaifti/Github-activity-analytics-pipeline",
  },
  {
    img: Dashboard,
    title: "SaaS Payment Analytics",
    desc: "Analysis of synthetic SaaS user payment data using SQL using Snowflake and dbt. Includes data modeling, transformation, and visualization of key metrics like MRR, churn, and Cohort Retention.",
    tech: [
      { name: "git", color: "F05032" },
      { name: "github", color: "181717" },
      { name: "snowflake", color: "29B5E8" },
    ],
    link: "https://github.com/iaifti/Stripe_dbt_analysis",
  },
  {
    img: Negotiate,
    title: "Negotiation AI",
    desc: "AI-powered coaching assistant that provides real-time negotiation strategies and feedback.",
    tech: [
      { name: "nextdotjs", color: "000000" },
      { name: "tailwindcss", color: "06B6D4" },
      { name: "typescript", color: "3178C6" },
      { name: "nodedotjs", color: "339933" },
      { name: "supabase", color: "3FCF8E" },
      { name: "github", color: "181717" },
    ],
    link: "https://no-ai.vercel.app/",
  },
  {
    img: Cran,
    title: "Cran US",
    desc: "Community-focused startup delivering tailored web and software solutions for local businesses.",
    tech: [
      { name: "react", color: "61DAFB" },
      { name: "tailwindcss", color: "06B6D4" },
      { name: "javascript", color: "F7DF1E" },
      { name: "vercel", color: "000000" },
      { name: "nodedotjs", color: "339933" },
    ],
    link: "https://www.cran-us.com/",
  },
  {
    img: Lazy,
    title: "LazyProf",
    desc: "AI-powered auto-grader providing test evaluation, feedback, and secure sandbox execution.",
    tech: [
      { name: "react", color: "61DAFB" },
      { name: "express", color: "000000" },
      { name: "nodedotjs", color: "339933" },
      { name: "mongodb", color: "47A248" },
      { name: "postman", color: "FF6C37" },
      { name: "tailwindcss", color: "06B6D4" },
    ],
    link: "https://github.com/iaifti/LazyProf",
  },
];
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-cubic",
      once: false,
      offset: 20,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((proj, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="
                bg-white rounded-xl
                shadow-md hover:shadow-xl
                transition-all duration-300
                overflow-hidden
                flex flex-col
              "
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-60 object-fill"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 120 + 150}
                >
                  {proj.title}
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 120 + 250}
                >
                  {proj.desc}
                </p>

                <div
                  className="flex flex-wrap gap-3 mb-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 120 + 350}
                >
                  {proj.tech.map((tech, i) => (
                    <img
                      key={i}
                      src={`https://cdn.simpleicons.org/${tech.name}/${tech.color}`}
                      alt={tech.name}
                      className="w-7 h-7"
                    />
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={index * 120 + 450}
                  className="
                    mt-auto
                    inline-flex items-center justify-center gap-2
                    px-5 py-2.5
                    text-sm font-medium
                    rounded-lg
                    border border-yellow-100
                    bg-yellow-50
                    text-gray-800
                    hover:bg-yellow-100
                    hover:border-yellow-300
                    transition-all duration-200
                  "
                >
                  View Project
                  <FaExternalLinkAlt className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
