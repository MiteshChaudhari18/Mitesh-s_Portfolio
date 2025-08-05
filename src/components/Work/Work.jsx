import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-6 sm:px-12 md:px-16 lg:px-24 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#8B0000] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="cursor-pointer transform scale-[0.95] transition-transform hover:scale-100 hover:shadow-[0_0_30px_5px_rgba(139,0,0,0.5)] rounded-xl p-4 border border-[#8B0000] bg-white/5 backdrop-blur-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white mt-3">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#2b143f] text-[11px] font-semibold text-[#b91372] px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-screen-md bg-white/5 backdrop-blur-md border border-[#8B0000] rounded-xl shadow-2xl">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-[#b91372]"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#2b143f] text-[11px] font-semibold text-[#b91372] px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center bg-[#2b143f] text-white py-2 rounded-lg hover:bg-[#8B0000] transition text-sm"
                >
                  View Code
                </a>
                <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center bg-[#2b143f] text-white py-2 rounded-lg hover:bg-[#8B0000] transition text-sm"
                  >
                    View Live
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
