import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-14 md:py-20 lg:py-24 px-[7vw] lg:px-portfolio font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f5ff]">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#7dd3fc] mx-auto mt-4"></div>
        <p className="text-[#a9b9d0] mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative pl-4 lg:pl-0">
        {/* Vertical line */}
        <div className="absolute inset-y-0 left-0 w-1 bg-white lg:left-1/2 lg:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col items-stretch mb-8 last:mb-0 lg:mb-16 lg:flex-row ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            {/* Content Section */}
            <div
              className="w-full min-w-0 p-4 sm:p-8 rounded-2xl shadow-2xl border border-[#304862] bg-[#152238] lg:w-[calc(50%-1.5rem)] transform transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Flex container for image and text */}
              <div className="flex items-center gap-3 sm:gap-6">
                {/* School Logo/Image */}
                <div className="w-12 h-12 shrink-0 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex min-w-0 flex-col justify-between break-words">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-[#f0f5ff]">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-[#c5d5e9]">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-[#a9b9d0] mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-[#a9b9d0] font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-[#a9b9d0]">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
