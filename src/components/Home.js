import React from 'react'
import NavBar from './NavBar';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    return (<>
        <NavBar/>
            <div className='home-container'>
                <div className='main-image-container'>
                    <img className='house-image-main' alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-2303878664998712562_ghe5fy.jpg'/>
                </div>
                <div className='carousel-title'>Exterior Images:</div>
                <Carousel className='carousel'>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180515015_1_lyvmvb.jpg' />
                    <p className='carousel-details'>Mermaid statue by: Daniel Hornung and Pyrology</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_182504428_l8uyjw.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859071/octo-house/PXL_20221118_182701408_jjqamq.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180534962_u5e9vq.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180631279_elsz08.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
            </Carousel>
            <div className='carousel-title'>Interior Images:</div>
            <Carousel className='carousel'>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180840811_dkfgkj.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>  {/*this is where a note about each photo lives */}
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859071/octo-house/PXL_20221118_181015020_zvp8rs.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859071/octo-house/PXL_20221118_181144236_rjfjbp.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>
                <div>
                    <img alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859070/octo-house/PXL_20221118_180955889_noovam.jpg' />
                    <p className='carousel-details'>this is a test paragraph</p>
                </div>  
            </Carousel>
            <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859070/octo-house/PXL_20221118_180356659_a2gwg9.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div>
            <div className='home-blurb-container'>
                <p className='home-blurb'>
                    In 2020, Joey Trevino returned to his birthplace in Austin, TX after 30 years in Silicon Valley.  Shortly after, Joey purchased the octopus house, except there were no octopi to be found just yet.  Over the course of the next 2-3 years he collaborated with local talent to transform the house into something that is one of a kind.  This website exists as a tribute to those artists and craftspeople that poured their blood, sweat, and tears into this house, and helped keep Austin weird!
                </p>
            </div>
        </div>
    </>
  )
}

export default Home;