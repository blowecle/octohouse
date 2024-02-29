import React, { useState, useRef } from 'react';
import EventSpace from './EventSpace';
import '../../css/events.css'

const Events = () => {

    return (
        <section className="events-container">
            <div className="header-container">
                <div className="header-inner-container">
                    <div className="header-title">
                        RENT THE OCTOPUS HOUSE!
                    </div>
                    <div className="header-content">
                    If you have made it this far then you know you can host your own event at the Octopus House!  Take time exploring the space to see if this house is the right fit for you and your team.
                    </div>
                </div>
            </div>
            <div className="event-spaces">

            </div>
        </section>
    );
};

export default Events;
