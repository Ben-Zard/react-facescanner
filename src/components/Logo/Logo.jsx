
import React from 'react';
import Tilt from 'react-parallax-tilt';
import one from "./one.png"

const Logo = () => (
  <Tilt
    className="parallax-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={one} className="innerpic" alt="pic" />
  </Tilt>
 );
export default Logo;

