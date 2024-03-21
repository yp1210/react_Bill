import React from 'react';
import './index.scss';

const Item = ({ text, count }) => {
  return <div className='item'>
    <div>{count}</div>
    <div>{text}</div>
  </div>
}

export default Item;