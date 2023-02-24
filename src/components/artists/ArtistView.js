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
    return null
}

export default ArtistView;