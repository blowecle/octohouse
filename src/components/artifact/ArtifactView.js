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

    console.log("ARTIFACT DATA: ", artifactData.artifact)
    console.log("ARTIFACT ARTIST DATA: ", artifactData.artists)
    if(artifactData.artists) { artifactData.artists.map((artist) => {console.log("params id: ", params.id, " and artist id: ", artist.id)})}
    let artists = []
    if(artifactData.artists) {artists = artifactData.artists.filter((artist) => artist.id === params.id)}
    console.log("FILTERED ARTIFACT ARTIST DATA: ", artists)

    return (
        <></>
    )
}

export default ArtifactView;