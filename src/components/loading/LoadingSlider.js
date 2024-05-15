import React, { useState, useRef, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/loadingslider.css';

const LoadingSlider = () => {
  const afterImage = require('../artifact/jpeg-optimizer_PXL_20230808_003617536-_1_.jpeg');
  const beforeImage = require('../artifact/before.jpeg');
  const [position, setPosition] = useState(0);
  const [active, setActive] = useState(false);
  const loadingContainerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClick = () => {
    setActive(true);
    const animationDuration = 3000; // 3 seconds
    const steps = 100; // Number of steps
    const interval = animationDuration / steps;

    let count = 0;
    const intervalId = setInterval(() => {
      if (count < steps) {
        console.log('position is ', position);
        count++;
        setPosition(count);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          fadeLoadingContainer();
        }, 1500);
      }
    }, interval);
  };

  const fadeLoadingContainer = () => {
    const loadingContainer = loadingContainerRef.current;
    loadingContainer.style.transition = 'opacity 1.5s ease-out, z-index 0s 1.5s';
    loadingContainer.style.opacity = '0';
    setTimeout(() => {
      loadingContainer.style.zIndex = '-1';
      document.body.style.overflow = 'auto';
    }, 1500);
  };

  return (
    <div className="loading-container" ref={loadingContainerRef}>
      <div className="slider-container">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={afterImage} />}
          itemTwo={<ReactCompareSliderImage src={beforeImage} />}
          position={position}
        />
      </div>
      <div className="button-container">
        <div className="enter-button" onClick={handleClick} disabled={active}>
          Enter
        </div>
      </div>
    </div>
  );
};

export default LoadingSlider;