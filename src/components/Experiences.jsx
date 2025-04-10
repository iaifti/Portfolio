import React from "react";
import { FaUsers, FaCode, FaUtensils, FaLaptopCode } from "react-icons/fa";

const Experiences = () => {
  return (
    <div
      id="experience"
      className="bg-white font-signika pt-10 md:pt-20 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-poppins uppercase pb-5 md:pb-10 font-bold text-center mb-12">
          Professional Experiences
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 lg:gap-8">
          <div
            className="grid grid-row-1 p-4 lg:grid-row-3 gap-6 lg:gap-8 items-center border-2 border-yellow-300 backdrop-blur-sm rounded-lg shadow-sm transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:rotate-[0.3deg]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="flex items-center gap-4">
              <FaLaptopCode className="text-xl sm:text-2xl text-6" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">Cran US LLC</div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Software Engineer & Co-Founder
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>
                  Led Full-Cycle Development of Custom Web Solutions for Local
                  Businesses
                </li>
                <li>
                  Integrated Agile Development Practices & Client Collaboration
                  into Project Workflow
                </li>
                <li>
                  Built and Scaled a Community-Focused Tech Startup from the
                  Ground Up
                </li>
              </ul>
            </div>
          </div>

          {/* Row 1 */}
          <div
            className="grid grid-row-1 p-4 lg:grid-row-3 gap-6 lg:gap-8 items-center border-2 border-yellow-300 backdrop-blur-sm rounded-lg shadow-sm transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:rotate-[0.3deg]"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div className="flex items-center gap-4">
              <FaUsers className="text-xl sm:text-2xl text-6" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                SEMO Recreation Center
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Office Assistant
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>
                  First point of contact for visitors, boosting satisfaction
                  through proactive communication.
                </li>
                <li>Enhanced customer service, improving guest experience.</li>
                <li>
                  Streamlined facility operations and increased efficiency.
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="grid grid-row-1 p-4 lg:grid-row-3 gap-6 lg:gap-8 items-center border-2 border-yellow-300 backdrop-blur-sm rounded-lg shadow-sm transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:rotate-[0.3deg]"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
          >
            <div className="flex items-center gap-4">
              <FaCode className="text-xl sm:text-2xl text-6" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                SEMO Tutorial Program
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Computer Science Tutor
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>Supported students with basic Python and Java.</li>
                <li>Improved Unix and Linux skills.</li>
                <li>
                  Simplified advanced math and statistics concepts for better
                  understanding.
                </li>
              </ul>
            </div>
          </div>
          {/* Row 3 */}
          <div
            className="grid grid-row-1 p-4 lg:grid-row-3 gap-6 lg:gap-8 items-center border-2 border-yellow-300 backdrop-blur-sm rounded-lg shadow-sm transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:rotate-[0.3deg]"
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
          >
            <div className="flex items-center gap-4">
              <FaUtensils className="text-xl sm:text-2xl text-6" />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                SEMO Dining Services
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Supervisor
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>
                  Managed a team of 15 employees, improving operational
                  efficiency
                </li>
                <li>Reduced service delay enhancing guest satisfaction.</li>
                <li>
                  Streamlined inventory management and scheduling with software
                  tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
