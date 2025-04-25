import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-white via-yellow-300/20 to-offwhite font-nunito"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-poppins font-bold uppercase text-navy mb-12">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left - Short Summary block */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-left lg:sticky top-24 hidden lg:block"
          >
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-md p-8">
              <p className="text-lg font-signika text-gray-700 leading-relaxed">
                👋 Hey! I’m <span className="font-bold">Istiaq Ahmed</span>, a{" "}
                <span className="font-bold text-yellow-600">
                  full-stack developer
                </span>{" "}
                and <span className="font-bold text-yellow-600">co-founder</span> of{" "}
                <a
                  href="https://www.cran-us.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy font-bold underline hover:text-red-600"
                >
                  Cran US LLC
                </a>
                . I build tailored digital solutions for modern web platforms.
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
              Focused on building <span className="font-semibold text-navy">user-centered applications</span> using
              modern web technologies. As a <span className="font-semibold text-navy">software engineer</span> and{" "}
              <span className="font-semibold text-navy">co-founder</span> of Cran US LLC, I’ve led the
              development of custom solutions — from <span className="font-medium">backend infrastructure</span> to{" "}
              <span className="font-medium">frontend design</span>.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
            >
              Skilled in <span className="font-semibold">full-stack development</span>,{" "}
              <span className="font-semibold">data-driven systems</span>, and delivering
              seamless user experiences. I collaborate using{" "}
              <span className="">agile methodologies</span> to ship
              scalable, production-ready software.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Currently pursuing a <span className="font-medium">Computer Science degree</span> while contributing to
              <span className="font-medium"> open-source</span>, building side projects, and working in
              collaborative development environments.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-easing="ease-in-out"
            >
              Outside of engineering, I enjoy mentoring peers, exploring new tech
              stacks, and turning ideas into real products — typically with{" "}
              <span className="font-semibold">coffee in hand ☕</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
