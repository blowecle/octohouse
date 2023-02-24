import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtifactData } from "../../store/reducers/artifactSlice";


const ArtifactView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtifactData = async () => {
            await dispatch(fetchArtifactData(params.id));
        }
        asyncFetchArtifactData();
    }, [dispatch])
    
    const artifactData = useSelector((state) => state.artifact.artifactData);
    // artifactData.artists = artifactData.artists.filter((artist) => artist.id === params.id);

    console.log("ARTIFACT DATA: ", artifactData)
    console.log("ARTIFACT ARTIST DATA: ", artifactData.artists)

    return (
        <></>
    )
}

export default ArtifactView;