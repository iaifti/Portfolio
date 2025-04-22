import React from "react";
import { FaUsers, FaCode, FaUtensils, FaLaptopCode } from "react-icons/fa";

const Experiences = () => {
  return (
    <div id="experience" className="bg-white font-signika pt-10 md:pt-20 pb-16">
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
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                Cran US LLC
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Software Engineer & Co-Founder
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>
                  Engineered robust RESTful APIs with Node.js and Express,
                  integration for scalable data storage and Clerk for secure
                  authentication.
                </li>
                <li>
                  Utilized Postman for thorough API testing and debugging,
                  ensuring seamless integration across frontend and backend
                  components.
                </li>
                <li>
                  Contributed to frontend development with Nextjs and Tailwind
                  CSS, enhancing user experience through responsive design and
                  smooth API connectivity.
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
                  Streamlined workflows to improve efficiency, showcasing
                  problem-solving and systems thinking.
                </li>
                <li>
                  Communicated solutions clearly to users, reflecting strong
                  technical and interpersonal skills.
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
                <li>
                  Tutored Python, Java, Unix/Linux, advanced math and
                  Statistics, reinforcing core concepts essential for software
                  development.
                </li>
                <li>
                  Simplified complex technical topics for students,
                  demonstrating strong communication and deep understanding of
                  computing principles.
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
                <li>
                  Reduced service delays, resulting in more efficient and
                  streamlined daily operations.
                </li>
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
