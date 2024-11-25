import React from "react";
import { Sun, Moon } from "lucide-react";
import Logo from '../assets/mindsprint-logo.svg';  // Adjust the path according to your project structure

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header
      className={`sticky top-0 z-50 px-4 py-3 ${
        isDarkMode 
          ? "bg-darkHeaderFooter text-white" 
          : "bg-lightHeaderFooter text-black"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto flex items-center">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <a href="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="MindSprint Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center justify-end flex-grow gap-6">
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="/" 
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                <a 
                  href="/tutorials" 
                  className="text-sm font-medium hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                 Courses
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  Membership
                </a>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle & Login */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? "bg-gray-700 hover:bg-gray-600" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            <a
              href="/login"
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${isDarkMode 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-blue-500 hover:bg-blue-600 text-white"
                }
              `}
            >
              লগইন
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;