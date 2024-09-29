import React from "react";

const Header = ({ name, location, phone, email }) => {
  return (
    <div className="flex flex-col items-start px-8 pt-8 border-gray-300">
      <h1 className="text-5xl font-bold text-gray-900 uppercase mb-2 space-x-2">
        <span className="text-black">{name.split(" ")[0]}</span>
        <span className="text-blue-400">{name.split(" ")[1]}</span>
      </h1>
      <p className="text-sm text-white bg-black p-2 w-full mt-2">
        {location} | {phone} | {email}
      </p>
    </div>
  );
};

export default Header;
