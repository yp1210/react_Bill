import React from 'react';
import { NavBar } from 'antd-mobile';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import './index.scss';

const Header = () => {
  return <div className='header'>
    <DownOutline /> <UpOutline />
  </div>
}

export default Header;