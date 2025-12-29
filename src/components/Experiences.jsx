import React from "react";

const experiences = [
  {
    title: "Cran US LLC",
    role: "Software Engineer & Co-Founder",
    bullets: [
      "Co-founded SaaS startup serving paying customers; owned full development lifecycle from requirements gathering to production deployment and post-launch iteration.",
      "Partnered directly with early customers to understand business problems and prioritize feature development, requiring rapid translation of qualitative feedback into technical solutions.",
      "Built data infrastructure supporting operational reporting, enabling visibility into user behavior and feature adoption for early customers.",
    ],
  },
  {
    title: "SEMO Recreation Center",
    role: "Data Entry Assistant",
    bullets: [
      "Managed patron records in CRM system, ensuring data quality and consistency; created Excel-based tracking tools for scheduling coordination and workflow optimization.",
      "Contributed to workflow improvements and assisted users with clear communication and problem-solving support.",
    ],
  },
  {
    title: "SEMO Tutorial Program",
    role: "Computer Science Tutor",
    bullets: [
      "Tutored Python, Java, and Unix/Linux fundamentals in 1:1 and small group settings, developing skills in explaining technical concepts to non-technical audiences.",
      "Helped students debug logic errors and strengthen problem-solving approaches, building experience in translating abstract problems into structured solutions.",
    ],
  },
  {
    title: "SEMO Dining Services",
    role: "Supervisor",
    bullets: [
      "Managed daily operations across 15-person team, coordinating shift scheduling, food production workflows, and inventory tracking to maintain service quality during high-volume periods.",
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
