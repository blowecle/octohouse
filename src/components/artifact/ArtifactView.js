import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtifactData } from "../../store/reducers/artifactSlice";


const ArtifactView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    const artifactData = useSelector((state) => state);

    useEffect(() => {
        const asyncFetchArtifactData = async () => {
            const fetchArtifact = await dispatch(fetchArtifactData(params.id));
        }
        asyncFetchArtifactData();
    }, [])


    console.log("ARTIFACT DATA: ", artifactData)

    return (
        <></>
    )
}

export default ArtifactView;