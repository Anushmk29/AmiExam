import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white text-sm py-3 h-full border-b-2 border-green-200">
      <nav className="max-w-[85rem] w-full mx-auto px-4  ">
        <div className="flex items-center justify-between s">
          <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-black">
            AMI-EXAM
          </span>

          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <a
              className="font-medium text-blue-500 focus:outline-none"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Account
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Work
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Blog
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Login
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <a
              className="block py-2 px-4 text-sm text-blue-500 font-medium"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-400 font-medium"
              href="#"
            >
              Account
            </a>
            <a
              className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-400 font-medium"
              href="#"
            >
              Work
            </a>
            <a
              className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-400 font-medium"
              href="#"
            >
              Blog
            </a>

            <a
              className="focus:outline-none 
              block py-2 px-4 text-sm text-gray-600 hover:text-gray-400 font-medium"
              href="#"
            >
              Login
            </a>
            <a
              className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-400 font-medium  rounded-md "
              href="#"
            >
              Sign Up
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
