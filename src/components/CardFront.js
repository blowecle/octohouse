import React from "react";
import '../css/Artists.css';

const ArtistCard = ({artist}) => {
console.log(artist)
    return (
        artist.cardImage ? (
            <div className='card'>
            <img className='card-image' alt='' src={artist.cardImage} />
        </div>   
        ) : (
            <div className='card'>
                <div className='nelson-div'>Nelson Rockwood, General Contractor</div>
        </div>
        )
    )
}

export default ArtistCard;