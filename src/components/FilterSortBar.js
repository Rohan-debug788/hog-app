// src/components/FilterSortBar.js
import React from 'react';

function FilterSortBar({ showGreasedOnly, setShowGreasedOnly, setSortBy }) {
  const handleFilterChange = (e) => {
    setShowGreasedOnly(e.target.checked);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="ui form" style={{ padding: '20px' }}>
      <div className="inline fields">
        <div className="field">
          <label>
            <input
              type="checkbox"
              checked={showGreasedOnly}
              onChange={handleFilterChange}
            />
            Greased Hogs Only
          </label>
        </div>
        <div className="field">
          <label>Sort By:</label>
          <select onChange={handleSortChange} className="ui dropdown">
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSortBar;
