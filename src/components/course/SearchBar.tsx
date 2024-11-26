// components/SearchBar.tsx
export interface SearchBarProps {
    onSearch: (query: string) => void;
    isDarkMode: boolean;
  }
  
  const SearchBar = ({ onSearch, isDarkMode }: SearchBarProps) => {
    return (
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className={`w-full px-4 py-2 text-sm rounded-lg border transition-colors ${
            isDarkMode 
              ? "bg-darkHeaderFooter text-textDark border-gray-700 placeholder-gray-400 focus:border-primary" 
              : "bg-lightHeaderFooter text-textLight border-gray-300 placeholder-gray-500 focus:border-primary"
          }`}
        />
      </div>
    );
  };
  
  export default SearchBar;