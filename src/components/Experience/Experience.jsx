import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 md:py-20 lg:py-24 px-[7vw] lg:px-portfolio font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#f0f5ff]">EXPERIENCE</h2>
        <p className="text-[#a9b9d0] mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-4 lg:pl-0">
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-0 w-1 bg-white lg:left-1/2 lg:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col items-stretch mb-8 last:mb-0 lg:mb-16 lg:flex-row ${
              index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className="w-full min-w-0 p-4 sm:p-8 rounded-2xl shadow-2xl border border-[#304862] bg-[#152238] lg:w-[calc(50%-1.5rem)] transform transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Company Logo/Image */}
                <div
                  className="w-12 h-12 shrink-0 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden"
                  style={{ backgroundColor: experience.logoBackground }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex min-w-0 flex-col justify-between break-words">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#f0f5ff]">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-[#c5d5e9]">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-[#a9b9d0] mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-[#a9b9d0]">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-[#f0f5ff]">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#20364e] text-[#c5d5e9] px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-[#41607d]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
