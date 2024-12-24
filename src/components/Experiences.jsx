import React from "react";

const Experiences = () => {
  return (
    <div className="bg-gray-100 pt-40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experiences</h2>
        <div className="grid gap-8 md:grid-cols-1">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl mb-4">
              SEMO || <span className="bg-orange text-white p-2 rounded">Recreation Center</span>
            </h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>First point of contact for visitors, boosting satisfaction through proactive communication.</li>
              <li>Enhanced customer service, improving guest experience.</li>
              <li>Streamlined facility operations and increase in efficiency.</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl mb-4">
              SEMO || <span className="bg-orange text-white p-2 rounded">Tutorial Program</span>
            </h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>Supported students in coding with Python and Java.</li>
              <li>Improved Unix and Linux skills by 25%.</li>
              <li>Simplified advanced math and statistics concepts for better understanding.</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-bold text-xl mb-4">
              SEMO || <span className="bg-orange text-white p-2 rounded">Dining Services</span>
            </h3>
            <ul className="space-y-2 list-disc pl-6">
              <li>Managed a team of 15 employees, improving operational efficiency by 20%.</li>
              <li>Reduced service delays by 30%, enhancing guest satisfaction.</li>
              <li>Streamlined inventory management and scheduling with software tools.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
