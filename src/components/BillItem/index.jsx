import React, { useMemo, useState } from 'react';
import Icon from '../Icon';
import DayBillItem from '@/components/dayBillItem';
import './index.scss';

const BillItem = (props) => {
  const [open, setOpen] = useState(false);
  const { item, showExpand } = props;
  const { date, income, balance, list, pay } = item || {};

  const iconStyle = useMemo(() => {
    const style = {
      transformOrigin: 'center',
      transition: 'all 0.3s',
      transform: 'rotate(180deg)',
    }
    return open ? { ...style, transform: 'rotate(0deg)' } : style
  }, [open])

  return <div className='BillItem'>
    <div className='BillItemTop' onClick={() => { setOpen(item => !item) }}>
      <div className='BillItemHeader'>
        <span>{date}</span>
        {showExpand && <Icon type='arrowcircle' style={iconStyle} />}
      </div>
      <div className='BillItemContent'>
        <span>支出{income}</span>
        <span>收入{pay}</span>
        <span>结余{balance}</span>
      </div>
    </div>
    {open &&  showExpand && list.map((items, index) =><DayBillItem key={index} item={items} />)}
  </div>
}

export default BillItem;