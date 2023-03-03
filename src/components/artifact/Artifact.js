import '../../css/artifact.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtifactData } from '../../store/reducers/artifactSlice';

const Artifact = ({artifact, artists}) => {

    console.log("INSIDE ARTIFACT.JS, ARTIFACT: ", artifact, " ARTIST: ", artists)

    return (
        <div className="artifact-container">
            <div>{`${artifact.name}`}</div>
            {artists.map((artist, index) => (<>
                <div>{`${artist.name}`}</div>
                <div>{`${artifact.artistDescription[index]}`}</div>
                </>
            ))}
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