import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../css/eventspace.css';

const EventSpace = () => {
  return (
    <div className="event-space-container">
        <div className="event-space-inner-container">
            <div className="event-space-header">
                <div className="event-space-name">
                    MAIN ROOM
                </div>
                <div className="event-space-nickname">
                    {`(Under The Eyes of Texas)`}
                </div>
            </div>
            <div className="event-space-content-container">
                <img src={require('../../images/interior1.jpeg')} alt="main-room" className="event-space-image"/>
                <div className="event-space-content-container">
                    <div className="event-space-content-title">

                    </div>
                    <div className="event-space-content">
                        <div className="event-space-content-item">-  Restrooms available</div>
                        <div className="event-space-content-item">-  Bar & Lounge Seating</div>
                        <div className="event-space-content-item">-  Seats 8-12</div>
                        <div className="event-space-content-item">-  TV + Music System</div>
                        <div className="event-space-content-item">-  Party Lights</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventSpace;