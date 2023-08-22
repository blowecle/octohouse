import React, { useState, useEffect, useRef } from 'react';
import '../../css/parallaxmultilayer.css';

const ParallaxMultiLayer = () => {
    const [scrollY, setScrollY] = useState(0);
    const parallaxRef = useRef(null); // Reference to the parallax container

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                // Calculate the offset of the parallax container relative to the viewport's top
                const offsetTop = parallaxRef.current.getBoundingClientRect().top;
                setScrollY(window.scrollY - offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="multiParallaxContainer" ref={parallaxRef}>
            <div 
                className="layer1" 
                style={{ transform: `translateY(${scrollY * 0.1}px)` }} 
            />
            <div 
                className="layer2" 
                style={{ transform: `translateY(${scrollY * -0.05}px)` }} 
            />
            <div className="contentLayer">
                Scroll &amp; Watch the Magic!
            </div>
        </div>
    );
}

export default ParallaxMultiLayer;
