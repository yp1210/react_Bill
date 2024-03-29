import React, { useMemo, useState } from 'react';
import { NavBar, Button, Input, DatePicker, Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { buttonList } from '@/constants/type';
import Icon from '@/components/Icon';
import dayjs from 'dayjs';
import TypeItem from '@/components/TypeItem';
import { billListData } from '@/constants/type'
import { useDispatch } from 'react-redux';
import { saveBill as saveBillList } from '@/store/bill';

const New = () => {
  const navigate = useNavigate();
  const [type, setType] = useState('pay');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState(dayjs().toJSON());
  const [visible, setVisible] = useState(false);
  const [useFor, setUseFor] = useState('');

  const dispatch = useDispatch();

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
    return billListData[type].map((items, index) => <TypeItem onSelect={(val) => { setUseFor(val) }} key={index} item={items} type={useFor} />)
  }

  const saveBill = () => {
    if (!money || !useFor) {
      Toast.show({
        content: '缺少必填字段',
      })
      return;
    }
    setDate(dayjs().toJSON())
    setMoney('');
    setUseFor('1')
    dispatch(saveBillList({
      date,
      money: type === 'pay' ? -money : + money,
      type,
      useFor,
    }))
    navigate('/')
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
    <Button block color='primary' size='large' onClick={saveBill}>
      记一笔
    </Button>
  </div>
}

export default New;