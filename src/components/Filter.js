import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Filter;