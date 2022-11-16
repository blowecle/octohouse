import React from "react";
import NavBar from "./NavBar";
import '../Artists.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Artists = () => {

    const artists = [{
        company: 'company name',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    }]

    return(
        <>
            <NavBar />
            
        </>
        )
}

export default Artists;