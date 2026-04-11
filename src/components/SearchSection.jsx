import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B7B1B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const SearchSection = ({ onSearch, initialValue = '' }) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query.trim());
    } else {
      // Fallback for pages without onSearch
      if (query.trim()) {
        navigate(`/courses?search=${encodeURIComponent(query.trim())}`);
      } else {
        navigate('/courses');
      }
    }
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    if (onSearch) {
      onSearch(tag);
    } else {
      navigate(`/courses?search=${encodeURIComponent(tag)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    // Real-time filtering if onSearch is provided
    if (onSearch) {
      onSearch(val.trim());
    }
  };

  return (
    <div className="search-section">
      <div className="search-container">
        {/* Search Bar Group */}
        <div className="search-bar-wrap">
          <div className="search-input-group">
            <IconSearch />
            <input 
              type="text" 
              placeholder="Search for Security Officer, SSO, Supervisor courses......" 
              className="search-input"
              value={query}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

        {/* Popular Tags Group */}
        <div className="popular-tags-wrap">
          <span className="popular-label">Popular:</span>
          <div className="tags-list">
            <div className="tag-item" onClick={() => handleTagClick('SSO')}>SSO Course</div>
            <div className="tag-item" onClick={() => handleTagClick('Security Officer')}>Security Officer</div>
            <div className="tag-item" onClick={() => handleTagClick('PSDWLF')}>PSDWLF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
