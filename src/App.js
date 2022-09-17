import "./sass/main.scss";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImgLinkFrom from "./components/ImgLinkForm/ImgLinkForm.jsx";
import Rank from "./components/Rank/Rank"
import Particles from "./components/Particles/Particles"
import FaceScanner from "./components/FaceScanner/FaceScanner"
import { useState,useEffect } from "react";
import Clarifai from 'clarifai';

const app = new Clarifai.App (
  {apiKey:'388e19f96d044b5e83347ed477d2265c'}
  );
function App() {
  const [input, setInput] = useState('');
  const [img,setImg] = useState('');
  const [box,setbox] = useState({});

//  useEffect(e =>{
//      setInput(e.target.value)
//   },[]);
  
function handleInput(e){
  setInput(e.target.value);
  e.preventDefault();
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


  return (
  <>
<Particles/>
<Navigation/>
<Logo/>
<Rank/>
<ImgLinkFrom handleInput = {handleInput} handleClick={handleClick} />
<FaceScanner box={box} input = {input}/>
</>
  );
 }
 export default App