import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.less';

import { HomeOutlined, UserOutlined, OrderOutlined } from '@ant-design/icons';

export default MenuBar(props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='menu-bar'>
      <TabBar>
        <TabBar.Item
          icon={<HomeOutlined />}
          selectedIcon={<HomeOutlined />}
          title="首页"
        >
          <div className='menu-bar-item'>
            <Home />
          </div>
        </TabBar.Item>


    </div>
  )
}
