import React from 'react';
import arrowBack from '../../assets/icons/arrow-back.svg';
import arrowForward from '../../assets/icons/arrow-forward.svg';

import './index.scss';
const Showcase = () => {
  return (
    <div className="showcase">
      <div className="heading">
        <h1>A MAN MUST WEAR LIKE ONE</h1>
      </div>
      <div className="carousel">
        <img className="arrow-back" src={arrowBack} />
        <img className="arrow-forward" src={arrowForward} />
        <div className="text">
          <h2>At Work</h2>
          <p>
            orem ipsum dolor sit amet lorem orem ipsum dolor sit amet lorem orem
            ipsum dolor sit amet lorem
          </p>
          <button className="btn">Show Me</button>
        </div>
        <div className="navigation">
          <span className="circle active"> </span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
