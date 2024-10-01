import { useState } from 'react';

function SearchBar({ query, setQuery, onSearchInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchInput(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search for a game..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
