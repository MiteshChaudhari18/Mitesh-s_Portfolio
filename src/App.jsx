import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import bgImage from "./assets/bg.jpg";
import About from "./components/About/About";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
      className="w-full relative overflow-x-hidden"
    >
      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      {/* Content */}
      <div className="relative z-20 pt-20 px-4 sm:px-6 lg:px-12">
        <Navbar />
        <About />
        <Home />
        <Experience />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
