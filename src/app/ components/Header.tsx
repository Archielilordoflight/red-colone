import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl">
            Logo
          </a>

          <ul className="flex space-x-4 ml-4">
            <li>
              <a className="text-gray-300 hover:text-white" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white rounded-lg py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="bg-blue-500 text-white rounded-lg py-2 px-4 focus:outline-none hover:bg-blue-600"
          >
            Search
          </button>

          <div className="rounded-full bg-gray-500 w-10 h-10 flex items-center justify-center ml-4">
            <svg
              className="text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
