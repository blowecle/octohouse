import React, { useState } from "react";
import NavBar from "./NavBar";
import '../Artists.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";

const Artists = () => {

    const [open, setOpen] = useState(false);

    const artists = [{
        id: 1,
        company: 'company one',
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
    },
    {
        id: 2,
        company: 'company two',
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
    },
    {
        id: 3,
        company: 'company three',
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

    const handleClick = () => {
        setOpen(!open);
    }

    return(
        <>
            <NavBar />
            <div className='artist-content-container'>
                <div className='artist-button' onClick={handleClick}>Show/Hide Artists</div>
                {open ? (
                    artists.map((artist) => (
                    <Link key={artist.id} to={artist.id}>
                    <div key={artist.id} className='artist-list-item'>
                        <div className='company-name'>{artist.company}</div>
                        {artist.names.map((name) => (
                            <div className='artist-name'>{name}</div>
                        ))}
                        <div className='artist-filler'></div>
                    </div>
                    </Link>
                    ))
                ) : (
                    null
                )}
            </div>
        </>
        )
}

export default Artists;