import React from 'react'
import NavBar from './NavBar';
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
// import 'react-before-after-slider-component/dist/build.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    // const FIRST_IMAGE = {
    //     imageUrl: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg'
    //   };
    //   const SECOND_IMAGE = {
    //     imageUrl: 'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-2303878664998712562_ghe5fy.jpg'
    //   };

    //   const delimiterIconStyles = {
    //     width: '50px',
    //     height: '50px',
    //     backgroundSize: 'cover',
    //     borderRadius: 'none',
    //     backgroundImage: 'url(https://res.cloudinary.com/ddqp7dojc/image/upload/v1668441400/octo-house/octopus_s5gbs5.png)'
    //  }

    return (<>
        <NavBar/>
            <div className='home-container'>
                <div className='main-image-container'>
                    <img className='house-image-main' alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-2303878664998712562_ghe5fy.jpg'/>
                </div>
                <Carousel className='carousel'>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                
            </Carousel>
            <Carousel className='carousel'>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                <div>
                    <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png' />
                </div>
                
            </Carousel>
            <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-2303878664998712562_ghe5fy.jpg' />}
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