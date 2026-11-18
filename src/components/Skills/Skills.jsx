// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-14 md:py-20 lg:py-24 px-[7vw] lg:px-portfolio font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-3xl sm:text-4xl font-bold text-[#f0f5ff]">SKILLS</h2>
      <div className="w-24 h-1 bg-[#7dd3fc] mx-auto mt-2"></div>
      <p className="text-[#a9b9d0] mt-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid gap-5 pt-6 md:grid-cols-2">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#152238] min-w-0 px-4 sm:px-6 py-6 rounded-2xl border border-[#304862]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#a9b9d0] mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,7rem),1fr))] gap-2">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#304862] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-5 h-5 shrink-0 object-contain"
                />
                <span className="min-w-0 break-words text-xs sm:text-sm text-[#c5d5e9]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
