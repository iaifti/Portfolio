import React from "react";

const experiences = [
  {
    title: "Cran US LLC",
    role: "Software Engineer & Co-Founder",
    bullets: [
      "Engineered scalable RESTful APIs with Node.js, Express, Clerk authentication, and database integration.",
      "Utilized Postman for API testing, ensuring seamless frontend-backend communication.",
      "Contributed to responsive frontend development with Next.js and Tailwind CSS.",
    ],
  },
  {
    title: "SEMO Recreation Center",
    role: "Office Assistant",
    bullets: [
      "Streamlined workflows and improved operational efficiency through systems thinking.",
      "Enhanced user support by communicating technical solutions clearly.",
    ],
  },
  {
    title: "SEMO Tutorial Program",
    role: "Computer Science Tutor",
    bullets: [
      "Tutored Python, Java, Unix/Linux, advanced math, and statistics.",
      "Simplified complex computing concepts to strengthen student understanding.",
    ],
  },
  {
    title: "SEMO Dining Services",
    role: "Supervisor",
    bullets: [
      "Managed a 15-member team to boost operational performance and service flow.",
      "Reduced service delays and optimized inventory and scheduling systems.",
    ],
  },
];

const Experiences = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white via-yellow-300/20 to-offwhite relative font-signika"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-2xl md:text-4xl font-overpass font-bold text-navy mb-20 tracking-tight">
          Professional Experience
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-navy/70 z-0 rounded-full"></div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-y-32">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 80}
                  data-aos-duration="700"
                  className={`relative z-10 w-full ${
                    isLeft
                      ? "md:col-start-1 md:pr-20"
                      : "md:col-start-2 md:pl-20"
                  } ${!isLeft ? "md:mt-32" : ""} flex justify-center md:block`}
                >
                  <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all hover:scale-[1.015] w-full max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-yellow-600 mb-3">
                      {exp.role}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-600">
                      {exp.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
