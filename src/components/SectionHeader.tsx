import React from "react";

const SectionHeader = ({ slogan, title, center }) => {
  return (
    <div className={center && "text-center"}>
      <p className="font-bold text-xl text-blue-600 italic">{slogan}</p>
      <p className=" font-bold text-2xl text-gray-800">{title}</p>
    </div>
  );
};

export default SectionHeader;
