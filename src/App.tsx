import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useTheme } from "./theme";

const App: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="bg-lightMainBg dark:bg-darkMainBg min-h-screen">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} toggleTheme={function (): void {
              throw new Error("Function not implemented.");
            } } />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
