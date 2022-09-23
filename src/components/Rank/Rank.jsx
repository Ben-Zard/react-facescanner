import React from 'react'
import { useState } from 'react';
const Rank = () => {

  const [data,setData] = useState({
    name: '',
    entires : 0
 });

  const {entires,name} = data;

  // fetch('http://localhost:4000/users')
  // .then((json) => {
  //   setData({
  //     name: name,
  //     entires: entires
  //   });
  // })
  

  return (
    <div className='rankhead'>{`${name} current Ranks is ${entires}`}</div>
  )
}

export default Rank