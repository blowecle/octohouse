import React, { useState, useRef } from 'react';
import EventSpace from './EventSpace';
import '../../css/events.css'

const Events = () => {

    return (
        <section className="events-container">
            <img className="events-image-mobile" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709836127/octopus-house/eventsHeaderMobile_vpgznw.jpg"/>
            <img className="events-image-tablet"/>
            <img className="events-image-desktop"/>
            <div className="events-blurb-container">
                <div className="events-header">RENT THE OCTOPUS HOUSE!</div>
                <div className="events-blurb">{`Impress your friends, family and colleagues by hosting an\n
                experience they will never forget.  This playful home caters to a wide variety\n
                of gatherings with 4 uniquge spaces and options to upgrade your stay.`}</div>
            </div>
        </section>
    );
};

export default Events;
