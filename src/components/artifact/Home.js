import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import '../../css/Home.css';

import Artifact from './Artifact';
import Footer from '../footer/Footer';

import { fetchArtifacts } from '../../store/reducers/artifactSlice';
import { fetchArtists } from '../../store/reducers/artistSlice';
import { fetchArtifactArtist } from '../../store/reducers/artifactArtistSlice';


const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const asyncFetchArtifacts = async () => {
          await Promise.all([
            dispatch(fetchArtifacts()),
            dispatch(fetchArtists()),
            dispatch(fetchArtifactArtist())
          ]);
        };
    
        asyncFetchArtifacts();
      }, []);


      const { artifacts, artists, artifactArtist } = useSelector((state) => ({
        artifacts: state.artifact.artifacts,
        artists: state.artist.artists,
        artifactArtist: state.artifactArtist.artifactArtist
      }));
    
    return (<>
            <div className='home-container'>
                <img className='home-image-mobile' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1679084549/evan%20web%20photos/Top-100_jfqnl0.jpg"/>
                <img className='home-image-desktop' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1686658990/octopus-house/Desktop_TOP_-50_rqivic.jpg"/>
                <div className="gallery-container">

                    {/* Todo:
                        filter artifactArtist by artifactID rather than index
                    */}
                    {artifactArtist.length ? (artifacts ? (artifacts.map((artifact, index) => {
                        let filteredArtists = [];
                        let reference = artifactArtist[index];
                        reference.artistID.map((artistID) => {
                            filteredArtists.push(artists.find((artist) => artist.artistID === artistID))
                        })
                        return <Artifact key={index} artifact={artifact} artists={filteredArtists} reference={reference}/>
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