import React from "react";
import Button from "./UpBtn";

function ResponsiveDiv() {
  return (
    <div className=" w-full h-full flex  items-center justify-center md:flex-row border p-5 gap-5  bg-white">
      <div className="flex-col flex items-center h-4/5 w-2/5  p-4 shadow-lg bg-swhite pt-0 border-[1px] ">
        <Button children="Click" heading="Upload Questions"></Button>
        <Button children="Click" heading="Schedule Test"></Button>
        <Button children="Click" heading="All Test"></Button>
        <Button children="Click" heading="Test Score"></Button>
      </div>
      <div className="h-full  w-full border p-4 shadow-lg bg-white pt-16 rounded-xl shadow-gray-500"></div>
    </div>
  );
}

export default ResponsiveDiv;
