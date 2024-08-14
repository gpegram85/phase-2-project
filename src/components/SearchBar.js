import { useState } from "react"

function SearchBar({ onSearchInput }) {

    const [query, setQuery] = useState("")

    const handleChange = (e) => {
        const searchQuery = e.target.value
        setQuery(searchQuery)
        onSearchInput(searchQuery)
    }

    return(
        <div className="search-bar">
            <input
                type="text"
                id="search"
                placeholder="Search for a game..."
                value={query}
                onChange={handleChange}
                />
        </div>
    )
}

export default SearchBar