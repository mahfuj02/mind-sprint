import React from "react";
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useTheme } from "./theme";
import Footer from "./components/Footer";
import Courses from "./pages/Course";
import ComingSoon from "./pages/ComingSoon";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AdminRoute from "./components/routes/AdminRoute";
const App: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AuthProvider>

      <Router>
        <div className={isDarkMode ? "dark" : ""}>
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="bg-lightMainBg dark:bg-darkMainBg min-h-screen">

            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/courses" element={<Courses isDarkMode={isDarkMode} />} />
              <Route path="/membership" element={<ComingSoon isDarkMode={isDarkMode} />} />
              <Route path="/profile" element={<ProtectedRoute redirectPath="/">
                <ComingSoon isDarkMode={isDarkMode} />
              </ProtectedRoute>} /> 

              <Route
                path="/dashboard"
                element={
                  <AdminRoute>
                    <Dashboard isDarkMode={isDarkMode} />
                  </AdminRoute>
                }
              />


              <Route path="/login" element={<ProtectedRoute redirectPath="/">
                <Login isDarkMode={isDarkMode} />
              </ProtectedRoute>} />
              <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />


              membership
            </Routes>
          </main>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
