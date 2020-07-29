import React from 'react';
import more from '../../assets/icons/more.svg';
import './index.scss';
const More = () => {
  return (
    <div className="more">
      <img className="arrow-bottom" alt="more.." src={more} />
    </div>
  );
};

export default More;
