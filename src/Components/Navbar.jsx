import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShimmerButton from "./ShimmerButton";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "jp" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {/* Shimmer Button at the top of the page */}
      <div className="fixed z-50 top-4 left-1/2 transform -translate-x-1/2">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            {t("register")}
          </span>
        </ShimmerButton>
      </div>

      {/* Navbar at the bottom of the page */}
      <div className="fixed z-50 w-full h-14 max-w-lg transform -translate-x-1/2 border border-gray-300 rounded-full bottom-4 left-1/2 bg-white shadow-md">
        <div className="grid h-full grid-cols-5">
          {/* Home Button */}
          <Link
            to="/"
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 rounded-l-full transition-colors duration-300 ease-in-out"
          >
            {t("home")}
          </Link>

          {/* Day 1 Button */}
          <Link
            to="/day1"
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 transition-colors duration-300 ease-in-out"
          >
            <span className="lg:hidden">{t("d1")}</span> {/* "D-1" on small screens */}
            <span className="hidden lg:inline">{t("day1")}</span> {/* "Day 1" on large screens */}
          </Link>

          {/* Day 2 Button */}
          <Link
            to="/day2"
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 transition-colors duration-300 ease-in-out"
          >
            <span className="lg:hidden">{t("d2")}</span> {/* "D-2" on small screens */}
            <span className="hidden lg:inline">{t("day2")}</span> {/* "Day 2" on large screens */}
          </Link>

          {/* Activities Button */}
          <Link
            to="/activity"
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 transition-colors duration-300 ease-in-out"
          >
            {t("activities")}
          </Link>

          {/* Language Toggle Button */}
          <button
            onClick={handleLanguageChange}
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 text-sm font-semibold px-5 py-2 rounded-r-full transition-colors duration-300 ease-in-out"
          >
            <img
              src={
                i18n.language === "en"
                  ? "https://cdn-icons-png.flaticon.com/512/197/197604.png"
                  : "https://cdn-icons-png.flaticon.com/512/197/197374.png"
              }
              alt={i18n.language === "en" ? t("japanese") : t("english")}
              className="w-6 h-6 mr-2"
            />
            {i18n.language === "en" ? t("japanese") : t("english")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
