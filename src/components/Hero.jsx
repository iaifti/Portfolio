import React from "react";
import Header from "./Header";
import RoleList from "./roleList";
import ContactButton from "./contactButton";
import Istiaq from "../assets/istiaqremovebg.png";

const Hero = () => (
  <div className="font-nunito bg-gradient-to-br from-orange via-offwhite to-white min-h-screen flex flex-col pt-4">
    <Header />
    <div className="flex-1 container mx-auto flex flex-col md:flex-row items-center px-10 pt-10 md:py-0 relative z-10">
      <div className="flex flex-row">
        <div className="mt-20 flex md:pl-20">
          <h2 className="font-charm text-4xl md:text-7xl font-extrabold text-navy">
            I am Istiaq Ahmed!
          </h2>
        </div>
        <div className="md:mr-36 md:mt-0 md:w-1/2 flex justify-center md:justify-end z-0">
          <img
            src={Istiaq}
            alt="Portrait of Istiaq Ahmed in a professional setting"
            className="w-2/3 md:w-screen h-auto masked-image"
          />
        </div>
      </div>
      <RoleList
        roles={["Software engineer", "Web Developer", "Digital Marketing"]}
      />
      <div className="md:hidden mt-8 mb-0">
        <ContactButton />
      </div>
    </div>
  </div>
);

export default Hero;
