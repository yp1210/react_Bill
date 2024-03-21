import React, { useState } from 'react';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import { DatePicker, Toast } from 'antd-mobile'
import './index.scss';
import Item from '@/pages/Month/Item';

const Header = () => {

  const list = [
    {
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
  ];

  const now = new Date()
  const [visible, setVisible] = useState(false)

  return <div className='header'>
    <div onClick={() => { setVisible(items => !items) }}>
      <span className='headerDate'>2024-3月账单</span>
      {visible ? <DownOutline /> : <UpOutline />}
    </div>
    <div className='headerContent'>
      {list?.map((items, index) => <Item key={index} text={items?.text} count={items?.count} />)}
    </div>

    <DatePicker
      title='时间选择'
      visible={visible}
      onClose={() => {
        setVisible(false)
      }}
      max={now}
      onConfirm={val => {
        Toast.show(val.toDateString())
      }}
    />
  </div>
}

export default Header;