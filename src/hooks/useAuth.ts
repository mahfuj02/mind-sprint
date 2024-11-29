import { useState, useEffect } from 'react';
import { authService } from '../services/authService';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'learner';
}
interface AuthResponse {
    status: string;
    message: string;
    data: User;
  }

export const useAuth = () => {
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

  const login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const response = await authService.login(email, password);
      if (response.status === 'success' && response.data) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        return response;
      }
      throw new Error(response.message || 'Login failed');
    } catch (error) {
      setError('Invalid credentials');
      throw error;
    }
  };
  
  const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
    try {
      const registerResponse = await authService.register({ name, email, password });
      
      if (registerResponse.status === 'success') {
        // Login after registration
        const loginResponse = await authService.login(email, password);
        if (loginResponse.data) {
          setUser(loginResponse.data); // Set user state
          localStorage.setItem('user', JSON.stringify(loginResponse.data));
        }
        return loginResponse;
      }
      throw new Error(registerResponse.message || 'Registration failed');
    } catch (error) {
      setError('Registration failed');
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  

  return {
    user,
    setUser,
    login,
    logout,
    register,
    loading,
    error,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };
};