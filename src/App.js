import "./sass/main.scss";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import Register from "./components/Register/Register";
import Particles from "./components/Particles/Particles";
import { useState, useEffect} from "react";
import FaceLogic from "./components/FaceLogic/FaceLogic";
import SignIn from "./components/SignIn/SignIn";

function App() {


  const [route, setRoute] = useState("signin");
  const [signedin, setsingin] = useState (false);
  function handleRoute(route) {
    if(route === "signout"){
    setsingin(false)}
    else if (route === 'home'){
    setsingin(true);
  }
  setRoute(route);
  }

  return (
    <>
      <Particles />
      <Navigation  signedin = {signedin} handleRoute={handleRoute} />
      {route === "home" ? (
        <>
          <Logo />
          <Rank />
          <FaceLogic />
        </>
      ) : route === "signin" ? (
        <SignIn handleRoute={handleRoute} />
      ) : (
        // loadUser= {loadUser}
        <Register handleRoute={handleRoute} />
      )}
    </>
  );
}
export default App;
