import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../css/eventspace.css';

const EventSpace = () => {
    console.log('ping')
  return (
    <div className="event-space-container">
        <div className="event-space-inner-container">
            <div className="event-space-header">
                <div className="event-space-name">
                    <strong>MAIN ROOM</strong>
                </div>
                <div className="event-space-nickname">
                    <strong>{`(Under The Eyes of Texas)`}</strong>
                </div>
            </div>
            <div className="event-space-content-container">
                <img src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710435898/octopus-house/OctopusHouse_PH_368-min_gd4ejp.jpg" alt="main-room" className="event-space-image"/>
                <div className="event-space-content-container">
                    <div className="event-space-content-title">
                    Great space for conversation, catching a game, or a party!
                    </div>
                    <div className="event-space-content">
                        <div className="event-space-content-item">{`*  Restrooms available`}</div>
                        <div className="event-space-content-item">{`*  Bar & Lounge Seating`}</div>
                        <div className="event-space-content-item">{`*  Seats 8-12`}</div>
                        <div className="event-space-content-item">{`*  TV + Music System`}</div>
                        <div className="event-space-content-item">{`*  Party Lights`}</div>
                    </div>
                </div>
            </div>
        </div>
        <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
    </div>
  )
}

export default EventSpace;