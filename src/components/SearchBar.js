function SearchBar({ query, setQuery }) {
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="Search for a game..."
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
