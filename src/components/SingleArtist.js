import React from "react";
import NavBar from "./NavBar";
import '../css/SingleArtist.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useLocation } from 'react-router-dom'


const SingleArtist = () => {
    const location = useLocation()
    const artist = location.state
    console.log('these are the props: ',artist)
        return (<>
            <NavBar />
            <div className='artist-name'>{artist.company}</div>
                <div className='artist-top-div'>
                    <div className='artist-info-container'>
                        <div className='artist-info'>{artist.work}</div>
                    </div>
                    <div className='artist-blurb-container'>
                        <div className='artist-blurb'>{artist.blurb}</div>
                    </div>
                </div>
                <div className='artist-bottom-div'>
                    <Carousel className='carousel'>
                        {artist.images.map((image) => (
                            <div className='single-carousel'>
                                <img className='single-carousel-image' alt='' src={`${image}`} />
                            </div>
                        ))}
                    </Carousel>
                    <div className='artist-social-links'>social media goes here</div>
                </div>
            </>)
}

export default SingleArtist;