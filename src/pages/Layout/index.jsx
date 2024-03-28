import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import './index.scss';
import { useDispatch } from 'react-redux'
import { asyncGetBillList } from '@/store/bill';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [key, setKey] = useState('');

  console.log(pathname, pathname.replace(/\//, ''));
  const tabs = [
    {
      key: '',
      title: '月账单',
      icon: <AppOutline />,
    },
    {
      key: 'new',
      title: '记一笔',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'year',
      title: '年度账单',
      icon: <UserOutline />,
    },
  ]

  useEffect(() => {
    dispatch(asyncGetBillList())
  }, [dispatch])

  useEffect(() => {
    setKey(pathname ? pathname.replace(/\//, '') : '')
  }, [])

  const onChange = (key) => {
    setKey(key)
    navigate(`/${key}`)
  }

  return <div className='layout'>
    <div className='container'>
      <Outlet />
    </div>
    <div className='footer'>
      <TabBar activeKey={key} onChange={onChange}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  </div>
}

export default Layout;