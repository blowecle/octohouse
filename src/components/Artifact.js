import React, { useState } from "react";
import './artifact.css';

const Artifact = ({artifact}) => {
    console.log(artifact.images)
    const [index, setIndex] = useState(0);
      
    const handlePrev = () => {
      setIndex(index === 0 ? artifact.images.length - 1 : index - 1);
    };
      
    const handleNext = () => {
      setIndex(index === artifact.images.length - 1 ? 0 : index + 1);
    };

    return (
            <div className='artifact-container'>
                <div className='artifact-images'>
                    <div className="carousel">
                    <img className="carousel-image" src={artifact.images[index]} alt="" />
                    <div className="button-container">
                        <button className="carousel-button carousel-button-prev" onClick={handlePrev}>
                            Prev
                        </button>
                        <button className="carousel-button carousel-button-next" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                    </div>
                </div>
                <div className='artifact-info'>{`${artifact.name}`}</div>
            </div>
    )
}

export default Artifact;