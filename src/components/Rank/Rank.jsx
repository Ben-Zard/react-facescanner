import React from 'react'

const Rank = ({name,entries}) => {

  //     id:'',
//     name: '',
//     email:'',
//     entires : 0,
//     joined: "",
  return (
    <div className='rankhead'>{`${name} current Ranks is ${entries}`}</div>
  )
}

export default Rank