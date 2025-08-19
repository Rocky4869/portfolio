import { backend_skill, frontend_skill, full_stack } from "@/constants";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
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
