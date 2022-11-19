import React from "react";
import '../Artists.css';

const ArtistCard = ({artist}) => {
console.log(artist)
    return (
        <div className='card'>
            <div className='card-company-name'>
                {artist.company}
            </div>
            {artist.names.map((name) => (
                <div className='card-artist-name'>{name}</div>
            ))}
        </div>
    )
}

export default ArtistCard;