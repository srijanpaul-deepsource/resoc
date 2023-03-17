import React, { useState, useEffect } from 'react';
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
const loaderImg = require('../assets/img/earth.png')

function Loader() {
  const [rotation, setRotation] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 10);
    }, 50);
    setTimeout(() => {
      setShowMessage(true);
    }, 7500);
    return () => {
      clearInterval(interval);
      clearTimeout();
    };
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
      {showMessage && (
        <span style={{
          marginTop: '100px',
          textAlign: 'center',
        }}>
          Still loading..?
          <br />
          Wait for a few seconds, or <Link className='text-var' to='/' > go back </Link> and try again.
        </span>
      )}
    </div>
  );
}

export default Loader;
