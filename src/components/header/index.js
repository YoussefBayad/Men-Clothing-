import React from 'react';
import Filter from './Filter';
import './index.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">MC</h1>
      <div className="right-nav">
        <ul className="nav-item">
          <li>
            <a href="#">Catalog</a>
          </li>
          <li>
            <a href="#">Trends</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <Filter />
      </div>
    </div>
  );
};

export default Navbar;
