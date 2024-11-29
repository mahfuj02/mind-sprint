import React from "react";
import { Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import darkLogo from '../assets/dark-mode-logo.svg';
import lightLogo from '../assets/light-mode-logo.svg';

interface HeaderProps {
 isDarkMode: boolean;
 toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
 const { user, isAuthenticated, logout } = useAuth();
 const navigate = useNavigate();

 const handleLogout = () => {
   logout();
   navigate('/');
 };

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
         <Link to="/" className="flex items-center">
           <img 
             src={isDarkMode ? darkLogo : lightLogo} 
             alt="MindSprint Logo" 
             className="h-12 w-auto"
           />
         </Link>
       </div>

       {/* Navigation & Actions */}
       <div className="flex items-center justify-end flex-grow gap-6">
         <nav className="hidden md:block">
           <ul className="flex items-center space-x-8">
             <li>
               <Link 
                 to="/" 
                 className="text-sm font-medium hover:text-blue-500 transition-colors"
               >
                 Home
               </Link>
             </li>
             <li className="relative group">
               <Link
                 to="/courses" 
                 className="text-sm font-medium hover:text-blue-500 transition-colors flex items-center gap-1"
               >
                Courses
               </Link>
             </li>
             <li>
               <Link
                 to="/membership" 
                 className="text-sm font-medium hover:text-blue-500 transition-colors"
               >
                 Membership
               </Link>
             </li>
           </ul>
         </nav>

         {/* Theme Toggle & Login/User Info */}
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
           
           {isAuthenticated ? (
             <div className="flex items-center gap-4">
               <span className="text-sm font-medium">
                 {user?.name}
               </span>
               <button
                 onClick={handleLogout}
                 className={`
                   px-4 py-2 rounded-lg text-sm font-medium transition-colors
                   ${isDarkMode 
                     ? "bg-blue-600 hover:bg-blue-700 text-white" 
                     : "bg-blue-500 hover:bg-blue-600 text-white"
                   }
                 `}
               >
                 Logout
               </button>
             </div>
           ) : (
             <Link
               to="/login"
               className={`
                 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                 ${isDarkMode 
                   ? "bg-blue-600 hover:bg-blue-700 text-white" 
                   : "bg-blue-500 hover:bg-blue-600 text-white"
                 }
               `}
             >
               Login
             </Link>
           )}
         </div>
       </div>
     </div>
   </header>
 );
};

export default Header;