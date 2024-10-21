import React, { useState } from "react";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [subFilter, setSubFilter] = useState(""); // State for nested dropdown

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
    setSubFilter(""); // Reset subFilter when switching main filter
  };

  const handleSubFilter = (event) => {
    setSubFilter(event.target.value);
  };

  // Data for sub-filters (modify as needed)
  const subFilters = {
    category1: ["2025", "2026", "2027", "2028"],
    category2: [
      "AWS",
      "Microsoft Azure",
      "CyberSecurity Network",
      "Artificial Intelligance",
      "devopps",
    ],
    category3: ["Java", "Python", "PHP", "C#", "C++"],
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#0ca46c] w-full">
      <div className="container mx-auto px-2 py-0 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-4 w-full ">
            <a
              href="/"
              className="text-[#0ca46c] font-mono font-bold text-lg m-2 ml-0 py-1 "
            >
              AMITEST
            </a>
            <div className="relative mx-96 py-1 w-1/2 ">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
                className=" border bg-emerald-100 rounded-md px-3 py-2 bg-sgrey-100 w-full "
              />
              <div className="absolute right-0 top-0 mt-2 mr-2">
                <select
                  value={filter}
                  onChange={handleFilter}
                  className="border border-gray-300 rounded-md px-2 py-1"
                >
                  <option value="">Select Option</option>
                  <option value="category1">Batch</option>
                  <option value="category2">Certification</option>
                  <option value="category3">Specialist</option>
                  {/* Add more options as needed */}
                </select>
                {/* Nested dropdown (conditionally rendered) */}
                {filter && subFilters[filter] && (
                  <select
                    value={subFilter}
                    onChange={handleSubFilter}
                    className=" absolute top-0 left-full mb-24 ml-4 h-11 bg-[#0ca46c] text-white rounded-md hover:bg-green-400 px-4 " // Adjust positioning as needed
                  >
                    {subFilters[filter].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="/login"
              className="text-black mt-2 font-bold px-4 rounded-md hover:text-green-400"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[#0ca46c] w-24 text-white px-4 py-2 rounded-md hover:bg-green-400"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
