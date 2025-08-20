import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-[7vw] lg:px-[16vw] font-sans bg-transparent"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-20 sm:w-32 h-1 bg-[#8B0000] mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base font-semibold max-w-3xl mx-auto">
          My education has been a journey of growth and learning. Here’s a glimpse into my academic path.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white h-full hidden sm:block"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle with Logo */}
            <div className="absolute sm:left-1/2 left-5 transform -translate-x-1/2 sm:-translate-x-1/2 bg-gray-300 border-4 border-[#8B0000] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain p-1 rounded-full"
              />
            </div>

            {/* Education Card */}
            <div
              className={`w-full sm:max-w-sm p-4 sm:p-5 mt-16 sm:mt-0 rounded-xl border border-[#8B0000] bg-white/10 backdrop-blur-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_4px_rgba(139,0,0,0.6)] ${
                index % 2 === 0 ? "sm:ml-[12rem]" : "sm:mr-[12rem]"
              }`}
            >
              {/* Top Row */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-md overflow-hidden p-2">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-gray-400">{edu.desc}</p>

              {/* Skills */}
              {edu.skills && edu.skills.length > 0 && (
                <div className="mt-3">
                  <h5 className="font-medium text-white mb-1 text-sm">Subjects / Skills:</h5>
                  <ul className="flex flex-wrap">
                    {edu.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8B0000] text-gray-200 px-2 py-1 text-xs rounded-md mr-2 mb-2 border border-gray-500"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
