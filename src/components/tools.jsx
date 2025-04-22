import React from "react";

const Tools = () => {
  const tools = [
    { src: "react", alt: "React" },
    { src: "express", alt: "Express" },
    { src: "tailwind", alt: "Tailwind CSS" },
    { src: "html", alt: "HTML" },
    { src: "javascript", alt: "JavaScript" },
    { src: "typescript", alt: "TypeScript" },
    { src: "nextjs", alt: "Next.js" },
    { src: "figma", alt: "Figma" },
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
    { src: "bootstrap", alt: "Bootstrap" },
    { src: "c", alt: "C" },
    { src: "aws", alt: "AWS" },
    { src: "postman", alt: "PostMan" },

  ];

  // Split tools into 3 rows
  const rows = [tools.slice(0, 6), tools.slice(6, 12), tools.slice(12,18), tools.slice(18, 22)];

  return (
    <div className="font-nunito justify-center items-center py-4 md:py-16 mx-5 md:mx-auto max-w-7xl">
      <h1 className="text-center font-poppins uppercase mb-10 md:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
        What I work with
      </h1>

      <div className="flex flex-col md:gap-10 gap-6 w-full">
        {/* Map through rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-2 md:gap-6"
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
                  className="w-8 h-8 sm:w-9 sm:h-19 md:w-16 md:h-16 lg:w-24 lg:h-24"
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
