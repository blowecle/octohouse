import '../../css/artifact.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtifactData } from '../../store/reducers/artifactSlice';

const Artifact = ({artifact, index}) => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtifactData = async () => {
            await dispatch(fetchArtifactData(index+1));
        }
        asyncFetchArtifactData();
    }, [index])
    
    const artifactData = useSelector((state) => state.artifact.artifactData);

    if(artifactData.artists) { artifactData.artists.map((artist) => {console.log("params id: ", params.id, " and artist id: ", artist.id)})}
    console.log("ARTIFACT DATA: ", artifactData.artifact)
    console.log("ARTIFACT ARTIST DATA: ", artifactData.artists)
    return (<div className='artifact-container'>
                <div className='post-image-wrapper'>
                    {artifact.images.map((image) => (
                        <div className='inner-wrapper'>
                            <img src={image} alt='blogImage' className='artifact-image'/>
                        </div>
                    ))}
                </div>
                <Link to={`/artifacts/${artifact.id}`}>
                    <div className='artifact-info'>{`${artifact.name}`}</div>
                </Link>
        </div>
    )
}

export default Artifact;