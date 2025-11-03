import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Fetch and update visitor count
    fetch('https://api.countapi.xyz/hit/miteshchaudhari18-portfolio/views')
      .then((res) => res.json())
      .then((data) => setViews(data.value))
      .catch((err) => console.error("Failed to fetch view count", err));
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${sectionId}" not found.`);
    }
  };

  return (
    <footer className="text-white py-10 px-6 sm:px-[10vw] md:px-[7vw] lg:px-[20vw] border-t border-[#800020] bg-black">
      <div className="max-w-screen-xl mx-auto text-center">

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mt-4">
          {[
            { id: "home", name: "Home" },
            { id: "about", name: "About" },
            { id: "skills", name: "Skills" },
            { id: "experience", name: "Experience" },
            { id: "work", name: "Projects" },
            { id: "education", name: "Education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#800020] text-sm sm:text-base transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-6 relative">
          {/* Phone Toggle */}
          <div className="relative z-50">
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="text-xl sm:text-2xl hover:text-[#800020] transition-transform hover:scale-110"
              aria-label="Phone"
            >
              <FaPhoneAlt />
            </button>
            {showPhone && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-[#800020] text-white text-xs sm:text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap z-50">
                +91 87888 96520
              </div>
            )}
          </div>

          {/* Other Social Icons */}
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/mitesh-chaudhari-201b57288",
              label: "LinkedIn",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/_chaudhari.kunal__/",
              label: "Instagram",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/@kunalchaudhari0569",
              label: "YouTube",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:mit2012003@gmail.com",
              label: "Email",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/MiteshChaudhari18",
              label: "GitHub",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-xl sm:text-2xl hover:text-[#800020] transition-transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Fixed Visitor Counter at Bottom Right */}
      <div className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-black border border-white/20 rounded">
        <span className="text-white text-sm font-bold">
          Views: {views.toLocaleString()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
