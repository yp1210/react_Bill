import React from 'react';
import './index.scss';

const Item = ({ text, count }) => {
  return <div className='item'>
    <div>{count || 0}</div>
    <div>{text}</div>
  </div>
}

export default Item;