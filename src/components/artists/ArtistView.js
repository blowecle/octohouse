import React, { useEffect } from "react";
import { fetchArtistData } from "../../store/reducers/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ArtistView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtistData = async () => {
            await dispatch(fetchArtistData(parseInt(params.id)));
        }
        asyncFetchArtistData();
    }, [dispatch])

    const artist = useSelector((state) => state.artist.artistData);

    if(artist){
    console.log(artist)
    }

    return  (<div className="artist-wrapper">
                <div className="artist-top-container">
                    <div className="info-container"></div>
                    <div className="artist-image-container">
                        <img src="" alt="main image goes here" className="artist-image"/>
                    </div>
                </div>
                <div className="artist-bottom-container">
                    <div>I don't know what goes down here yet</div>
                </div>
    </div>)
}

export default ArtistView;