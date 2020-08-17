import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [collapse, setCollapse] = useState("hidden");

  const onClick = () => {
    if (collapse === "block") {
      setCollapse("hidden");
    } else {
      setCollapse("block");
    }
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Next Connection
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={onClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:flex lg:justify-end lg:items-center lg:w-auto ${collapse}`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#profile"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Profile
          </a>
          <a
            href="#log-out"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Log Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
