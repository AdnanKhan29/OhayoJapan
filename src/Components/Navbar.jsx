import React from "react";
import { Link } from "react-router-dom";
import ShimmerButton from "./ShimmerButton";

const Navbar = () => {
  return (
    <>
      {/* Shimmer Button at the top of the page */}
      <div className="fixed z-50 top-4 left-1/2 -translate-x-1/2">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Register Now
          </span>
        </ShimmerButton>
      </div>

      {/* Navbar at the bottom of the page */}
      <div className="fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 border border-gray-300 rounded-full bottom-4 left-1/2 bg-white shadow-md">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto relative">
          
          {/* Home Button */}
          <Link
            to="/"
            className="relative inline-flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 rounded-l-full group"
          >
            Home
          </Link>

          {/* Day 1 Button */}
          <Link
            to="/day1"
            className="relative inline-flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 group"
          >
            Day 1
          </Link>

          {/* Day 2 Button */}
          <Link
            to="/day2"
            className="relative inline-flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 group"
          >
            Day 2
          </Link>

          {/* Activities Button */}
          <Link
            to="/activity"
            className="relative inline-flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 rounded-r-full group"
          >
            Activities
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
