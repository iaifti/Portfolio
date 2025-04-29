import React from "react";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="font-nunito py-20 px-4 sm:px-8 bg-offWhite text-center"
    >
      {/* Title */}
      <h2
        className="text-2xl sm:text-4xl font-poppins font-bold mb-12 text-navy"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        Let’s Connect
      </h2>

      {/* Social Links */}
      <div
        className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 text-4xl sm:text-5xl"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <a
          href="https://www.youtube.com/@iFish0315"
          target="_blank"
          rel="noreferrer"
          className="text-[#FF0000] hover:scale-125 transition-transform duration-300"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedmdistiaq"
          target="_blank"
          rel="noreferrer"
          className="text-[#0077B5] hover:scale-125 transition-transform duration-300"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/iaifti"
          target="_blank"
          rel="noreferrer"
          className="text-[#333] hover:scale-125 transition-transform duration-300"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/iftii._/"
          target="_blank"
          rel="noreferrer"
          className="text-[#E1306C] hover:scale-125 transition-transform duration-300"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:mdistiaqahmed0@gmail.com"
          className="text-[#D14836] hover:scale-125 transition-transform duration-300"
          aria-label="Email"
        >
          <SiGmail />
        </a>
      </div>

      {/* Message Box */}
      <div
        className="mt-16 bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="font-caveat text-2xl sm:text-3xl font-bold text-navy mb-4">
          Thanks for visiting!
        </h3>
        <p className="font-overpass text-md sm:text-lg text-gray-700">
          I’m currently open to opportunities including:
        </p>

        {/* Opportunity Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Full-time", "Internship", "Fellowship"].map((type, idx) => (
            <span
              key={idx}
              className="text-sm sm:text-md px-4 py-1 rounded-full border border-yellow-500 text-navy font-signika hover:bg-yellow-400/20 transition"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
