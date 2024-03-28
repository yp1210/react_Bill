import React, { useMemo } from 'react';
import BillItem from '@/components/BillItem';
import { useSelector } from 'react-redux';
import { jsonDateToObj } from '@/utils/time';
import { Empty } from 'antd-mobile';

const Content = () => {
  const { currentMonthBill } = useSelector(state => state.bill);

  // 当前选中的月份数据
  const currentDayBill = useMemo(() => {
    const newList = currentMonthBill.reduce((total, cur) => {
      const { date, type, money } = cur || {};
      const findObj = total.find(items => jsonDateToObj(items.date).isSame(jsonDateToObj(date), 'month'));
      
      const items = {};
      if (!findObj) {
        items.date = jsonDateToObj(date).format('YYYY-MM');
        items.pay = type === 'pay' ? money : 0;
        items.income = type === 'income' ? money : 0;
        items.list = [cur];
        total.push(items);
      } else {
        findObj.pay = findObj.pay + (type === 'pay' ? money : 0);
        findObj.income = findObj.income + (type === 'income' ? money : 0);
        findObj.list.push(cur);
      }
      return total;
    }, [])

    newList.forEach(items => {
      items.balance = items.income + items.pay
    })
    return newList;
  }, [currentMonthBill])

  const renderBillItem = () => {
    if (!currentDayBill?.length) {
      return <Empty
        style={{ padding: '64px 0' }}
        imageStyle={{ width: 128 }}
        description='暂无数据'
      />
    }
    return currentDayBill.map((items, key) => {
      return <BillItem key={`${key}_${items.id}`} item={items}/>
    })
  }

  return <div className='Content'>
    {renderBillItem()}
  </div>
}

export default Content;