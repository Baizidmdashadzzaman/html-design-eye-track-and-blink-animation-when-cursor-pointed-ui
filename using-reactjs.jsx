import React, { useEffect } from 'react';
import './EyeComponent.css'; // Import the CSS file

const EyeComponent = () => {
  useEffect(() => {
    const eye = document.querySelector('.iris');
    const eye2 = document.querySelector('.iris2');

    const handleMouseMove = (event) => {
      const x = -(window.innerWidth / 2 - event.pageX) / 35;
      const y = -(window.innerHeight / 2 - event.pageY) / 35;

      eye.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
      eye2.style.transform = `rotate(-45deg) translateY(${y}px) translateX(${x}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="maincontainereye">
      <div className="containereye" style={{ marginRight: '100px' }}>
        <div className="eyeBall">
          <div className="iris"></div>
        </div>
        <div className="eyeLid"></div>
        <div className="lid"></div>
      </div>
      <div className="containereye">
        <div className="eyeBall">
          <div className="iris2"></div>
        </div>
        <div className="eyeLid"></div>
        <div className="lid"></div>
      </div>
    </div>
  );
};

export default EyeComponent;
