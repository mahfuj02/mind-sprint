import React, { useState } from 'react';
import LoginForm from '../components/authantication/LoginForm';

interface Props{
    isDarkMode: boolean;
}
const Login: React.FC<Props> = ({isDarkMode} ) => {

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDarkMode ? "bg-darkMainBg" : "bg-lightMainBg"
    }`}>
      <div className="w-full px-6 py-12">
        <LoginForm isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Login;