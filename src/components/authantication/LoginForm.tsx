
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface LoginFormProps {
  isDarkMode: boolean;
  onSubmit: (email: string, password: string) => Promise<void>;
  error: string | null;
 }

 
 const LoginForm: React.FC<LoginFormProps> = ({ isDarkMode, onSubmit, error }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(formData.email, formData.password);
    } catch (err) {
      // Error will be handled by parent component
    } finally {
      setIsLoading(false);
    }
  };
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
 
  return (
    <div className={`w-full max-w-md mx-auto p-8 rounded-2xl shadow-lg ${
      isDarkMode ? 'bg-darkHeaderFooter' : 'bg-lightHeaderFooter'
    }`}>
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold ${
          isDarkMode ? "text-textDark" : "text-textLight"
        }`}>
          <span className="text-primary">mind</span>Sprint
        </h3>
      </div>
 
      <h2 className={`text-2xl font-bold mb-6 text-center ${
        isDarkMode ? "text-textDark" : "text-textLight"
      }`}>
        Welcome back
      </h2>
 
      {error && (
        <div className="mb-4 p-3 text-sm text-red-500 bg-red-100 rounded-lg">
          {error}
        </div>
      )}
 
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="email" 
            className={`block text-sm font-medium mb-2 ${
              isDarkMode ? "text-textDark" : "text-textLight"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              isDarkMode
                ? "bg-darkMainBg text-textDark border-gray-700 focus:border-primary"
                : "bg-white text-textLight border-gray-300 focus:border-primary"
            }`}
            placeholder="Enter your email"
          />
        </div>
 
        <div>
          <div className="flex justify-between items-center mb-2">
            <label 
              htmlFor="password" 
              className={`block text-sm font-medium ${
                isDarkMode ? "text-textDark" : "text-textLight"
              }`}
            >
              Password
            </label>
            <Link 
              to="/forgot-password"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              isDarkMode
                ? "bg-darkMainBg text-textDark border-gray-700 focus:border-primary"
                : "bg-white text-textLight border-gray-300 focus:border-primary"
            }`}
            placeholder="Enter your password"
          />
        </div>
 
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            isDarkMode
              ? "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50"
              : "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50"
          } ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Signing in...
            </span>
          ) : (
            'Sign in'
          )}
        </button>
      </form>
 
      <p className={`mt-6 text-center text-sm ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}>
        Don't have an account?{' '}
        <Link 
          to="/register"
          className="text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
 };
 
 export default LoginForm;