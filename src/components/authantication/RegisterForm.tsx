import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export interface RegisterFormProps {
  isDarkMode: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const { register, loading: isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      const response = await register(formData.name, formData.email, formData.password);
      if (response?.status === 'success') {
        navigate('/');
      }
    } catch (err) {
      setValidationErrors({ email: error || 'Registration failed' });
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
        <h3 className={`text-2xl font-bold ${isDarkMode ? "text-textDark" : "text-textLight"}`}>
          <span className="text-primary">mind</span>Sprint
        </h3>
      </div>

      <h2 className={`text-2xl font-bold mb-6 text-center ${
        isDarkMode ? "text-textDark" : "text-textLight"
      }`}>
        Create your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
            isDarkMode ? "text-textDark" : "text-textLight"
          }`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              isDarkMode
                ? "bg-darkMainBg text-textDark border-gray-700 focus:border-primary"
                : "bg-white text-textLight border-gray-300 focus:border-primary"
            }`}
            placeholder="Enter your name"
          />
        </div>

        {/* Email, Password, and ConfirmPassword fields remain unchanged */}
        {/* Keep your existing input fields and button code */}

        <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
              isDarkMode ? "text-textDark" : "text-textLight"
            }`}>
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
            <label htmlFor="password" className={`block text-sm font-medium mb-2 ${
              isDarkMode ? "text-textDark" : "text-textLight"
            }`}>
              Password
            </label>
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
              } ${validationErrors.password ? 'border-red-500' : ''}`}
              placeholder="Create a password"
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>
            )}
          </div>
  
          <div>
            <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-2 ${
              isDarkMode ? "text-textDark" : "text-textLight"
            }`}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                isDarkMode
                  ? "bg-darkMainBg text-textDark border-gray-700 focus:border-primary"
                  : "bg-white text-textLight border-gray-300 focus:border-primary"
              } ${validationErrors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
            />
            {validationErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</p>
            )}
          </div>
  
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              isDarkMode
                ? "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50"
                : "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50"
            } ${isLoading ? 'cursor-wait' : 'cursor-pointer'} mt-6`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
      </form>

      <p className={`mt-6 text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        Already have an account?{' '}
        <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;