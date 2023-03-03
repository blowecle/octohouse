import '../../css/artifact.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtifactData } from '../../store/reducers/artifactSlice';

const Artifact = ({artifact, index}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtifactData = async () => {
            await dispatch(fetchArtifactData(index+1));
        }
        asyncFetchArtifactData();
    }, [index])

    
    
    const artifactData = useSelector((state) => state.artifact.artifactData);

    if(artifactData.artists) { 
    console.log("ARTIFACT DATA: ", artifactData.artifact)
    console.log("ARTIFACT ARTIST DATA: ", artifactData.artists)
    }

    return (
        <div className='artifact-container'>
            {console.log("INSIDE RETURN ARTIFACT: ", artifactData.artifact, " ARTIST: ", artifactData.artists)}
            {artifactData.artifact ? (<div>{`${artifactData.artifact[0].name}`}</div>) : (null)}
            {artifactData.artists ? (artifactData.artifact[0].artistDescription.map((description, index) => (<>
                    <div>{`${artifactData.artists[index].name}`}</div>
                    <div>{`${description}`}</div>
                </>
            ))    ) : (null)
            
            }
        </div>
    )

    // return (<div className='artifact-container'>
    //             <div className='post-image-wrapper'>
    //                 {artifact.images.map((image) => (
    //                     <div className='inner-wrapper'>
    //                         <img src={image} alt='blogImage' className='artifact-image'/>
    //                     </div>
    //                 ))}
    //             </div>
    //             <Link to={`/artifacts/${artifact.id}`}>
    //                 <div className='artifact-info'>{`${artifact.name}`}</div>
    //             </Link>
    //     </div>
    // )
}

export default Artifact;