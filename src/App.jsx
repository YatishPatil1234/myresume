// src/App.js
import React from "react";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import resumeData from "./data/resumeData";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white m-8  shadow-lg shadow-black">
      <div className="border-2 border-black">
        <Header {...resumeData.header} />
        <Summary summary={resumeData.summary} />
        <Experience experiences={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Education education={resumeData.education} />
        <Certifications certifications={resumeData.certifications} />
      </div>
    </div>
  );
};

export default App;
