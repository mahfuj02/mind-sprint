// src/services/courseService.ts
import axios from 'axios';
import { API_BASE_URL } from './api.config';
import { Course } from '../types/course.types';

interface APIResponse {
    status: 'success' | 'error';
    data?: Course[];
    message?: string;
    error?: string;
}

const courseService = {
    async getCourses() {
        try {
            const response = await axios.get<APIResponse>(`${API_BASE_URL}/tutorials/read.php`);
            
            if (response.data.status === 'error') {
                throw new Error(response.data.message || 'Failed to fetch courses');
            }
            console.log(response.data.data)
            return response.data.data || [];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Network error occurred');
            }
            throw error;
        }
    }
};

export default courseService;