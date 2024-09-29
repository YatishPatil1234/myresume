// src/stories/Certifications.stories.js
import Certifications from "../components/Certifications";

export default {
  title: "Components/Certifications", // Title path in Storybook UI
  component: Certifications, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    certifications: { control: "array" }, // Control for editing the certifications prop
  },
};

// Default certifications story with example data
export const DefaultCertifications = {
  args: {
    certifications: [
      "Certified JavaScript Developer",
      "React Professional Certification",
      "AWS Certified Solutions Architect",
    ],
  },
};

// Variation: No certifications available
export const NoCertifications = {
  args: {
    certifications: [],
  },
};
