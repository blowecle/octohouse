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
    const artists = useSelector((state) => state);
    console.log(artists);

    console.log("ARTIFACT DATA: ", artifactData)

    return (
        <></>
    )
}

export default ArtifactView;