// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import LoginForm from '../components/authantication/LoginForm';

interface Props {
  isDarkMode: boolean;
}

const Login = ({ isDarkMode }: Props) => {
  const navigate = useNavigate();
  const { login, error } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDarkMode ? "bg-darkMainBg" : "bg-lightMainBg"
    }`}>
      <div className="w-full px-6 py-12">
        <LoginForm isDarkMode={isDarkMode} onSubmit={handleLogin} error={error} />
      </div>
    </div>
  );
};

export default Login;