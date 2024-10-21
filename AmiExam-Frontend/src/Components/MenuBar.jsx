import React, { useState } from "react";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative inline-block ">
      <button
        onClick={handleToggle}
        className={`border border-black w-14 h-14 flex items-center text-black hover:bg-[#0ca46c] hover:text-white ${
          isOpen ? "bg-[#0ca46c] text-white" : ""
        }`}
      >
        {/* Replace with your desired menu icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-64 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        //position can be absolute
        <div className="right-0 w-auto mt-2 bg-white rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:border-l-4 hover:border-[#0ca46c] hover:text-blue-500 hover:bg-gray-100">Profile</li>
            <li className="px-4 py-2 hover:border-l-4 hover:border-[#0ca46c] hover:text-blue-500 hover:bg-gray-100">Upload Certificate</li>
            <li className="px-4 py-2 hover:border-l-4 hover:border-[#0ca46c] hover:text-blue-500 hover:bg-gray-100">Score</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
