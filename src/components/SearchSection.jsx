import React from 'react';
import { Search } from 'lucide-react';

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        {/* Search Bar Group */}
        <div className="search-bar-wrap">
          <div className="search-input-group">
            <Search className="search-icon" size={20} color="#B7B1B1" />
            <input 
              type="text" 
              placeholder="Search for Security Officer, SSO, Supervisor courses......" 
              className="search-input"
            />
          </div>
          <button className="search-button">Search</button>
        </div>

        {/* Popular Tags Group */}
        <div className="popular-tags-wrap">
          <span className="popular-label">Popular:</span>
          <div className="tags-list">
            <div className="tag-item">SSO Course</div>
            <div className="tag-item">Security Officer</div>
            <div className="tag-item">PSDWLF</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
