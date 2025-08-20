import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 px-6 sm:px-[7vw] lg:px-[20vw] font-sans text-white bg-transparent"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 sm:w-32 h-1 bg-[#8B0000] mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 text-sm sm:text-md md:text-lg max-w-xl mx-auto">
          Categorized by type — here's what I use to build robust applications.
        </p>
      </div>

      {/* Skills by Category */}
      <div className="space-y-16 sm:space-y-20">
        {SkillsInfo.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 sm:mb-8 border-l-4 border-[#8B0000] pl-3 sm:pl-4">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={700}
                  gyroscope={true}
                  className="w-full"
                >
                  <div className="relative flex flex-col items-center justify-center 
                    bg-white/5 border border-[#8B0000] rounded-3xl 
                    p-4 sm:p-6 h-40 sm:h-48 transition-all duration-500 ease-in-out 
                    hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(139,0,0,0.7)] group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full p-3 flex items-center justify-center shadow-md transition">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="mt-4 sm:mt-5 text-xs sm:text-sm font-semibold text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
