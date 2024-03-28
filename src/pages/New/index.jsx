import React, { useMemo, useState } from 'react';
import { NavBar, Button, Input, DatePicker } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { buttonList } from '@/constants/type';
import Icon from '@/components/Icon';
import dayjs from 'dayjs';
import TypeItem from '@/components/TypeItem';
import { billListData } from '@/constants/type'

const New = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('pay');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState(dayjs().toJSON());
  const [visible, setVisible] = useState(false);


  const _buttonList = useMemo(() => {
    buttonList.forEach(items => {
      items.isSelectd = false;
      if (items.type === type) {
        items.isSelectd = true;
      }
    })
    return buttonList;
  }, [type])

  const renderButton = () => _buttonList.map((items, index) => <Button size='mini' style={{ '--text-color': `var(--adm-button-text-color)`, marginRight: '10px' }} onClick={() => { setType(items.type) }} key={index} shape='rounded' color={items.isSelectd ? 'primary' : ''}>
    {items.name}
  </Button>)

  const renderList = () => {
    return billListData[type].map((items, index) => <TypeItem key={index} item={items} />)
  }

  console.log(date);

  return <div className='new'>
    <NavBar onBack={() => { navigate(-1) }}>记一笔</NavBar>
    <div className='buttonWrap'>
      {renderButton()}
    </div>
    <div className='formWrap'>
      <div className='form'>
        <div className='date' onClick={() => { setVisible(true) }}>
          <Icon type='calendar' />
          <span>{dayjs(date).isSame(dayjs(), 'day') ? '今天' : dayjs(date).format('YYYY-MM-DD')}</span>
        </div>
        <div className='formInput'>
          <Input
            value={money}
            className='input'
            placeholder="0.00"
            style={{ '--text-align': 'right' }}
            clearable
            onChange={(value) => { setMoney(value) }}
          />
          <span className="iconYuan">¥</span>
        </div>
        <DatePicker
          title='时间选择'
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          max={new Date()}
          onConfirm={val => {
            setDate(val.toJSON())
          }}
          value={dayjs(date).toDate()}
        />
      </div>
    </div>
    {renderList()}

  </div>
}

export default New;