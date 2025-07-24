import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/mitesh.jpg';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const About = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/miteshchaudhari18-portfolio/views')
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => console.error("Failed to fetch view count", err));
  }, []);

  return (
    <motion.section
      id="about"
      className="min-h-[100dvh] relative px-6 sm:px-10 lg:px-24 font-sans flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-purple-200 mb-4 leading-tight">
            Mitesh Chaudhari
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#800020] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Computer Science Student & Developer',
                'Fullstack Developer',
                'UI/UX Designer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#800020]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-sm sm:text-base text-gray-400 mb-6 mt-8 leading-normal">
            I am a full-stack developer with over 2 years of experience in building
            scalable web applications. Skilled in both front-end and back-end development,
            I specialize in the MERN stack and other modern technologies to create seamless
            user experiences and efficient solutions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://www.instagram.com/_chaudhari.kunal__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#800020] transition text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mitesh-chaudhari-201b57288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#800020] transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mit2012003@gmail.com"
              className="text-white hover:text-[#800020] transition text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/MiteshChaudhari18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#800020] transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] border-4 border-[#800020] rounded-full hover:scale-105 transition-transform duration-500">
            <img
              src={profileImage}
              alt="Mitesh Chaudhari"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(128,0,32,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center">
        <button
          onClick={() =>
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-white hover:text-[#800020] text-4xl animate-bounce"
          aria-label="Scroll to Home"
        >
          <FiChevronDown />
        </button>
      </div>

      {/* View Counter (optional) */}
      {/* 
      <div className="fixed bottom-4 right-4 z-50 bg-[#2b0a12] px-4 py-2 rounded-lg shadow-lg border border-[#800020]">
        <p className="text-white text-sm sm:text-base font-semibold">
          Views: {views}
        </p>
      </div>
      */}
    </motion.section>
  );
};

export default About;
