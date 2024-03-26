import React, { useMemo, useState } from 'react';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import { DatePicker, Toast } from 'antd-mobile'
import './index.scss';
import Item from '@/pages/Month/Item';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectMonth } from '@/store/bill';
import { jsonDateToObj } from '@/utils/time';
import { list } from '@/constants/month';

const Header = () => {
  const now = new Date()
  const [visible, setVisible] = useState(false);
  const { selectMonth, billList } = useSelector(state => state.bill);
  const dispatch = useDispatch();

  // 当前选中的月份数据
  const MonthTotalBill = useMemo(() => billList.filter(items => jsonDateToObj(items?.date)?.isSame(jsonDateToObj(selectMonth), 'month'), [billList, selectMonth]))

  const billTotalList = useMemo(() => {
    if(!MonthTotalBill?.length) return list;
    const newList = MonthTotalBill.reduce((total, cur) => {
      const obj = total?.find(items => items.type === cur.type);
      obj.count = obj?.count ? obj?.count + Number(cur?.money) : Number(cur?.money)
      return total;
    }, list);

    newList[2].count = newList[1].count + newList[0].count;

    return newList;
  }, [MonthTotalBill])

  console.log(selectMonth, 'selectMonth', billList, billTotalList);

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
      value={jsonDateToObj(selectMonth)?.toDate()}
    />
  </div>
}

export default Header;