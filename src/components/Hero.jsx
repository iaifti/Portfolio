import Header from "./Header";
import Istiaq from "../assets/istiaqremovebg.png";
import { HiDownload } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import resume from "../assets/Md_Istiaq_Resume.pdf";

const Hero = () => (
  <div className="font-nunito bg-gradient-to-b from-offwhite via-yellow-300/20 to-white min-h-screen flex flex-col pt-4 mb-8">
    <Header />
    <div className="flex-1 container mx-auto flex flex-col lg:flex-row items-center px-6 md:px-10 py-0 relative z-10">
      {/* Left Side */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-center text-center lg:text-left">
        <div className="mt-12 lg:mt-0">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-6xl  font-semibold text-navy">
            <span className="text-lg sm:text-xl font-signika font-thin tracking-normal">
              Meet
            </span>
            <br />
            Istiaq Ahmed
          </h2>
          <p className="hidden lg:block mt-6 font-signika text-base lg:text-lg xl:text-xl">
            <span className="block text-navy py-1">
              Former Co-Founder and Engineer at{" "}
              <span className="text-black font-poppins cursor-pointer hover:underline hover:text-red-950">
                <a
                  href="https://www.cran-us.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CRAN{" "}US
                </a>
              </span>
            </span>
            <span className="block text-navy py-1">Analytics Engineer</span>
            <span className="block text-navy py-1">Data Engineer</span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center lg:justify-center mt-8 lg:mt-0">
        <img
          src={Istiaq}
          alt="Portrait of Istiaq"
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full h-auto"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 5%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 30%)",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right Side */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-center mt-12 lg:mt-0">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ahmedmdistiaq"
              target="_blank"
              rel="noreferrer"
              className="text-2xl lg:text-3xl text-linkedin hover:scale-110 transition-transform duration-300 hover:text-blue-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/iaifti"
              target="_blank"
              rel="noreferrer"
              className="text-2xl lg:text-3xl text-github hover:scale-110 transition-transform duration-300 hover:text-gray-600"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:mdistiaqahmed0@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl lg:text-3xl text-red-800 hover:scale-110 transition-transform duration-300 hover:text-cyan-800"
            >
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="mt-6 lg:hidden text-center">
          <p className="font-overpass text-base sm:text-lg">
          {/* <span className="block text-navy py-1">
              Co-Founder at{" "}
              <span className="cursor-pointer">
                <a
                  href="https://www.cran-us.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CRAN
                </a>
              </span> */}
            {/* </span> */}
            <span className="block text-navy py-1">Analytics Engineer</span>
            <span className="block text-navy py-1">Data Engineer</span>
          </p>
        </div>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="btn animate-bounce mt-8 lg:mt-12 flex gap-2 px-5 py-3 text-base font-signika lg:text-lg font-medium text-navy border-2 border-gray-700 rounded hover:bg-orange/55 drop-shadow-xl"
        >
          <HiDownload className="text-2xl" /> Resume
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
