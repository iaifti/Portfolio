import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 lg:py-20 font-nunito bg-gradient-to-b from-white via-yellow-300/35 to-offwhite"
    >
      <h2 className="text-center font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-10 uppercase">
        About Me
      </h2>
      <p className="max-w-4xl px-10 font-signika font-light md:mx-auto text-md md:text-xl lg:text-2xl lg:leading-relaxed leading-10 text-gray-700">
        <span
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {" "}
          I am a passionate and driven{" "}
          <span className="rounded-md px-1 font-medium">Software engineer</span>
          , <span className="rounded-md px-1 font-medium">Web Developer</span>,
          and <span className="rounded-md px-1 font-medium">Co-Founder</span> at
          Cran US LLC, specializing in creating innovative solutions that
          enhance user experiences. I have a strong background in full-stack
          development, with a focus on building scalable and efficient
          applications. With Cran US LLC, I have successfully led the
          development of custom web solutions for local businesses, integrating
          agile practices and client collaboration into our workflow. My goal is
          to leverage technology to solve real-world problems and make a
          positive impact on the community.
        </span>
        <br />
        <br />

        <span
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          My expertise spans across multiple domains, including web development,
          data-driven solutions, and creating dynamic, user-friendly
          applications. Currently pursuing a Computer Science major, I
          continuously challenge myself to enhance my skills and take on new
          projects.
        </span>
        <br />
        <br />
        <span
          data-aos="fade-in"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
        >
          In my free time, I enjoy learning new frameworks, exploring full-stack
          projects, and contributing to open-source communities. With a strong
          desire to continuously improve and educate others, I'm always looking
          for opportunities to apply my skills in meaningful and challenging
          ways.
        </span>
      </p>
    </section>
  );
};

export default About;
