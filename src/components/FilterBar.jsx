import React from "react";

const FilterBar = ({ serviceFilter, setServiceFilter, industryFilter, setIndustryFilter }) => {
  return (
    <div className="flex justify-between mb-4 text-white">
      <div>
        <label>Filter by Service</label>
        <select value={serviceFilter} onChange={e => setServiceFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Branding">Branding</option>
          <option value="UI/UX">UI/UX</option>
          {/* Add more */}
        </select>
      </div>
      <div>
        <label>Filter by Industry</label>
        <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Beverage">Beverage</option>
          {/* Add more */}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
