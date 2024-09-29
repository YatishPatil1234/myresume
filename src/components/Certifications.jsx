// src/components/Certifications.js
import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="px-5 pt-2 pb-8">
      <h2 className="text-2xl font-medium text-black">
        Certifications and Licenses
      </h2>
      <hr className="border-1 border-blue-500" />
      <ul className="list-disc ml-8 mt-2 text-black font-semibold">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
