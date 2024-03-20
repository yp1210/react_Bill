import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import './index.scss';
import { useDispatch } from 'react-redux'
import { asyncGetBillList } from '@/store/bill';

const Layout = () => {
  const dispatch = useDispatch();

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: '消息',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  useEffect(() => {
    dispatch(asyncGetBillList())
  }, [dispatch])

  return <div className='layout'>
    <div className='container'>
      <Outlet />
    </div>
    <div className='footer'>
      <TabBar>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  </div>
}

export default Layout;