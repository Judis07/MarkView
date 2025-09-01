import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="w-full border-t border-gray-200 dark:border-gray-700 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
      <div className="mb-2 md:mb-0">
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          MarkView
        </span>{" "}
        · Minimal Markdown Viewer
      </div>

      <ThemeSwitcher />
    </header>
  );
};

export default Header;
