import React from "react";
import { Link } from "react-router-dom";
import '../Artists.css'

const CardBack = ({artist}) => {
    return (
        <div className='card-back'>
            test
            <Link key={artist.id} to={`/artists/${artist.id}`} state={artist}>See more!</Link>
        </div>
    )

}

export default CardBack;