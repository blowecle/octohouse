import React from "react";
import '../Artists.css';

const ArtistCard = ({artist}) => {
console.log(artist)
    return (
        <div className='card'>
                <img className='card-image' alt='' src={artist.cardImage} />
        </div>
    )
}

export default ArtistCard;