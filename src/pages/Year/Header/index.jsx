import React, { useMemo, useState, useEffect } from 'react';
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import { DatePicker } from 'antd-mobile'
import './index.scss';
import Item from '@/pages/Month/Item';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectMonth } from '@/store/bill';
import { jsonDateToObj } from '@/utils/time';
import { list } from '@/constants/month';
import dayjs from 'dayjs';

const Header = () => {
  const now = new Date()
  const [visible, setVisible] = useState(false);
  const { selectMonth, currentMonthBill } = useSelector(state => state.bill);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectMonth({
      value: dayjs().toJSON(),
      type: 'year'
    }))
  }, [])

  const billTotalList = useMemo(() => {
    if(!currentMonthBill?.length) return list;
    const newList = currentMonthBill.reduce((total, cur) => {
      const obj = total?.find(items => items.type === cur.type);
      obj.count = obj?.count ? obj?.count + Number(cur?.money) : Number(cur?.money)
      return total;
    }, list);

    newList[2].count = newList[1].count + newList[0].count;

    return newList;
  }, [currentMonthBill, selectMonth])

  return <div className='yearHeader'>
    <div className='headerWrap' onClick={() => { setVisible(items => !items) }}>
      <span className='headerDate'>{jsonDateToObj(selectMonth).format('YYYY')}年</span>
      {!visible ? <DownOutline /> : <UpOutline />}
    </div>
    <div className='headerContent'>
      {billTotalList?.map((items, index) => <Item key={index} text={items?.text} count={items?.count} />)}
    </div>

    <DatePicker
      title='时间选择'
      visible={visible}
      onClose={() => {
        setVisible(false)
      }}
      max={now}
      precision='year'
      onConfirm={val => {
        dispatch(setSelectMonth({
          value: val.toJSON(),
          type: 'year'
        }))
      }}
      value={jsonDateToObj(selectMonth)?.toDate()}
    />
  </div>
}

export default Header;