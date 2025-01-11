import React, { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  practiceAreas: string[];
  handleSearch: (query: string) => void;
  handleExpertiseChange: (expertise: string) => void;
}

const Search: React.FC<SearchProps> = ({
  practiceAreas,
  handleSearch,
  handleExpertiseChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-16 max-w-6xl mx-auto relative z-10 items-start">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-[700px] pl-10 pr-4 py-2 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={onSearchChange}
            aria-label="Search attorneys"
          />
        </div>

        <div className="relative flex-1">
          <select
            className="w-[300px] px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            aria-label="Select expertise"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleExpertiseChange(e.target.value)
            }
          >
            <option value="">Select Expertise</option>
            {practiceAreas.map((expertise) => (
              <option key={expertise} value={expertise}>
                {expertise}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => handleSearch(searchQuery)}
          className="bg-foreground text-white px-8 py-2 font-semibold hover:bg-muted-foreground transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
