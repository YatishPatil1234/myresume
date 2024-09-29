// src/components/Skills.js
import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="px-5 py-2">
      <h2 className="text-2xl font-medium text-black">Skills</h2>
      <hr className="border-1 border-blue-500" />
      <ul className="list-disc ml-8 mt-2 font-medium  grid grid-cols-2 gap-x-6 text-black">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
