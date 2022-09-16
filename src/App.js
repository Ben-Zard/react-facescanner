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

function handleInput(e){
  console.log(e.target.value)
}

  function handleClick() {
    console.log('click');
    app.models.predict("https://samples.clarifai.com/face-det.jpg").then(
    function(res){
      console.log(res)
    },
    function(err){});
  }
  return (
  <>
    <Particles/>
<Navigation/>
<Logo/>
<Rank/>

<ImgLinkFrom handleInput = {handleInput} handleClick={handleClick} />
<FaceScanner/>
</>
  );
 }
 export default App