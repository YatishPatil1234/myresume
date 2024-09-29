// src/stories/Skills.stories.js
import Skills from "../components/Skills";

export default {
  title: "Components/Skills", // Title path in Storybook UI
  component: Skills, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    skills: { control: "array" }, // Control for editing the skills prop
  },
};

// Default skills story with example data
export const DefaultSkills = {
  args:{
    skills:[
      "JavaScript",
      "React",
      "Node.js",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Git",
      "Python",
      "Vs Code",
      "Express"
    ],
  },
};

// Variation: No skills
export const NoSkills = {
  args: {
    skills: [],
  },
};
