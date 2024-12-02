// components/SortingBox.tsx
import React from 'react';
import { useCategories } from '../../hooks/useCategories';

interface Props {
  onSort: (value: string) => void;
  isDarkMode: boolean;
}

const SortingBox: React.FC<Props> = ({ onSort, isDarkMode }) => {
  const { categories, loading } = useCategories();
  console.log("categories ,", categories);
  if (loading) return <div>Loading categories...</div>;

  return (
    <select 
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSort(e.target.value)}
      className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
        isDarkMode 
          ? "bg-darkHeaderFooter text-textDark border-gray-700 focus:border-lightHeaderFooter" 
          : "bg-lightHeaderFooter text-textLight border-gray-300 focus:border-darkHeaderFooter"
      }`}
    >
      <option value="">All Courses</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SortingBox;