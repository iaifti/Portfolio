import React from "react";
import { FaUsers, FaCode, FaUtensils } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="bg-gradient-to-b from-navy/10 to-white font-signika pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-league tracking-wide uppercase pb-10 font-bold text-center mb-12">
          Working Experiences
        </h2>
        <div className="space-y-10 p-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 p-4 lg:grid-cols-3 gap-6 lg:gap-8 items-center bg-orange/10 hover:rounded-xl">
            <div className="flex items-center gap-4">
              <FaUsers className="text-xl sm:text-2xl text-6" />
              <div className="text-sm sm:text-base lg:text-lg">
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
          <div className="grid grid-cols-1 p-4 lg:grid-cols-3 gap-6 lg:gap-8 items-center bg-orange/10 hover:rounded-xl">
            <div className="flex items-center gap-4">
              <FaCode className="text-xl sm:text-2xl text-6" />
              <div className="text-sm sm:text-base lg:text-lg">
                SEMO Tutorial Program
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              CS Tutor
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>Supported students in coding with Python and Java.</li>
                <li>Improved Unix and Linux skills by 25%.</li>
                <li>
                  Simplified advanced math and statistics concepts for better
                  understanding.
                </li>
              </ul>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 p-4 lg:grid-cols-3 gap-6 lg:gap-8 items-center bg-orange/10 hover:rounded-xl">
            <div className="flex items-center gap-4">
              <FaUtensils className="text-xl sm:text-2xl text-6" />
              <div className="text-sm sm:text-base lg:text-lg">
                SEMO Dining Services
              </div>
            </div>
            <div className="font-semibold text-sm sm:text-base lg:text-lg">
              Student Supervisor
            </div>
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base">
              <ul className="space-y-1 list-disc pl-6">
                <li>
                  Managed a team of 15 employees, improving operational
                  efficiency by 20%.
                </li>
                <li>
                  Reduced service delays by 30%, enhancing guest satisfaction.
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
