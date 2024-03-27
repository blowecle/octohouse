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
    
    return (
        <section className="events-container">
            <img className="events-image-mobile" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709836127/octopus-house/eventsHeaderMobile_vpgznw.jpg"/>
            <img className="events-image-tablet" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710433847/octopus-house/eventsHeaderTablet_ie6zkw.jpg"/>
            <img className="events-image-desktop" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1710433872/octopus-house/eventsHeaderDesktop_pw8qki.jpg"/>
            <div className="events-blurb-container">
                <div className="events-header">RENT THE OCTOPUS HOUSE!</div>
                <div className="events-blurb">Impress your friends, family and colleagues by hosting an
                experience they will never forget.  This playful home caters to a wide variety
                of gatherings with 4 unique spaces and options to upgrade your stay.</div>
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
                            <div className="upgrade-blurb">Want to add some flare to your event?
                            Check out this list of entertainers for that perfect vibe.</div>
                        </div>
                    </div>
                    <div className="upgrade">
                        <img className="upgrade-icon" src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1709838380/octopus-house/Stay_the_Night_icon_h3aruu.png" alt="upgrade-icon"/>
                        <div className="upgrade-info-container">
                            <div className="upgrade-header">STAY THE NIGHT</div>
                            <div className="upgrade-blurb">Are you from out-of-town or not ready for the fun to end after 1 day? 4 bedrooms available for your extended-stay needs.</div>
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
                    <div className="additional-info-header">ADDITIONAL INFO</div>
                    <div className="additional-info-one">
                        <div className="info-header">Included in this package:</div>
                        <ul className="package-list">
                            <li className="list-item">Wifi</li>
                            <li className="list-item">Grill</li>
                            <li className="list-item">Restrooms</li>
                            <li className="list-item">Hot Tub</li>
                            <li className="list-item">Sound System</li>
                            <li className="list-item">Party Light</li>
                            <li className="list-item last-item">Kitchen</li>
                        </ul>
                    </div>
                    <div className="additional-info-two">
                        <div className="info-header">Max Capacity: 50 ppl</div>
                    </div>
                    <div className="additional-info-three">
                        <div className="info-header">House Rules</div>
                        <div className="rule">No Pets</div>
                        <div className="rule">Do NOT block the neighbors driveway</div>
                        <div className="rule">No Smoking indoors</div>
                        <div className="rule">You break it you buy it</div>
                    </div>
                </div>
            </div>
            <EventsFooter />
        </section>
    );
};

export default Events;
