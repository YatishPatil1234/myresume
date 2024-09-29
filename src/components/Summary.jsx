// src/components/Summary.js
import React from "react";

const Summary = ({ summary }) => {
  return (
    <div className="px-5 py-2">
      <h2 className="text-2xl font-medium text-gray-900 mb-1">
        Professional Summary
      </h2>
      <hr className="border-1 border-blue-500" />
      <p className="text-gray-900 mt-1 font-semibold">{summary}</p>
    </div>
  );
};

export default Summary;
