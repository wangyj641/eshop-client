import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';

export default function (props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='home'>
      <Header />
      <Search />
      <Hot />
    </div>
  )
}