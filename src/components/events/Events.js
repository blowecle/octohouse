import React, { useState, useRef } from 'react';

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
            <form method="POST" data-netlify="true" name="contact" className='contact-form'>
                <input
                type="hidden"
                name="form-name"
                value="contact"
                />
                <input
                className='name-input'
                name="name"
                type="text"
                placeholder="Your name"
                required
                />
                <input
                className='email-input'
                name="email"
                type="email"
                placeholder="Your email"
                required
                />
                <textarea
                className='message-input'
                name="message"
                placeholder="Further information"
                required
                ></textarea>
                <div className='button-wrapper'>
                <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </section>
    );
};

export default Events;
