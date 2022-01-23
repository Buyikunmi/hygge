import React from "react";

const InputWidget = ({ title, type, name }) => {
  return (
    <div className="my-4 ">
      <label htmlFor={name} className="ml-4 font-semibold">
        {title}
      </label>
      <input
        type={type}
        name={name}
        className="w-full block px-4 py-3 mt-3  border border-2 border-gray-100 border-xl focus:ring-green-500 rounded-full"
        required
      />
    </div>
  );
};

export default InputWidget;
