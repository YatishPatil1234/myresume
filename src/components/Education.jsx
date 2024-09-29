import React from "react";

const Education = ({ education }) => {
  return (
    <div className="px-8 py-2">
      <h2 className="text-2xl font-medium text-black">
        {education.sectionTitle}
      </h2>
      <hr className="border-1 border-blue-500" />
      {education.list.map((edu, index) => (
        <div key={index} className="my-2">
          <h3 className="text-lg font-bold text-black">
            {edu.degree.split(":")[0]}:
            <span className="font-normal"> {edu.degree.split(":")[1]}</span>
          </h3>
          <h3 className="text-lg font-bold text-black">
            {edu.school} - <span className="font-normal">{edu.location}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Education;
