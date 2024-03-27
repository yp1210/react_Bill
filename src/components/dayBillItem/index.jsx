import React, { useMemo, useState } from 'react';
import Icon from '../Icon';
import { getEnum } from '@/utils/enums';
import './index.scss';

const dayBillItem = (props) => {
  const { item } = props;
  const { money, type, useFor } = item || {};
  
  return <div className='dayBillItemWrap'>
    <div className='dayBillItem'>
      <div className='dayBillLeft'>
        <Icon type={useFor} />
        <span className='billName'>{getEnum(type, useFor)}</span>
      </div>
      <span>{money}</span>
    </div>
  </div>
}

export default dayBillItem;