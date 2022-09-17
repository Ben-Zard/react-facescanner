import React from "react"

const FaceScanner = ({input,box}) => {
  return (
    <div className='container'>
     <div className="centerface">
      <img id = 'inputimg' alt="" src={input}className="photo"></img>
      <div className="boudingbox" style = {{top:box.topRow , bottom:box.bottomRow, right:box.rightCol , left:box.leftCol }}></div>
     </div>
    </div>
  )
}

export default FaceScanner;