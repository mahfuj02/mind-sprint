import React from 'react';
interface Props{
    onSort: (value: string) => void;
    isDarkMode: boolean;
}
const SortingBox: React.FC<Props> = ({ onSort, isDarkMode }) => {
  return (
    <select 
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSort(e.target.value)}
      className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
        isDarkMode 
          ? "bg-darkHeaderFooter text-textDark border-gray-700 focus:border-lightHeaderFooter" 
          : "bg-lightHeaderFooter text-textLight border-gray-300 focus:border-darkHeaderFooter"
      }`}
    >
      <option value="all">All Courses</option>
      <option value="popular">Most Popular</option>
      <option value="newest">Newest</option>
      <option value="duration">Duration</option>
    </select>
  );
};

export default SortingBox;