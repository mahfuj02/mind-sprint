// src/hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { Course } from '../types/course.types';
import courseService from '../services/courseService';

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true);
                const data = await courseService.getCourses();
                setCourses(data);
                setError(null);
            } catch (err) {
                console.error('Detailed error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch courses');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};