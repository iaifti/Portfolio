import React from "react";
import { FaUsers, FaCode, FaUtensils } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-league tracking-wide uppercase pb-14 font-bold text-center mb-12">My Experiences</h2>
        <table className="w-full text-left font-signika">
          <thead>
            <tr>
              <th className="py-4 text-xl font-semibold"></th>
              <th className="py-4 text-xl font-semibold"></th>
              <th className="py-4 text-xl font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="flex">
              <td className="py-6 flex items-center gap-4">
                <FaUsers className="text-2xl text-6" />
                <div className="">SEMO Recreation Center</div>
              </td>
              <td className="py-6 font-semibold">Customer Service Representative</td>
              <td className="py-6 text-gray-700">
                <ul className="space-y-1 list-disc pl-6">
                  <li>First point of contact for visitors, boosting satisfaction through proactive communication.</li>
                  <li>Enhanced customer service, improving guest experience.</li>
                  <li>Streamlined facility operations and increased efficiency.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr className="border-t border-gray-300" />
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="py-6 flex items-center gap-4">
                <FaCode className="text-2xl text-6" />
                <div>SEMO Tutorial Program</div>
              </td>
              <td className="py-6 font-semibold">Teaching Assistant</td>
              <td className="py-6 text-gray-700">
                <ul className="space-y-1 list-disc pl-6">
                  <li>Supported students in coding with Python and Java.</li>
                  <li>Improved Unix and Linux skills by 25%.</li>
                  <li>Simplified advanced math and statistics concepts for better understanding.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <hr className="border-t border-gray-300" />
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="py-6 flex items-center gap-4">
                <FaUtensils className="text-2xl text-6" />
                <div>SEMO Dining Services</div>
              </td>
              <td className="py-6 font-semibold">Dining Services Manager</td>
              <td className="py-6 text-gray-700">
                <ul className="space-y-1 list-disc pl-6">
                  <li>Managed a team of 15 employees, improving operational efficiency by 20%.</li>
                  <li>Reduced service delays by 30%, enhancing guest satisfaction.</li>
                  <li>Streamlined inventory management and scheduling with software tools.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experiences;
