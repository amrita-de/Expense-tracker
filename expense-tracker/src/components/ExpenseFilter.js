
import React from 'react';

const ExpenseFilters = ({ filters, onFilterChange }) => {
  const handleStartDateChange = (e) => {
    onFilterChange({ ...filters, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    onFilterChange({ ...filters, endDate: e.target.value });
  };

  const handleCategoryChange = (e) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  return (
    <div className="expense-filters">
      <div>
        <label>Start Date: </label>
        <input type="date" value={filters.startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>End Date: </label>
        <input type="date" value={filters.endDate} onChange={handleEndDateChange} />
      </div>
      <div>
        <label>Category: </label>
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilters;
