import React from "react";
import { FaDownload, FaGithub, FaAngleDown } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start px-6 sm:px-[5vw] md:px-[8vw] lg:px-[10vw] text-white bg-transparent pt-24"
    >
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">ABOUT</h2>
          <div className="w-20 sm:w-32 h-1 bg-[#8B0000] mx-auto mt-3"></div>
        </div>

        {/* Content Row */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:gap-16 items-start">
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-normal mb-5">
              I’m a final year B.Tech Computer Science and Engineering student
              at R. C. Patel Institute of Technology, Shirpur, currently
              interning at Celebal Technology. I’m passionate about building
              innovative solutions and exploring cutting-edge technologies, with
              a strong focus on web development and software engineering. I
              actively solve coding problems on platforms like LeetCode,
              HackerRank, and CodeChef to sharpen my problem-solving skills. I
              enjoy turning complex challenges into user-friendly digital
              experiences, collaborating on real-world projects, and
              continuously learning to stay ahead in the tech ecosystem. I'm
              particularly enthusiastic about open-source contributions, UI/UX
              optimization, and automation.
            </p>

            <a
              href="https://drive.google.com/file/d/1j0_MGQwDs-sLkDG8XbbMOU2ccDSAXa0O/view?usp=sharing"
              download
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#800020] text-sm text-white hover:bg-[#800020] hover:border-[#800020] rounded-full transition duration-500"
            >
              <FaDownload className="text-base" />
              Download Resume
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#800020] mb-6">
              My Profiles
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <SiCodechef className="text-[#5B4638] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://www.codechef.com/users/mitesh_008/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  CodeChef
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-[#4078c0] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://github.com/MiteshChaudhari18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SiLeetcode className="text-[#FFA116] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://leetcode.com/u/MiteshChaudhari18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  LeetCode
                </a>
              </li>
              <li className="flex items-center gap-3">
                <SiHackerrank className="text-[#2EC866] text-xl hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://www.hackerrank.com/profile/mit2012003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#800020]"
                >
                  HackerRank
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-20 sm:mt-28 w-full flex justify-center">
          <a href="#experience" aria-label="Scroll to Experience">
            <FaAngleDown className="text-white text-2xl sm:text-3xl animate-bounce cursor-pointer hover:text-[#800020] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;



