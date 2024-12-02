import axios from 'axios';
import { API_BASE_URL } from './api.config';
import { Category } from '../types/category.types';

interface APIResponse {
    status: 'success' | 'error';
    data?: Category[];
    message?: string;
    error?: string;
}
const categoryService = {
    async getCategories() {
        try {
            const response = await axios.get<APIResponse>(`${API_BASE_URL}/categories/read.php`);
            console.log("check category", response.data.data)
            if (response.data.status === 'error') {
                throw new Error(response.data.message || 'Failed to fetch categories');
            }
            return response.data.data || [];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Network error occurred');
            }
            throw error;
        }
    }
};

export default categoryService;
