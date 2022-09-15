import React from "react";
import SkillIcons from "./SkillIcons";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#1f2833] text-[#c5c6c7] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mb-24">
          <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies I've worked with.
          </p>
        </div>
        <SkillIcons />
      </div>
    </div>
  );
};

export default Skills;
