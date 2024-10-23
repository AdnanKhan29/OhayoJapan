import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto relative">
        
        {/* Home Button */}
        <button
          type="button"
          className="relative inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>

          {/* Tooltip */}
          <div className="absolute bottom-12 w-24 text-center text-sm text-white bg-gray-900 rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Home
          </div>
        </button>

        {/* Day1 Button */}
        <button
          type="button"
          className="relative inline-flex flex-col items-center justify-center px-5 text-slate-400 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <p className="text-center text-lg">Day1</p>

          {/* Tooltip */}
          <div className="absolute bottom-12 w-24 text-center text-sm text-white bg-gray-900 rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Day 1
          </div>
        </button>

        {/* Day2 Button */}
        <button
          type="button"
          className="relative inline-flex flex-col items-center justify-center px-5  text-slate-400 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <p className="text-center text-lg">Day2</p>

          {/* Tooltip */}
          <div className="absolute bottom-12 w-24 text-center text-sm text-white bg-gray-900 rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Day 2
          </div>
        </button>

        {/* Register Button */}
        <button
          type="button"
          className="relative inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M16 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 14H6v-1a2 2 0 0 1 4 0v1h2v-1a2 2 0 0 1 4 0v1ZM6 8h8v1H6Zm0 3h8v1H6Z" />
          </svg>

          {/* Tooltip */}
          <div className="absolute bottom-12 w-24 text-center text-sm text-white bg-gray-900 rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Register
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
