import { useState, useEffect, useRef } from 'react'
import '../../css/textscroll.css'

const TextScroll = () => {

    // State to keep track of the scrolled distance
    const [scrollY, setScrollY] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                // Calculate the offset of the parallax container relative to the viewport's top
                const offsetTop = scrollRef.current.getBoundingClientRect().top;
                setScrollY(window.scrollY - offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Compute the translateY value for the parallax effect
    const maxTranslateX = 500;  // Max distance to move from the right, you can adjust this
    const translateXValue = Math.min(maxTranslateX - scrollY, maxTranslateX);

  return (
    <div className="scroll-container" ref={scrollRef}>
        <div className="fish1" style={{ transform: `translateX(${translateXValue*.4}px)` }}>FISH</div>
        <div className="fish2" style={{ transform: `translateX(${-translateXValue*.4}px)` }}>FISH</div>
        <div className="fish3" style={{ transform: `translateX(${translateXValue*.4}px)` }}>FISH</div>
        <div className="turtle1" style={{ transform: `translateX(${translateXValue*.1}px)` }}>TURTLE</div>
        <div className="fish4" style={{ transform: `translateX(${-translateXValue*.4}px)` }}>FISH</div>
        <div className="fish5" style={{ transform: `translateX(${translateXValue*.4}px)` }}>FISH</div>
        <div className="fish6" style={{ transform: `translateX(${-translateXValue*.4}px)` }}>FISH</div>
        <div className="fish7" style={{ transform: `translateX(${translateXValue*.4}px)` }}>FISH</div>
    </div>
  )
}

export default TextScroll;