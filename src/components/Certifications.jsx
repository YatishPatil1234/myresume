import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="px-8 py-2 pb-8">
      <h2 className="text-2xl font-medium text-black">
        {certifications.sectionTitle}
      </h2>
      <hr className="border-1 border-blue-500" />
      <ul className="list-disc ml-8 mt-2 text-black font-medium">
        {certifications.list.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
