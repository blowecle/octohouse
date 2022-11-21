import React from "react";
import { Link } from "react-router-dom";
import '../css/Artists.css'

const CardBack = ({artist}) => {
    return (
        <div className='card-back'>
            <img className='card-back-image' alt='' src={artist.backImage} />
            <Link key={artist.id} to={`/artists/${artist.id}`} state={artist}>
                <div className='card-link'>See more!</div>
            </Link>
        </div>
    )

}

export default CardBack;