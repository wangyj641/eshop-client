import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from 'react-icons/bs';
import { history, useLocation } from 'umi';

export interface ItemProps {
  show?: Boolean;
  pathname?: String;
}

const MenuBar = (props: ItemProps) => {
  const { show, pathname } = props;
  const location = useLocation()

  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  const items = [
    {
      title: 'Home',
      selectedIcon: <BsHouseDoorFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsHouseDoor style={{ fontSize: '1.5rem' }} />,
      link: '/'
    },
    {
      title: 'Order',
      selectedIcon: <BsBagFill style={{ fontSize: '1.5rem' }} />,
      icon: <BsBag style={{ fontSize: '1.5rem' }} />,
      link: '/order'
    },
    {
      title: 'User',
      selectedIcon: <BsPersonFill style={{ fontSize: '1.5rem' }} />,
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
                selectedIcon={item.selectedIcon}
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
