import React from "react";

function Button({ children, heading }) {
  return (
    <div className="flex items-center flex-col border-t-[1px] shadow-gray-500 w-[95%] p-1 pt-2 shadow-md justify-center m-[15px]">
      <h1>{heading}</h1>
      <button
        className="mt-2 w-24  hover:bg-[#0ca46c] text-black font-bold py-1 px-4 mb-12 rounded-full  shadow-sm  shadow-gray-500"
        type="button"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
