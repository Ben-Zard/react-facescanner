import React from 'react'

const ImgLinkForm = () => {
    return (
    <div>
        <p className='flexcenter'>
            {  `This ??? has the abilty to detect any face` }
        </p>
        <div className='flexcenter'> 
            <input type= 'text'/> 
            <button> Detect Face</button>
        </div>
    </div>
  )
};

export default ImgLinkForm