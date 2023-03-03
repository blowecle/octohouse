import '../../css/artifact.css';
import { Link } from 'react-router-dom';

const Artifact = ({artifact, artists}) => {

    console.log("INSIDE ARTIFACT.JS, ARTIFACT: ", artifact, " ARTIST: ", artists)

    return (
        <div className="artifact-container">
            <div className='post-image-wrapper'>
                {artifact.images.map((image) => (
                    <div className='inner-wrapper'>
                        <img src={image} alt='blogImage' className='artifact-image'/>
                    </div>
                ))}
                <div className="icon" aria-hidden="true"></div>
            </div>
            <div className="info-wrapper">
                <div className="artifact-name">{`${artifact.name}`}</div>
                {artists.map((artist, index) => (<>
                    <Link to={`/artists/${artist.artistID}`}>
                        <div className="artifact-artist-name">{`${artist.name}`}</div>
                    </Link>
                    <div className="artifact-artist-description">{`- ${artifact.artistDescription[index]}`}</div>
                    </>
                ))}
            </div>
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