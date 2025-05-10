import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Mock search function - replace with your actual search logic
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Mock results - replace with your actual search API call
    const mockResults = [
      { id: 1, name: 'Chocolate Chip Cookie', type: 'cookie' },
      { id: 2, name: 'Vanilla Cake', type: 'cake' },
      { id: 3, name: 'Red Velvet Cookie', type: 'cookie' },
    ].filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(mockResults);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="search-container">
      {!isSearchOpen ? (
        <button
          className="search-icon-button"
          onClick={() => setIsSearchOpen(true)}
        >
          <FaSearch className="search-icon" />
        </button>
      ) : (
        <div className="search-box">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cookies, cakes..."
              autoFocus
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="clear-search-button"
              >
                <FaTimes />
              </button>
            )}
            <button type="submit" className="search-submit-button">
              <FaSearch />
            </button>
            {/* NEW CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="close-search-button"
            >
              Close
            </button>
          </form>

          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((item) => (
                <div key={item.id} className="search-result-item">
                  {item.name} ({item.type})
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
