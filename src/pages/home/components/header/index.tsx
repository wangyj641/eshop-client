import React, { useState, useEffect } from 'react';
import { history, useLocation, Link } from 'umi';

export interface Props {
  show?: Boolean;
}

const Header = (props: Props) => {
  const { show } = props;

  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='header'>
      <div className='header_title'>hotel</div>
      <div className='header_search'>
        <Link to='/login'>Login</Link> |
        <Link to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Header;
