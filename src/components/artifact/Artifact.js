import '../../css/artifact.css';

const Artifact = ({artifact}) => {

    return (<div className='artifact-container'>
                <div className='post-image-wrapper'>
                    {artifact.images.map((image) => (
                        <div className='inner-wrapper'>
                            <img src={image} alt='blogImage' className='artifact-image'/>
                        </div>
                    ))}
                </div>
            <div className='artifact-info'>{`${artifact.name}`}</div>
        </div>
    )
}

export default Artifact;