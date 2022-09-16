import React from 'react'

const ImgLinkForm = ({handleClick,handleInput}) => {
    return (
        <div className='flexcenter'> 
        <p className='body'>
            {  `This ??? has the abilty to detect any face` }
        </p> 
            <input className = "input"type= 'text' onChange={handleInput}/> 
            <button onClick={handleClick}> Detect Face</button>
        </div>

  )
};

export default ImgLinkForm