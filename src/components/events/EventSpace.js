import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../css/eventspace.css';

const imagesReq = require.context('../../../public/images', true, /\.webp$/);

const EventSpace = ({space}) => {

    const imagePath = imagesReq(`./${space.images[0]}`);

    return (
        <div className="event-space-container">
            <div className="event-space-inner-container">
                <div className="event-space-header">
                    <div className="event-space-name">
                        <strong>{`${space.title}`}</strong>
                    </div>
                    <div className="event-space-nickname">
                        <strong>{`${space.subtitle}`}</strong>
                    </div>
                </div>
                <div className="event-space-content-container">
                    <img src={imagePath} alt="main-room" className="event-space-image"/>
                    <div className="event-space-content-container">
                        <div className="event-space-content-title">
                        {`${space.blurb}`}
                        </div>
                        <div className="event-space-content">
                            {space.features.map((feature, index) => {
                                return <div key={index} className="event-space-content-item">{`*  ${feature}`}</div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSpace;