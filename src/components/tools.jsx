import React from "react";

const Tools = () => {
  const tools = [
    { src: "react", alt: "React" },
    { src: "express", alt: "Express" },
    { src: "tailwind", alt: "Tailwind CSS" },
    { src: "html", alt: "HTML" },
    { src: "javascript", alt: "JavaScript" },
    { src: "java", alt: "Java" },
    { src: "python", alt: "Python" },
    { src: "linux", alt: "Linux" },
    { src: "docker", alt: "Docker" },
    { src: "git", alt: "Git" },
    { src: "github", alt: "GitHub" },
    { src: "jquery", alt: "jQuery" },
    { src: "vscode", alt: "VS Code" },
    { src: "css", alt: "CSS" },
    { src: "mongodb", alt: "MongoDB" },
    { src: "nodejs", alt: "Node.js" },
    { src: "cpp", alt: "C++" },
    { src: "aws", alt: "AWS" },
    { src: "postman", alt: "PostMan" },
  ];

  // Split tools into 3 rows
  const rows = [tools.slice(0, 7), tools.slice(7, 13), tools.slice(13)];

  return (
    <div className="font-nunito justify-center items-center py-8 md:py-12 mx-5 md:mx-auto max-w-7xl">
      <h1 className="text-center font-league tracking-wide uppercase mb-12 text-2xl sm:text-3xl md:text-4xl font-bold">
        Things I use for my projects
      </h1>

      <div className="flex flex-col gap-6 w-full">
        {/* Map through rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            // Add a delay for each row to create staggered animations
          >
            {row.map((tool) => (
              <div
                key={tool.src}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-125"
                data-aos="flip-left"
                data-aos-duration="1300"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tool.src}`}
                  alt={tool.alt}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
