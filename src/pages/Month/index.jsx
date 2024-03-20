import React from 'react';
import { NavBar } from 'antd-mobile';
import './index.scss';
import Header from './Header';

const Month = () => {
  return <div className='month'>
    <NavBar back={null}>月度收支</NavBar>
    <div className='content'>
      <Header />
    </div>
  </div>
}

export default Month;