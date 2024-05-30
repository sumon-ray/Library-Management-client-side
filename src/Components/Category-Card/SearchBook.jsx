import React from "react";

const SearchBook = ({ searchQuery, handleInputChange, handleSearch }) => {
  return (
    <div className="flex items-center gap-4 mt-3 justify-center">
      <input
        placeholder="Search"
        className="bg-gray-400 rounded-md input-sm"
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-sm bg-blue-200 px-3 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBook;
