import React from "react";
import NavBar from "./NavBar";
import '../Artists.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingleArtist = ({props}) => {<>
                <div className='artist-top-div'>
                    <div className='artist-info-container'>
                        <div className='artist-info'>artist info goes here</div>
                    </div>
                    <div className='artist-blurb-container'>
                        <div className='artist-blurb'>blurb goes here</div>
                    </div>
                </div>
                <div className='artist-bottom-div'>
                    <Carousel className='carousel'>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        <div>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                        </div>
                        
                    </Carousel>
                    <div className='artist-social-links'>social media goes here</div>
                </div>
            </>
}