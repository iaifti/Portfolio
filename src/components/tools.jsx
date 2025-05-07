import React from "react";

const tools = [
  { name: "React", icon: "react" },
  { name: "Express", icon: "express" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "HTML", icon: "html5" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Figma", icon: "figma" },
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "Linux", icon: "linux" },
  { name: "C", icon: "c" },
  { name: "C++", icon: "cplusplus" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "jQuery", icon: "jquery" },
  { name: "VS Code", icon: "visualstudiocode" },
  { name: "Supabase", icon: "supabase" },
  { name: "Clerk", icon: "clerk" },
  { name: "drizzle", icon: "drizzle" },
  { name: "CSS", icon: "css3" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "AWS", icon: "amazonaws" },
  { name: "Vercel", icon: "vercel" },
  { name: "Postman", icon: "postman" },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-white font-nunito">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-2xl md:text-4xl font-overpass font-bold text-navy mb-16">
          What I Work With
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {tools.map((tool, index) => (
            <div
              key={tool.icon}
              className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="bg-gray-100 p-4 rounded-2xl shadow-md transition hover:drop-shadow-[0_5px_10px_rgba(250,204,21,0.7)]">
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tool.icon}.svg`}
                  alt={tool.name}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                  style={{ filter: "invert(0%)", color: "inherit" }}
                />
              </div>
              <p className="text-sm font-medium font-signika text-gray-600 text-center">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
