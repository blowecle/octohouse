import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/Home.css';

import Artifact from './Artifact';
import Footer from '../footer/Footer';
import Loading from '../loading/loading';

import { fetchArtifacts } from '../../store/reducers/artifactSlice';
import { fetchArtists } from '../../store/reducers/artistSlice';
import { fetchArtifactArtist } from '../../store/reducers/artifactArtistSlice';
import { setInitialDataLoaded } from '../../store/reducers/artifactSlice';


const Home = () => {
    const dispatch = useDispatch();

    const desktopTop = require('../../images/desktop_top.jpeg')
    const mobileTop = require('../../images/mobile_top.jpeg')
    const afterImage = require('../../images/jpeg-optimizer_PXL_20230808_003617536-_1_.jpeg')
    const beforeImage = require('../../images/before.jpeg')

    useEffect(() => {
        const asyncFetchArtifacts = async () => {
          await Promise.all([
            dispatch(fetchArtifacts()),
            dispatch(fetchArtists()),
            dispatch(fetchArtifactArtist())
          ]);
        };
    
        asyncFetchArtifacts();
      }, [dispatch]);


      const { artifacts, artists, artifactArtist, isDataLoaded } = useSelector((state) => ({
        artifacts: state.artifact.artifacts,
        artists: state.artist.artists,
        artifactArtist: state.artifactArtist.artifactArtist,
        isDataLoaded: state.artifact.isInitialDataLoaded,
      }));

      const handleLoadingComplete = () => {
        dispatch(setInitialDataLoaded(true));
      };
    
    return (<>
            {!isDataLoaded && <Loading onLoadingComplete={handleLoadingComplete}/>}
            <div className='home-container'>
                <img className='home-image-mobile' src={mobileTop}/>
                <img className='home-image-desktop' src={desktopTop}/>
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
                itemOne={<ReactCompareSliderImage src={afterImage} />}
                itemTwo={<ReactCompareSliderImage src={beforeImage} />}
                position={1}
                />
            </div>
            <div className="info-wrapper">
                <div className="artifact-name">THE TRANSITION</div>
                <div className="line-div"/>
                <div className="artifact-blurb">Many thanks to the dozens of artists, craftspeople, and contractors that transformed a gray cube into a true work of art!</div>
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