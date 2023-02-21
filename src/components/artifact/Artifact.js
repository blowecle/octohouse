import '../../css/artifact.css';
import { Link } from 'react-router-dom';

const Artifact = ({artifact}) => {

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