import '../../css/parallaxcomponent.css';
import React, { useState, useEffect, useRef } from 'react';


const ParallaxComponent = () => {
    // State to keep track of the scrolled distance
    const [scrollY, setScrollY] = useState(0);
    const parallaxRef = useRef(null);

    useEffect(() => {
        // Handler to update state when user scrolls
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means useEffect will run once when component mounts

    // Compute the translateY value for the parallax effect
    const translateY = scrollY * 0.5;

    return (
        <div className="parallaxContainer" ref={parallaxRef}>
            {/* Background layer with parallax effect */}
            <div className="backgroundLayer" style={{ transform: `translateY(-${translateY}px)` }}>
                Background Content
            </div>
            {/* Foreground layer */}
            <div className="foregroundLayer">
                Foreground Content
            </div>
        </div>
    );
}

export default ParallaxComponent;
