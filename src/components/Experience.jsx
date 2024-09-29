import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="px-8 py-2">
      <h2 className="text-2xl font-medium text-black">
        {experiences.sectionTitle}
      </h2>
      <hr className="border-1 border-blue-500" />
      {experiences.list.map((exp, index) => (
        <div key={index} className="mt-1 mb-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-black">{exp.title}</h3>
            <p className="text-sm text-black font-semibold">{exp.period}</p>
          </div>
          <p className="text-lg text-black">
            <span className="text-lg font-bold">{exp.company}</span> -
            <span className="font-normal"> {exp.location}</span>
          </p>
          <ul className="list-disc font-medium ml-8 mt-2 text-black">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
