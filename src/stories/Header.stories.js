import Header from "../components/Header";

// Storybook configuration for Header component
export default {
  title: "Components/Header", // Title path in Storybook UI
  component: Header, // Component being documented
  parameters: {
    layout: "centered", // Centers the component in the canvas
  },
  tags: ["autodocs"], // Automatically generates documentation
  argTypes: {
    name: { control: "text" }, // Controls for editing props in Storybook
    location: { control: "text" },
    phone: { control: "text" },
    email: { control: "text" },
  },
};

// Primary header story with default props
export const DefaultHeader = {
  args: {
    name: "John Doe",
    location: "New York, USA",
    phone: "(555) 123-4567",
    email: "johndoe@example.com",
  },
};

// Header variation: First name only
export const FirstNameOnly = {
  args: {
    name: "John",
    location: "New York, USA",
    phone: "(555) 123-4567",
    email: "john@example.com",
  },
};

// Header variation: Missing name (empty name string)
export const MissingName = {
  args: {
    name: "",
    location: "San Francisco, USA",
    phone: "(555) 987-6543",
    email: "missingname@example.com",
  },
};

// Header variation: Long name
export const LongName = {
  args: {
    name: "Jonathan Christopher Doe",
    location: "Los Angeles, USA",
    phone: "(555) 234-7890",
    email: "jondoe@example.com",
  },
};
