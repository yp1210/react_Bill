import React from 'react';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import './index.scss';
import Item from '@/pages/Month/Item';

const Header = () => {

  const list = [{
    text: '支出',
    count: '21'
  },
  {
    text: '收入',
    count: '21'
  },
  {
    text: '结余',
    count: '21'
  },
]

  return <div className='header'>
    <div>
      <span>2024-3月账单</span>
      <DownOutline /> <UpOutline />
    </div>
    <div className='headerContent'>
      {list?.map((items, index) => <Item key={index} text={items?.text} count={items?.count} />)}
    </div>
  </div>
}

export default Header;