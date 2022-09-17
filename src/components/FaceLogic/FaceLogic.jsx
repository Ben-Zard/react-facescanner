import ImgLinkFrom from "../ImgLinkForm/ImgLinkForm.jsx";
import FaceScanner from "../FaceScanner/FaceScanner"
import { useState,useEffect } from "react";
import Clarifai from 'clarifai';

const app = new Clarifai.App (
  {apiKey:'388e19f96d044b5e83347ed477d2265c'}
  );
function FaceLogic() {
  const [input, setInput] = useState('');
  const [img,setImg] = useState('');
  const [box,setbox] = useState({});

function handleInput(e){
  setInput(e.target.value);
  console.log("refresh")
}

 function calcualteface(data) {
  const face =data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
  const imagebox = document.getElementById("inputimg");
  const width =Number(imagebox.width);
  const height = Number(imagebox.height);
return{
  leftCol: face.left_col*width,
  rightCol: width - (face.right_col*width),
  topRow: face.top_row * height,
  bottomRow: height - (face.bottom_row*height),
}
 }
const displaybox=((facebox)=> {
  console.log(facebox)
  setbox(facebox)
  });
  function handleClick() {
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
      input)
    .then(res=> displaybox(calcualteface(res)))
      // console.log(res.rawData.outputs[0].data.regions[0].region_info.bounding_box)
    .catch(err=> console.log(err));
  }

return(
    <>
    
<ImgLinkFrom handleInput = {handleInput} handleClick={handleClick} />
<FaceScanner box={box} input = {input}/>
    
    </>
); 
}
export default FaceLogic;