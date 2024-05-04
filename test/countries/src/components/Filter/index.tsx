import React from 'react';

const Filter = ({genderFilter, setGenderFilter}:any) => {
  
  const handleGenderFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(event.target.value);
  };

  return (<div>
    <label htmlFor="genderFilter">Filter by Gender:</label>
    <select id="genderFilter" value={genderFilter} onChange={handleGenderFilterChange}>
      <option value="All">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>);
};

export default Filter;