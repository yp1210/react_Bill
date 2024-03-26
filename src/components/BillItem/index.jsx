import React, { useMemo } from 'react';
import Icon from '../Icon';
import './index.scss';

const BillItem = (props) => {

  const { billItemList } = props;

  const billObj = useMemo(() => {

  }, [billItemList])

	return <div className='BillItem'>
		<div className='BillItemHeader'>
      <span>3-24日</span>
      <Icon type='arrowcircle' />
    </div>
		<div className='BillItemContent'>
      <span>支出{}</span>
      <span>收入{}</span>
      <span>结余{}</span>
    </div>
	</div>
}

export default BillItem;