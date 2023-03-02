import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/Home.css'
import { Link } from 'react-router-dom';
import Artifact from './Artifact';
import Slider from '../slider/Slider';
import { fetchArtifacts } from '../../store/reducers/artifactSlice';

const Home = () => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        const asyncFetchArtifacts = async () => {
            await dispatch(fetchArtifacts());
        }
         asyncFetchArtifacts();
    },[dispatch])
    
    const artifacts = useSelector(state => state.artifact.artifacts);

    return (<>
            <div className='home-container'>
                <div className='temp-wrapper'>
                    <Link to='/blog'>
                        <div className='temp-link'>Blog</div>
                    </Link>
                    <Link to='/story'>
                        <div className='temp-link'>Story</div>
                    </Link>
                </div>
                <Slider/>
                {artifacts ? (artifacts.map((artifact, index) => (
                    <Artifact key={artifact.id} artifact={artifact} index={index}/>
                ))) : null}
                <div className='temp-wrapper'>
                    <Link to='/blog'>
                        <div className='temp-link'>Blog</div>
                    </Link>
                    <Link to='/story'>
                        <div className='temp-link'>Story</div>
                    </Link>
                </div>
            <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1673983927/octo-house/PXL_20230117_193004917_fzax1v.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div>
        </div>
    </>
  )
}

export default Home;