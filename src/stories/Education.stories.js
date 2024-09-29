// src/stories/Education.stories.js
import Education from "../components/Education";

export default {
  title: "Components/Education", // Title path in Storybook UI
  component: Education, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    education: { control: "array" }, // Control for editing the education prop
  },
};

// Default education story with example data
export const DefaultEducation = {
  args: {
    education: [
      {
        degree: "Bachelor of Engineering: AI/DS",
        school: "XYZ University",
        location: "Mumbai, India",
      },
      {
        degree: "Master of Science: Computer Science",
        school: "ABC University",
        location: "Los Angeles, USA",
      },
    ],
  },
};

// Variation: No education information
export const NoEducation = {
  args: {
    education: [],
  },
};
