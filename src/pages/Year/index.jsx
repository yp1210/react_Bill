import React from 'react';
import './index.scss';
import Header from './Header';
import Content from './Content';

const Year = () => {
  return <div className='year'>
    <div className='content'>
      <Header />
      <Content />
    </div>
  </div>
}

export default Year;