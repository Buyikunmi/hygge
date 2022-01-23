import React from "react";

const SecondaryButton = ({ title }) => {
  return (
    <button className="border border-gray-200 hover:border-gray-600 transition duration-200 ease-out py-4 rounded-full font-bold text-xl w-full">
      {title}
    </button>
  );
};

export default SecondaryButton;
