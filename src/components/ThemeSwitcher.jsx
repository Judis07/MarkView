import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {}, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === "light" ? (
        <FiMoon className="text-gray-700 dark:text-gray-200" size={18} />
      ) : (
        <FiSun className="text-yellow-400" size={18} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
