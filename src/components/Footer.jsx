const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
      {/* Left side */}
      <div className="mb-2 md:mb-0">
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          MarkView
        </span>{" "}
        · By Arvind M
      </div>

      {/* Right side */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/yourusername/markview"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://markdown-it.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          markdown-it
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
