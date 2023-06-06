import React, { useState, useEffect } from 'react';
import pic1 from '../assets/weightlifting-unscreen.gif';
import pic2 from '../assets/abs-unscreen.gif';
import pic3 from '../assets/battle-rope-unscreen.gif';
import pic4 from '../assets/dumbbell-unscreen.gif';
import pic5 from '../assets/checklist-unscreen.gif';

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePaths = [pic1, pic2, pic3, pic4, pic5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 2000); // Change the delay here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [imagePaths.length]);

  return (
    <div className="loading">
      <img className="loadingIcons" src={imagePaths[currentImageIndex]} alt="" />
    </div>
  );
}

export default Loading;
