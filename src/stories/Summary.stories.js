// src/stories/Summary.stories.js
import Summary from "../components/Summary";

export default {
  title: "Components/Summary", // Title path in Storybook UI
  component: Summary, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    summary: { control: "text" }, // Control for editing the summary prop
  },
};

// Default summary story with example text
export const DefaultSummary = {
  args: {
    summary:
      "A detail-oriented software developer with experience in building web applications using modern technologies.",
  },
};

// Variation: Empty summary
export const EmptySummary = {
  args: {
    summary: "",
  },
};

// Variation: Longer summary
export const LongSummary = {
  args: {
    summary:
      "An experienced developer skilled in JavaScript frameworks such as React and Vue, with a strong understanding of backend technologies like Node.js. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
};
