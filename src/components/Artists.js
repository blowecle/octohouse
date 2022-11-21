import React from "react";
import NavBar from "./NavBar";
import '../Artists.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import SingleArtist from "./SingleArtist";
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import CardBack from "./CardBack";

const Artists = () => {

    const artists = [{
        id: 1,
        company: 'Blue Moon Glassworks',
        names: ['Jim Berry'],
        images: ['https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180631279_elsz08.jpg',
                'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180840811_dkfgkj.jpg',],
        cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: ['Stained glass octopus tentacle',
                'Stained glass starfish'],
        blurb: 'It was just such a unique project. Nelson and Joey were both fun to work with. Matching up our stained glass tentacle to the outside mural was challenging with several trips to template the window. It was all worth the effort on installation day when everything matched up. Then doing the front door stained glass was equally gratifying.',
        social: ['Austinbluemoon.com',
        'Facebook: Blue Moon Glassworks',],
        additional: null,
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
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',

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
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
                work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 4,
        company: 'company four',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 5,
        company: 'company five',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 6,
        company: 'company six',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 7,
        company: 'company seven',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 8,
        company: 'company eight',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 9,
        company: 'company nine',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 10,
        company: 'company ten',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 11,
        company: 'company eleven',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },
    {
        id: 12,
        company: 'company twelve',
        names: ['artist1',
                'artist2',
                'artist3'],
        images: ['url1',
                'url2',
                'url3'],
                cardImage: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1669055700/octo-house/PXL_20221118_180823038_1_yrfqzv.jpg',
        work: 'this is what the artist worked on',
        blurb: 'this is the artist blurb',
        social: ['social1',
                'social2',
                'social3'],
        additional: 'additional info',
    },]

    return(
        <>
            <NavBar />
            <div className='artist-content-container'>
                {
                    artists.map((artist) => (
                        <Flippy flipOnClick={true}
                        flipDirection='vertical'>
                            <FrontSide className='card-front'
                            style={{padding: '1vw'}}>
                                <ArtistCard key={artist.id} artist={artist}/>
                            </FrontSide>
                            <BackSide>
                                    <CardBack artist={artist} />
                            </BackSide>
                        </Flippy>
                    ))
                }
            </div>
        </>
        )
}

export default Artists;