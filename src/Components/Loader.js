
import React, { useState, useEffect } from 'react';
import '../assets/css/style.css'
const loaderImg = require('../assets/img/earth.png')

function Loader() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 10);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">
      <img
        src={loaderImg}
        alt="loader"
				width="30" 
				height="30" 
        style={{
          transform: `rotate(${rotation}deg)`,
          position: 'absolute',
        }}
      />
    </div>
  );
}

export default Loader;
