import axios from 'axios';
const API_BASE_URL = 'http://localhost/mindsprint-backend/api';

interface RegisterData {
    name: string;
    email: string;
    password: string;
   }
   

export const authService = {
    
  async login(email: string, password: string) {
    const response = await axios.post(`${API_BASE_URL}/users/login.php`, { email, password });
    return response.data;
  },

  async register(data: RegisterData) {
    const response = await axios.post(`${API_BASE_URL}/users/register.php`, data);
    return response.data;
  }
};
