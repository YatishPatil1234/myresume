// src/stories/Experience.stories.js
import Experience from "../components/Experience";

export default {
  title: "Components/Experience", // Title path in Storybook UI
  component: Experience, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    experiences: { control: "object" }, // Control for editing the experiences prop
  },
};

// Default experiences story with example data
export const DefaultExperience = {
  args: {
    experiences: [
      {
        title: "Software Engineer",
        company: "Tech Company A",
        location: "San Francisco, CA",
        period: "Jan 2020 - Present",
        responsibilities: [
          "Developed web applications using React and Node.js",
          "Collaborated with cross-functional teams to define and implement new features",
          "Participated in code reviews and maintained best practices",
        ],
      },
      {
        title: "Frontend Developer",
        company: "Creative Agency B",
        location: "New York, NY",
        period: "May 2018 - Dec 2019",
        responsibilities: [
          "Designed and implemented responsive user interfaces",
          "Worked with clients to gather requirements and deliver solutions",
          "Optimized web performance and ensured cross-browser compatibility",
        ],
      },
      {
        title: "Intern",
        company: "Startup C",
        location: "Los Angeles, CA",
        period: "Jun 2017 - Aug 2017",
        responsibilities: [
          "Assisted in developing a mobile application",
          "Conducted testing and debugging to ensure quality",
          "Learned Agile methodologies and participated in daily stand-ups",
        ],
      },
    ],
  },
};

// Variation: No experiences
export const NoExperience = {
  args: {
    experiences: [],
  },
};
