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
                👋 Hi! I’m <span className="font-bold">Istiaq Ahmed</span>, a{" "}
                <span className="font-bold text-yellow-600">
                  software developer
                </span>
                ,{" "}
                <span className="font-bold text-yellow-600">
                  generative AI developer
                </span>
                , and{" "}
                <span className="font-bold text-yellow-600">co-founder</span> of{" "}
                <a
                  href="https://www.cran-us.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy font-bold underline hover:text-red-600"
                >
                  Cran US LLC
                </a>
                . I build tailored digital solutions for modern web and AI platforms.
              </p>
            </div>
          </div>

          {/* Right - Main content */}
          <div className="text-gray-800 text-md md:text-lg lg:text-xl space-y-8 font-signika leading-relaxed">
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              Focused on creating{" "}
              <span className="font-semibold text-navy">
                user-centered applications
              </span>{" "}
              using modern web and AI technologies, I’ve led the development of custom
              solutions spanning{" "}
              <span className="font-medium">backend infrastructure</span> and{" "}
              <span className="font-medium">frontend design</span> through my
              work at{" "}
              <span className="text-navy">Cran US LLC</span>.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              I specialize in{" "}
              <span className="font-semibold">full-stack development</span>,{" "}
              <span className="font-semibold">generative AI applications</span>,{" "}
              and crafting seamless user experiences. I work within{" "}
              <span className="font-medium">agile teams</span> to deliver
              scalable, production-ready software.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              While pursuing{" "}
              <span className="font-semibold">Bachelor's</span> in Computer Science at Southeast Missouri State University, I
              contribute to <span className="font-medium">open-source</span>,
              build side projects, and enjoy collaborating in fast-paced
              development environments.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              I’m always exploring new ways to solve real-world problems with
              technology.
              <span className="font-semibold text-navy">
                {" "}
                Connect with me{" "}
              </span>
              — whether you’re building something exciting or just want to chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
