// src/services/courseService.ts
import axios from 'axios';
import { API_BASE_URL } from './api.config';
import { Course, CourseInput } from '../types/course.types';

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
            return response.data.data || [];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Network error occurred');
            }
            throw error;
        }
    },

    async createCourse(courseData: CourseInput) {
        try {
            const response = await axios.post<APIResponse>(
                `${API_BASE_URL}/tutorials/create.php`,
                courseData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async updateCourse(id: number, courseData: Partial<Course>) {
        const response = await axios.put<APIResponse>(
          `${API_BASE_URL}/tutorials/update.php`,
          { id, ...courseData }
        );
        return response.data;
      },

    async deleteCourse(id: number) {
        const response = await axios.delete<APIResponse>(
          `${API_BASE_URL}/tutorials/delete.php`,
          { data: { id } }
        );
        return response.data;
       }
};

export default courseService;