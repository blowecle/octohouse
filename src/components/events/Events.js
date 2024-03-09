import React, { useState, useRef } from 'react';

import EventsFooter from './EventsFooter';
import EventSpace from './EventSpace';
import Contact from './Contact';

import '../../css/events.css'

const Events = () => {

    return (
        <section className="events-container">
            <img className="events-image-mobile" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709836127/octopus-house/eventsHeaderMobile_vpgznw.jpg"/>
            <img className="events-image-tablet"/>
            <img className="events-image-desktop"/>
            <div className="events-blurb-container">
                <div className="events-header">RENT THE OCTOPUS HOUSE!</div>
                <div className="events-blurb">Impress your friends, family and colleagues by hosting an
                experience they will never forget.  This playful home caters to a wide variety
                of gatherings with 4 uniquge spaces and options to upgrade your stay.</div>
            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            <div className="event-spaces-container">

            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            {/* this is a temporary wave-break */}
            <div className="upgrades-container">
                <div className="upgrades-header">* UPGRADE YOUR STAY *</div>
                <div className="upgrades-inner-container">
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709838380/octopus-house/Chef_icon_nus3ig.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">PRIVATE CHEF</div>
                            <div className="upgrade-blurb">Raise the Steaks with a private chef. <br/>
                            This upgrade includes...</div>
                        </div>
                    </div>
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709838380/octopus-house/Entertainment_icon_nobo6j.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">ENTERTAINMENT</div>
                            <div className="upgrade-blurb">Want to add some flare to your event?<br/>
                            Check out this list of entertainers for\nthat perfect vibe.</div>
                        </div>
                    </div>
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709838380/octopus-house/Stay_the_Night_icon_h3aruu.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">STAY THE NIGHT</div>
                            <div className="upgrade-blurb">Are you from out-of-town or not ready for the<br/>
                            fun to end after 1 day? 4 bedrooms available<br/>
                            for your extended-stay needs.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-header">CONTACT</div>
                <Contact />
            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            <div className="additional-info-container">
                <div className="additional-inner-container">
                    <div className="info-div">ADDITIONAL INFORMATION
                        <ul className="package-list">
                            <li className="list-item">Wifi</li>
                            <li className="list-item">Grill</li>
                            <li className="list-item">Restrooms</li>
                            <li className="list-item">Hot Tub</li>
                            <li className="list-item">Sound System</li>
                            <li className="list-item">Party Light</li>
                            <li className="list-item">Kitchen</li>
                        </ul>
                    </div>
                    <div className="info-div">Max Capacity: 50 ppl</div>
                    <div className="info-div">House Rules</div>
                </div>
            </div>
            <EventsFooter />
        </section>
    );
};

export default Events;
