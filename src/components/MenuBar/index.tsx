import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { BsHouseDoor, BsBag, BsPerson } from 'react-icons/bs';
import { history, useLocation } from 'umi';

export interface Props {
  show?: Boolean;
  pathname?: String;
}

const MenuBar = (props: Props) => {
  const { show, pathname } = props;
  const location = useLocation()

  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  const items = [
    {
      title: 'Home',
      icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
      link: '/'
    },
    {
      title: 'Order',
      icon: <BsBag style={{ fontSize: '1.5rem' }} />,
      link: '/order'
    },
    {
      title: 'User',
      icon: <BsPerson style={{ fontSize: '1.5rem' }} />,
      link: '/user'
    }
  ]

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  return (
    <div className='menu-bar'>
      <TabBar hidden={!show} activeKey={pathname} onChange={value => setRouteActive(value)}>
        {
          items.map(item => {
            return (
              <TabBar.Item
                key={item.link}
                icon={item.icon}
                title={item.title}
              />
            )
          })
        }
      </TabBar>
    </div>
  )
}

export default MenuBar;
