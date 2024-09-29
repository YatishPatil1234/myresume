import React from "react";

const Summary = ({ summary }) => {
  return (
    <div className="px-8 py-2">
      <h2 className="text-2xl font-medium text-black mb-1">
        {summary.sectionTitle}
      </h2>
      <hr className="border-1 border-blue-500 mb-2" />
      <p className="text-black mt-1 font-semibold">{summary.content}</p>
    </div>
  );
};

export default Summary;
