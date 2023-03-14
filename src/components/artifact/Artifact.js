import React from 'react';
import '../../css/artifact.css';
import { Link } from 'react-router-dom';

const Artifact = ({artifact, artists}) => {

    return (
        <div className="artifact-container">
                    <div className='slides'>
                        {artifact.images.map((image) => (
                            <img src={image} alt='artifactImage' className='slide'/>
                        ))}
                    </div>
            <div className="info-wrapper">
                    <div className="artifact-name">{`${artifact.name}`}</div>
                <div className="line-div"/>
                <div className="artifact-artist-wrapper">
                {artists.map((artist, index) => (<>
                        <div className="artifact-artist-description">{`${artifact.artistDescription[index]}`}</div>
                    <Link to={`/artists/${artist.artistID}`}>
                        {artist.name ? (
                        <div className="artifact-artist-name">{`${artist.name}`}</div>
                        ) : (
                            <div className="artifact-artist-name">{`${artist.company}`}</div>
                        )}
                    </Link>
                    </>
                ))}
                </div>
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