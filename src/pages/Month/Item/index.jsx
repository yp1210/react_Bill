import React from 'react';
import './index.scss';

const Item = ({text, count}) => {
  return <div className='item'>
    <div>
      <div>{text}</div>
      <div>{count}</div>
    </div>
  </div>
}

export default Item;