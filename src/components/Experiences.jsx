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
      className="py-24 bg-gradient-to-b from-white via-yellow-300/35 to-white  relative font-signika"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-4xl md:text-6xl font-poppins font-bold text-navy mb-20 tracking-tight">
          Professional Experience
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 via-orange-300 to-yellow-400 z-0 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-32">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  data-aos-duration="700"
                  className={`relative z-10 ${
                    isLeft
                      ? "md:col-start-1 pr-8 md:pr-20"
                      : "md:col-start-2 pl-8 md:pl-20"
                  } ${index % 2 !== 0 ? "mt-20 md:mt-32" : ""}`}
                >
                  <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all hover:scale-[1.015]">
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-gray-700 mb-3">
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
