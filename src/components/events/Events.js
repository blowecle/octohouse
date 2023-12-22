import React, { useState, useRef } from 'react';
import ThreeScene from './ThreeScene';
import '../../css/three.css';

const Events = () => {
    const container = useRef();
    const [cameraIndex, setCameraIndex] = useState(0);

    const handleButtonClick = () => {
        setCameraIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div className="three_bg" ref={container}>
            <button className="test_button" onClick={handleButtonClick}>Switch Camera</button>
            <ThreeScene cameraIndex={cameraIndex} container={container}/>
        </div>
    );
};

export default Events;
