"use client";

import React from "react";
import { motion } from "framer-motion";

// Data Engineering–focused tools
const dataEngineeringTools = [
  // Programming & Query Languages
  { name: "SQL", icon: "mysql" },
  { name: "Python", icon: "python" },
  { name: "pandas", icon: "pandas" },
  { name: "Bash", icon: "gnubash" },

  // Data Processing & Streaming
  { name: "Apache Spark", icon: "apachespark" },
  { name: "Hadoop", icon: "apachehadoop" },
  { name: "Kafka", icon: "apachekafka" },
  { name: "Airflow", icon: "apacheairflow" },
  { name: "dbt", icon: "dbt" },
  { name: "Power BI", icon: "powerbi" },

  // Cloud Platforms
  { name: "AWS", icon: "amazonaws" },
  { name: "Azure", icon: "microsoftazure" },
  { name: "Google Cloud", icon: "googlecloud" },

  // Data Warehouses & Lakehouse
  { name: "Snowflake", icon: "snowflake" },
  { name: "Databricks", icon: "databricks" },
  { name: "Redshift", icon: "amazonredshift" },
];

// Version Control and Database tools
const versionControlAndDatabaseTools = [
  { name: "Excel", icon: "microsoftexcel" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

// Software Engineering–focused tools
const softwareEngineeringTools = [
  { name: "React", icon: "react" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Figma", icon: "figma" },
  { name: "Linux", icon: "linux" },
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "Supabase", icon: "supabase" },
  { name: "Clerk", icon: "clerk" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Vercel", icon: "vercel" },
  { name: "Postman", icon: "postman" },
];

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-24 bg-white font-nunito"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Data Engineering Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-overpass">
            Data Engineering Toolkit
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Technologies and platforms I use to design scalable pipelines,
            process large datasets, and deliver reliable analytics systems.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {dataEngineeringTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.4, delay: index * 0.04 }}
              // viewport={{ once: true }}
              className="group flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="
                bg-gray-100 p-5 rounded-2xl shadow-sm
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                group-hover:shadow-yellow-400/60
              
                "
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg`}
                  alt={tool.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="text-sm text-gray-700 font-medium text-center group-hover:text-navy transition">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Version Control and Database Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-overpass">
            Version Control & Database Tools
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tools that are essential for both data engineering and software development workflows.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {versionControlAndDatabaseTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.4, delay: index * 0.04 }}
              // viewport={{ once: true }}
              className="group flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="
                  bg-gray-100 p-5 rounded-2xl shadow-sm
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                 group-hover:shadow-yellow-400/60
                "
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg`}
                  alt={tool.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="text-sm text-gray-700 font-medium text-center group-hover:text-navy transition">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Software Engineering Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-overpass">
            Software Engineering Toolkit
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use for software development, including web
            development and programming languages
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {softwareEngineeringTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.4, delay: index * 0.04 }}
              // viewport={{ once: true }}
              className="group flex flex-col items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className="
                  bg-gray-100 p-5 rounded-2xl shadow-sm
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-lg
                  group-hover:shadow-yellow-400/60
                "
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg`}
                  alt={tool.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <p className="text-sm text-gray-700 font-medium text-center group-hover:text-navy transition">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
