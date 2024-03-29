import React, { useEffect, useMemo, useState } from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import './index.scss';

const TypeItem = (props) => {
  const [selectedType, setSelectedType] = useState('');
  const { item , onSelect, type } = props;
  const { name, list } = item || {};

  const onComSelect = (val) => {
    setSelectedType(val)
    onSelect?.(val)
  }

  const renderIcon = () => {
    return list.map((items, index) => <div onClick={() => { onComSelect(items.type)} } key={index} className={classNames('iconItem', items.type === (type || selectedType) && 'iconItemSelected')}>
      <Icon type={items.type} />
      <span>{items.name}</span>
    </div>)
  }

  return <div className='TypeItem'>
    <div className='TypeItemTitle'>{name}</div>
    <div className='typeItemList'>
      {renderIcon()}
    </div>
  </div>
}

export default TypeItem;