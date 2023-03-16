import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
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
                <img className='home-image' src="https://res.cloudinary.com/dyjzfdguj/image/upload/v1678926158/octopus-house/Intro-100_le8tbq.jpg"/>
                <div className="gallery-container">
                    {artifacts ? (artifacts.map((artifact) => {
                        const filteredArtists = artists.filter((artist) => artist.artifactID.includes(artifact.artifactID))
                        return <Artifact key={artifact.id} artifact={artifact} artists={filteredArtists}/>
                    })) : null}
                </div>
                <Slider/>
            {/* <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1673983927/octo-house/PXL_20230117_193004917_fzax1v.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div> */}
        </div>
    </>
  )
}

export default Home;