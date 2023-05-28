import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/Home.css'
import Artifact from './Artifact';
import { fetchArtifacts } from '../../store/reducers/artifactSlice';
import { fetchArtists } from '../../store/reducers/artistSlice';
import { fetchArtifactArtist } from '../../store/reducers/artifactArtistSlice';
import Footer from '../footer/Footer';

const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const asyncFetchArtifacts = async () => {
            await dispatch(fetchArtifacts());
            await dispatch(fetchArtists());
            await dispatch(fetchArtifactArtist());
        }
         asyncFetchArtifacts();
    },[dispatch])


    const artifacts = useSelector(state => state.artifact.artifacts);
    const artists = useSelector(state => state.artist.artists);
    const artifactArtist = useSelector(state => state.artifactArtist.artifactArtist);

    if(artifactArtist)console.log(artifactArtist)
    
    return (<>
            <div className='home-container'>
                <img className='home-image-mobile' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1679084549/evan%20web%20photos/Top-100_jfqnl0.jpg"/>
                <img className='home-image-desktop' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1684249771/Desktop_TOP_v2-100_ykbouo.jpg"/>
                <div className="gallery-container">
                    {artifactArtist.length ? (artifacts ? (artifacts.map((artifact, index) => {
                        let filteredArtists = []
                        console.log(artifactArtist[index].artistID)
                        artifactArtist[index].artistID.map((artistID) => {
                            filteredArtists.push(artists.find((artist) => artist.artistID === artistID))
                        })
                        return <Artifact key={index} artifact={artifact} artists={filteredArtists}/>
                    })) : null) : null}
                <div className="artifact-container">
                <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/dyjzfdguj/image/upload/v1679086343/evan%20web%20photos/PXL_20230317_204739350_vpu26f.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div>
            <div className="info-wrapper">
                <div className="artifact-name">THE TRANSITION</div>
                <div className="line-div"/>
                <div className="artifact-blurb">Many thanks to the dozens of artists, craftspeople, and contractors that transformed a boring gray cube into a true work of art!</div>
                <div className="artifact-artist-wrapper">
                    <div className="artifact-artist-description">CREATED BY</div>
                    <div className="last-name">Everybody</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home;