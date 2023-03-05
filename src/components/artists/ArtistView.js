import React, { useEffect } from "react";
import { fetchArtistData } from "../../store/reducers/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import '../../css/artist.css'
import { Link } from "react-router-dom";

const ArtistView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtistData = async () => {
            await dispatch(fetchArtistData(params.id));
        }
        asyncFetchArtistData();
    }, [])

    const artist = useSelector((state) => state.artist.artistData.artistData);
    const artifacts = useSelector((state) => state.artist.artistData.artifacts)
    const descriptionArray = [];

    //map artifacts
    //map artistID
    //if artistID = artist.artistID push index into descriptionArray

    //map artifacts
    //display artifact name
    //display artistDescription[descriptionArray[index]]
    if(artist){
    artifacts.map((artifact, index) => (
        artifact.artistID.map((id, index) => {
            if(id === artist.artistID){
                descriptionArray.push(index)
            }
        })
        ))
    }

    return  (<>{artist ? (<div className="artist-wrapper">
                <div className="artist-top-container">
                    <div className="artist-name">{`${artist.name}`}</div>
                    <div className="artist-company">{`${artist.company}`}</div>
                    <a href={`${artist.companyLink}`} className="artist-company-link">{`${artist.companyLink}`}</a>
                    <div className='post-image-wrapper'>
                        {artifacts.map((artifact) => ( artifact.images.map((image) => (
                            <div className='inner-wrapper'>
                                <img src={image} alt='blogImage' className='artifact-image'/>
                            </div>
                        ))))}
                        <div className="icon" aria-hidden="true"></div>
                    </div>
                    <div className="artifact-list-container">
                            Works of art:
                            <div className="artifact-list">
                                {artifacts.map((artifact, index) => (<>
                                    <Link className="social" to={`/artifacts/${artifact.artifactID}`}>
                                        <div className="artifact-list-name">{`${artifact.name}`}</div>
                                    </Link>
                                    <div className="artifact-list-description">- {`${artifact.artistDescription[descriptionArray[index]]}`}</div>
                                    </>
                                ))}
                            </div>
                    </div>
                    <div className="blurb-container">
                        <div className="blurb">{`${artist.blurb}`}</div>
                    </div>
                    <div className="info-container">
                        <div className="social-container">
                            {artist.social.map((social) => (
                                <div><a href={`${social}`} target="_blank" className="social">{`${social}`}</a></div>
                            ))}
                        </div>
                    </div>
                </div>
    </div>) : (null)}</>)
}

export default ArtistView;