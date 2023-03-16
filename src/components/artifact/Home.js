import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/Home.css'
// import { Link } from 'react-router-dom';
import Artifact from './Artifact';
import Slider from '../slider/Slider';
import { fetchArtifacts } from '../../store/reducers/artifactSlice';
import { fetchArtists } from '../../store/reducers/artistSlice';

const Home = () => {
    const dispatch = useDispatch();

    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     function handleScroll() {
    //       setScrollY(window.scrollY);
    //     }
    
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, []);

    //   console.log(scrollY)
    
    useEffect(() => {
        const asyncFetchArtifacts = async () => {
            await dispatch(fetchArtifacts());
            await dispatch(fetchArtists());
        }
         asyncFetchArtifacts();
    },[dispatch])


    const artifacts = useSelector(state => state.artifact.artifacts);
    const artists = useSelector(state => state.artist.artists);
    
    return (<>
            <div className='home-container'>
                <img className='home-image' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1678937201/octopus-house/FINAL_1_TOP-100_tr7dld.jpg"/>
                <div className="gallery-container">
                    {artifacts ? (artifacts.map((artifact, index) => {
                        const filteredArtists = artists.filter((artist) => artist.artifactID.includes(artifact.artifactID))
                        return <Artifact key={index} artifact={artifact} artists={filteredArtists}/>
                    })) : null}
                <div className="last-artifact-container">
                <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1673983927/octo-house/PXL_20230117_193004917_fzax1v.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div>
            <div className="info-wrapper">
                <div className="last-artifact-name">THE TRANSITION</div>
                <div className="last-line-div"/>
                <div className="artifact-blurb">This is the blurb about the transition.  It is not a very good blurb.</div>
                <div className="last-description">CREATED BY</div>
                <div className="last-name">Everybody</div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home;