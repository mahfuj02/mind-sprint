// src/hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { Course } from '../types/course.types';
import courseService from '../services/courseService';

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await courseService.getCourses();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCourses();
    }, []);
    return { courses, loading, error, refetch: fetchCourses };

}