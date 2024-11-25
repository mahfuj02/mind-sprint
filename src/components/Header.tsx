import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header
      className={`p-4 ${
        isDarkMode ? "bg-darkHeaderFooter text-white" : "bg-lightHeaderFooter text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MindSprint</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/tutorials" className="hover:underline">Tutorials</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 text-xl"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
