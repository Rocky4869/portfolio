import { backend_skill, frontend_skill, full_stack } from "@/constants";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 pb-10 sm:pb-20 md:pb-40"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
          Skills
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          My skills and technologies I use
        </p>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image.src}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image.src}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image.src}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
