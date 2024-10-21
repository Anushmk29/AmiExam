import React, { useState } from "react";

import MenuBar from "./MenuBar";
function Navbar() {
  return (
    <nav className="sticky h-14 top-0 z-50 bg-white border-b-2 border-[#0ca46c] w-full">
      <div className="flex mr-5  h-14">
        <MenuBar></MenuBar>
        <div className="h-14 flex items-center justify-center">
          <div className=" text-[#0ca46c]  font-bold text-lg ml-4 m-2 py-1">
            AMITEST
          </div>
        </div>
        <div className="ml-auto flex items-center justify-end py-0 space-x-8">
          <a
            href="/login"
            className="border-b-4 border-white h-12 text-black mt-1 font-bold px-4 hover:text-[#0ca46c] hover:border-[#0ca46c] py-2"
          >
            Test
          </a>
          <a
            href="/login"
            className="border-b-4 border-white h-12 text-black mt-1 font-bold px-4 hover:text-[#0ca46c] hover:border-[#0ca46c] py-2"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-[#0ca46c] w-20 text-white px-2 py-2 rounded-md hover:bg-[#0ca46c] hover:text-lg"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
