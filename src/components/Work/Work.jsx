import { useState } from "react";
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
      className="py-14 md:py-20 lg:py-24 px-[7vw] lg:px-portfolio font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f5ff]">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#7dd3fc] mx-auto mt-4"></div>
        <p className="text-[#a9b9d0] mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-[#304862] bg-[#152238] rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-out"
          >
            <div className="p-4">
              <img
                src={project.image}
                loading="lazy"
                decoding="async"
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#f0f5ff] mb-2">
                {project.title}
              </h3>
              <p className="text-[#a9b9d0] mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#20364e] text-xs font-semibold text-[#7dd3fc] rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-90 p-3 sm:p-4">
          <div className="bg-[#152238] rounded-xl shadow-2xl relative w-full max-w-3xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain sm:max-h-[calc(100dvh-2rem)]">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-[#f0f5ff] text-3xl font-bold hover:text-[#7dd3fc]"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#152238] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[50dvh] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-[#f0f5ff] mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-[#a9b9d0] mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#20364e] text-xs font-semibold text-[#7dd3fc] rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#20364e] hover:bg-[#355873] text-[#a9b9d0] lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#7dd3fc] hover:bg-[#b2e7ff] text-[#0b1220] lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
