import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useTheme } from "./theme";
import Footer from "./components/Footer";
import Courses from "./pages/Course";
import ComingSoon from "./pages/ComingSoon";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="bg-lightMainBg dark:bg-darkMainBg min-h-screen">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/courses" element={<Courses isDarkMode={isDarkMode} />} />
            <Route path="/membership" element={<ComingSoon isDarkMode={isDarkMode} />} />
            <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
            <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />


            membership
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
