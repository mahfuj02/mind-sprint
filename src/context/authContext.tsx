import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'learner';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<any>;
  isAuthenticated: boolean;  // Add this

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      if (response.status === 'success' && response.data) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
      }
      throw new Error(response.message);
    } catch (error) {
      setError('Invalid credentials');
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const registerResponse = await authService.register({ name, email, password });
      if (registerResponse.status === 'success') {
        const loginResponse = await login(email, password);
        return loginResponse;
      }
      throw new Error(registerResponse.message);
    } catch (error) {
      setError('Registration failed');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register,   isAuthenticated: !!user // Add this
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};