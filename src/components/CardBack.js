import React from "react";
import { Link } from "react-router-dom";
import '../css/Artists.css'

const CardBack = ({artist}) => {
    return ( artist.backImage ? (
        <div className='card-back'>
            <img className='card-back-image' alt='' src={artist.backImage} />
                <div className='card-artist-name'>{artist.company}</div>
            <Link key={artist.id} to={`/artists/${artist.id}`} state={artist}>
                <div className='card-link'>See more!</div>
            </Link>
        </div>
        ) : (
            <div className='card-back'>
                <div className='nelson-div-back'>
                Nelson Rockwood was introduced to Joey by the interior designer to paint and do a couple of tile installations. He and Joey connected on a lot of levels and the requests to take the house in a whole new direction got bigger and bolder with every visit. Nelson is a rare fit for this. He might be one of a few general contractors with a theater degree and a desire to work creatively on this level. His role became almost equal parts general contractor and art curator, and his talents have helped shape nearly every aspect of the octopus house.
                </div>
                <Link key={artist.id} to={`/artists/${artist.id}`} state={artist}>
                    <div className='card-link'>See more!</div>
                </Link>
            </div>
        )
    )

}

export default CardBack;