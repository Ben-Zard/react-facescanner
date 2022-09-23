import React from 'react'

const ImgLinkForm = ({handleClick,handleInput,setData,data}) => {
    function setCount() {
          fetch("http://localhost:4000/image",{
              method:'put',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  id: data.id
              })
          })
        
        .then(res => res.json())
        .then(count => {
          setData({ data:{
            entries:count
          }})
        })
    }
    return (
        <div className='flexcenter'> 
        <p className='body'>
            {  `I have the abilty to detect any face` }
        </p> 
            <input className = "input"type= 'text' onChange={handleInput}/> 
        <button onClick={handleClick} className = "button"> Detect Face</button>
        </div>

  )
};

export default ImgLinkForm