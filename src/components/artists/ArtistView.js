import React, { useEffect } from "react";
import { fetchArtistData } from "../../store/reducers/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import '../../css/artist.css'
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    
    
    return (<>
    {artist ? (<div className="artist-wrapper">
        {artist.company && artist.name ? (<>
            <div className="single-artist-name">{`${artist.name}`}</div>
            <div className="artist-company-name">{`${artist.company}`}</div>
            </>
        ) : artist.name ? (
            <div className="single-artist-name">{`${artist.name}`}</div>
        ) : (
            <div className="solo-artist-name">{`${artist.company}`}</div>
        )}
        {artifacts.map((artifact) => (<>
            <div className="single-artifact-name">{`${artifact.name}`}</div>
            <div className="carousel-wrapper">
                <Carousel showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={false} swipeable={false} emulateTouch={true} dynamicHeight={false} useKeyboardArrows={true} centerMode={true} centerSlidePercentage={100} className='artifact-carousel'>
                    {artifact.images.map((image) => (
                        <div className='inner-wrapper'>
                            <img src={image} alt="carouselImage" className="artifact-image"/>
                        </div>))}
                </Carousel>
            </div>
        </>
        ))}
        {console.log(artist, artifacts)}
        <div className="artist-intro-container">
            Do you like what you see?
        </div>
            {artist.social.map((social) => (
                <div><a href={`${social}`} target="_blank" className="social">{`${social}`}</a></div>      
            ))}
    </div>) : (null)}
    </>)
    // const descriptionArray = [];

    //map artifacts
    //map artistID
    //if artistID = artist.artistID push index into descriptionArray

    //map artifacts
    //display artifact name
    //display artistDescription[descriptionArray[index]]
    // if(artist){
    // artifacts.map((artifact, index) => (
    //     artifact.artistID.map((id, index) => {
    //         if(id === artist.artistID){
    //             descriptionArray.push(index)
    //         }
    //     })
    //     ))
    // }

    // return  (<>{artist ? (<div className="artist-wrapper">
    //             <div className="artist-top-container">
    //                 <div className="artist-name">{`${artist.name}`}</div>
    //                 {artist.company ? (<div className="artist-company">{`${artist.company}`}</div>
    //                 ) : (null)}
    //                 {artist.companyLink ? (<a href={`${artist.companyLink}`} className="artist-company-link">{`${artist.companyLink}`}</a>) : (null)}
    //                 <div className='post-image-wrapper'>
    //                     {artifacts.map((artifact) => ( artifact.images.map((image) => (
    //                         <div className='inner-wrapper'>
    //                             <img src={image} alt='blogImage' className='slide'/>
    //                         </div>
    //                     ))))}
    //                     <div className="icon" aria-hidden="true"></div>
    //                 </div>
    //                 <div className="artifact-list-container">
    //                         Works of art:
    //                         <div className="artifact-list">
    //                             {artifacts.map((artifact, index) => (<>
    //                                 <Link className="social" to={`/artifacts/${artifact.artifactID}`}>
    //                                     <div className="artifact-list-name">{`${artifact.name}`}</div>
    //                                 </Link>
    //                                 <div className="artifact-list-description">- {`${artifact.artistDescription[descriptionArray[index]]}`}</div>
    //                                 </>
    //                             ))}
    //                         </div>
    //                 </div>
    //                 {artist.blurb ? (<div className="blurb-container">
    //                     <div className="blurb">{`${artist.blurb}`}</div>
    //                 </div>) : (null)}
    //                 <div className="info-container">
    //                     <div className="social-container">
    //                         {artist.social.map((social) => (
    //                             <div><a href={`${social}`} target="_blank" className="social">{`${social}`}</a></div>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    // </div>) : (null)}</>)
}

export default ArtistView;