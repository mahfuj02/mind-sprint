// hooks/useCategories.ts
import { useState, useEffect } from 'react';
import { Category } from '../types/category.types';
import categoryService from '../services/categoryService';

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                const data = await categoryService.getCategories();
                setCategories(data);
                setError(null);
            } catch (err) {
                console.error('Category fetch error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return { categories, loading, error };
};