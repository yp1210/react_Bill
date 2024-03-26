import React, { useMemo } from 'react';
import Icon from '../Icon';
import './index.scss';

const BillItem = (props) => {

  const { item } = props;
  const { date, income, balance, list, pay } = item || {};

	return <div className='BillItem'>
		<div className='BillItemHeader'>
      <span>{date}</span>
      <Icon type='arrowcircle' />
    </div>
		<div className='BillItemContent'>
      <span>支出{income}</span>
      <span>收入{pay}</span>
      <span>结余{balance}</span>
    </div>
	</div>
}

export default BillItem;