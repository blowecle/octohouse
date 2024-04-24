import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpaces } from '../../store/reducers/spaceSlice';

import EventsFooter from './EventsFooter';
import EventSpace from './EventSpace';
import Contact from './Contact';

import '../../css/events.css'


const Events = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchSpaces = async () => {
            await Promise.all([
                dispatch(fetchSpaces())
            ]);
        }
        asyncFetchSpaces();
    }, [dispatch])

    const spaces = useSelector((state) => state.spaces.spaces);
    
    console.log(spaces)
    return (
        <section className="events-container">
            {spaces.length ? ( <>
            <img className="events-image-mobile" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709836127/octopus-house/eventsHeaderMobile_vpgznw.jpg"/>
            <img className="events-image-tablet" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710433847/octopus-house/eventsHeaderTablet_ie6zkw.jpg"/>
            <img className="events-image-desktop" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710433872/octopus-house/eventsHeaderDesktop_pw8qki.jpg"/>
            <div className="events-blurb-container">
                <div className="events-header">RENT THE OCTOPUS HOUSE!</div>
                <div className="events-blurb">Impress your friends, family and colleagues by hosting an
                experience they will never forget.  This playful home caters to a wide variety
                of gatherings, with four unique spaces and options to upgrade your stay.</div>
            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            <div className="event-spaces-container">
                {spaces.map((space, index) => {
                return <>
                    <EventSpace key={index} space={space}/>
                <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
                </>}
                )
                }
            </div>
            <div className="upgrades-container">
                <div className="upgrades-header">{`* UPGRADE YOUR STAY *`}</div>
                <div className="upgrades-inner-container">
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/ddqp7dojc/image/upload/v1713231548/octo-house/Private_Chef_kfiyfk.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">PRIVATE CHEF</div>
                            <div className="upgrade-blurb">Raise the Steaks with a private chef.</div>
                        </div>
                    </div>
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/ddqp7dojc/image/upload/v1713231547/octo-house/Entertainment_d5axg7.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">ENTERTAINMENT</div>
                            <div className="upgrade-blurb">Want to add some flare to your event?
                            Check out this list of entertainers for that perfect vibe.</div>
                        </div>
                    </div>
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/ddqp7dojc/image/upload/v1713231548/octo-house/Stay_the_Night_fxfi1m.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">STAY THE NIGHT</div>
                            <div className="upgrade-blurb">Are you from out-of-town or not ready for the fun to end after one day? Three bedrooms available for your extended-stay needs.</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            <div className="contact-container">
                <div className="contact-header">CONTACT</div>
                <Contact /> 
            </div>
            <img className="wave-break" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709837172/octopus-house/Wave_line_break_ibyp0o.png" alt="wave-break"/>
            <div className="additional-info-container">
                <div className="additional-inner-container">
                    <div className="additional-info-header">ADDITIONAL INFO</div>
                    <div className="additional-info-one">
                        <div className="info-header">Included in this package:</div>
                        <ul className="package-list">
                            <li className="list-item">Wifi</li>
                            <li className="list-item">XLarge Green Egg Grill</li>
                            <li className="list-item">Restrooms</li>
                            <li className="list-item">{`Hot Tub (Cool plunge in the summer)`}</li>
                            <li className="list-item">Sound System</li>
                            <li className="list-item">Party Lights</li>
                            <li className="list-item last-item">Kitchen</li>
                        </ul>
                    </div>
                    <div className="additional-info-two">
                        <div className="info-header">Max Capacity: 50 ppl during day, 6 overnight</div>
                    </div>
                </div>
            </div>
            <EventsFooter /> </>) : null}
        </section>
    );
};

export default Events;
