"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center fixed top-2 right-2 items-center m-auto text-lg w-fit dark:bg-white bg-gray-700 hover:bg-gray-800 dark:hover:bg-blue-200 transition-color duration-200 ease-in-out rounded-lg text-gray-50 font-semibold py-3 px-4 z-10"
    >
      {isDarkMode ? <FaMoon color="black" /> : <FaSun color="white" />}
    </button>
  );
};

export default DarkModeToggleButton;
