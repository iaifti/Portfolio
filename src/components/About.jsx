import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-yellow-300/20 to-offwhite font-nunito"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-3xl md:text-4xl font-overpass font-bold text-navy mb-12">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Short Summary block */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-left lg:sticky top-24 hidden lg:block"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-8">
              <p className="text-lg font-signika text-gray-700 leading-relaxed">
                👋 Hi! I’m <span className="font-bold">Istiaq Ahmed</span>, an{" "}
                <span className="font-bold text-yellow-600">
                  Analytic Engineer
                </span>
                ,{" "}
                <span className="font-bold text-yellow-600">Data Analyst</span>,
                and{" "}
                <span className="font-bold text-yellow-600">Former Co-Founder</span>{" "}
                at Cran US LLC . I build data infrastructure that turns raw business data into reliable metrics, designing dimensional models, defining consistent logic, and enabling teams to make confident decisions.
            </div>
          </div>

          {/* Right - Main content */}
          <div className="text-gray-800 text-md md:text-lg lg:text-xl space-y-8 font-signika leading-relaxed">
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              I focus on turning{" "}
              <span className="font-semibold text-navy">
                messy product and business data
              </span>{" "}
              into clear, actionable insights. Through my work at{" "}
              <span className="text-navy">Cran US LLC</span>, I’ve owned
              data-driven problem solving end-to-end—from understanding real
              customer questions to designing reliable analytics solutions.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              My experience spans{" "}
              <span className="font-semibold">analytics engineering</span> and{" "}
              <span className="font-semibold">applied analytics</span>,
              including building dimensional data models, writing{" "}
              <span className="font-medium">SQL</span>, and enabling reporting
              for key SaaS metrics like{" "}
              <span className="font-medium">
                MRR, churn, and cohort retention
              </span>
              .
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              While pursuing a{" "}
              <span className="font-semibold">
                Bachelor’s in Computer Science
              </span>{" "}
              at Southeast Missouri State University, I build analytics-focused
              projects, work with modern data tools, and collaborate in
              fast-paced environments where{" "}
              <span className="font-medium">
                clarity, scalability, and data accuracy
              </span>{" "}
              matter.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              I’m driven by using data to explain what’s happening, why it
              matters, and what to do next.
              <span className="font-semibold text-navy"> Connect with me </span>
              — whether you’re building something data-driven or just want to
              chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
