import React, { useState, useEffect } from 'react';
import { history, useLocation } from 'umi';

export interface Props {
  show?: Boolean;
}

const Search = (props: Props) => {
  const { show } = props;

  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className=''>
      Search
    </div>
  )
}

export default Search;
