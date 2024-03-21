import React, { useState } from 'react';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import { DatePicker, Toast } from 'antd-mobile'
import './index.scss';
import Item from '@/pages/Month/Item';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectMonth } from '@/store/bill';
import dayjs from 'dayjs';

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
  const [visible, setVisible] = useState(false);
  const { selectMonth } = useSelector(state => state.bill);
  const dispatch = useDispatch();
  console.log(selectMonth, 'selectMonth');
  return <div className='header'>
    <div onClick={() => { setVisible(items => !items) }}>
      <span className='headerDate'>2024-3月账单</span>
      {!visible ? <DownOutline /> : <UpOutline />}
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
        dispatch(setSelectMonth(val.toJSON()))
      }}
      value={dayjs(selectMonth).toDate()}
    />
  </div>
}

export default Header;