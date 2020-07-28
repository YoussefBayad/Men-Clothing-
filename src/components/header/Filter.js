import React from 'react';
import search from '../../assets/icons/search.svg';
const Filter = () => {
  return (
    <div className="filter-box">
      <input className="filter" type="text" placeholder="Search ..." />
      <img src={search} />
    </div>
  );
};

export default Filter;
