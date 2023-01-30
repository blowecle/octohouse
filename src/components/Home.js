import React from 'react'
import NavBar from './NavBar';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../css/App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import StudioA from './StudioA/StudioA';
import Tacos from '../images/texsueno-05-large.jpeg'

const Home = () => {

    return (<>
            <div className='home-container'>
                {/* <div className='main-image-container'>
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
                    <p className='carousel-details'>this is a test paragraph</p>
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
            </Carousel> */}
            <img src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1674759564/octo-house/island_abz6pf.jpg' className='top-image' alt='island'/>
            <div className='aos-container'>
                <div 
                className='story-div story-div-right story-div-1' 
                data-aos='fade-left' 
                data-aos-duration='1500' 
                data-aos-once='true'
                data-aos-offset='400'
                >What do you think about when you think of Austin culture?
                </div>
                <div className='story-div story-img-center-1'
                data-aos='zoom-in'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src={Tacos} alt='tacos' className='story-img story-img-center'/>
                Is it the tacos?</div>
                <div className='story-div story-img-left'
                data-aos='fade-right'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src='https://d4o3oxzf7m9sj.cloudfront.net/O0yjfd0drLtEh5YMegqwGyQh6lc=/1200x630/smart/https://media.data.statesman.com/restaurants/images/LGC_Tacos-11.JPG' alt='mural' className='story-img'/>
                </div>
                <div className='mural-container'>
                <div className='story-div story-div-center'
                data-aos='fade-right'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >Is it all the beautiful street murals?
                </div>
                    <div className='mural mural-1'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://mymodernmet.com/wp/wp-content/uploads/2019/08/things-to-do-in-austin-1.jpg' alt='mural' className='mural-img'/>
                    </div>
                    <div className='mural mural-2'
                    data-aos='fade-left'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://images.squarespace-cdn.com/content/v1/5d78842dc0dde5786b44bd3c/fd1a52cf-6b74-4237-8137-7bc668be58a0/Bumble-Mural.jpg' alt='mural' className='mural-img'/>
                    </div>
                    <div className='mural mural-3'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://do512family.com/wp-content/uploads/2018/01/DSC_8986.jpg' alt='mural' className='mural-img'/>
                    </div>
                    <div className='mural mural-4'
                    data-aos='fade-left'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://i1.wp.com/www.eastsideatx.com/wp-content/uploads/2020/11/AAC5576C-74FC-49CB-A515-ED573E107912.jpeg?w=640&ssl=1' alt='mural' className='mural-img'/>
                    </div>
                    <div className='mural mural-5'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://thumbs.dreamstime.com/b/central-texas-austin-hope-graffiti-art-gallery-outdoor-venue-wall-longhorn-blue-bear-abstract-locals-call-capital-hill-53891702.jpg' alt='mural' className='mural-img'/>
                    </div>
                    <div className='mural mural-6'
                    data-aos='fade-left'
                    data-aos-duration='1500'
                    data-aos-once='true'
                    data-aos-offset='400'
                    >
                        <img src='https://do512family.com/wp-content/uploads/2018/01/RH208528.jpg' alt='mural' className='mural-img'/>
                    </div>
                </div>
                <div className='music-start story-img-center'
                data-aos='zoom-in'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src='https://images.squarespace-cdn.com/content/v1/536ea5cbe4b074eafa4feea0/1498937138623-G0VUYKLVHFGL3XN9SJOP/TAH+new+srv.jpg?format=1000w' alt='tacos' className='story-img-center-1'/>
                How about the music?</div>
                <div className='story story-img-left'
                data-aos='fade-right'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src='https://radseason.com/wp-content/uploads/2017/06/Austin-City-Limits-Music-Festival.-Photo-by-Katrina-Barber.jpg' alt='mural' className='story-img'/>
                </div>
                <div className='story story-img-right'
                data-aos='fade-left'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'>
                    <img src='https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/364d98f2_5a0c_4242_9240_3db10e6bdb81_7117aac3-2a59-469f-9037-f0c6c1982c12.jpg' alt='music' className='story-img'/>
                </div>
                <div className='story-div story-div-2'
                data-aos='zoom-in'
                data-aos-duration='500'
                data-aos-once='true'
                data-aos-offset='400'>
                From the annual South by 
Southwest festival, which attracts artists from around the world, to the vibrant street art 
and murals that can be found throughout the city, there is no shortage of artistic expression in Austin.
{/*This culture is what makes Austin what it is: an amazing place to live and visit, which
is the motivation behind building and designing this unique and artistic house. By utilizing some 
of the best local talent Austin has to offer, a beautiful and creative addition to the Austin
art scene has been created. */}
                </div>
                <div className='story story-img-left'
                data-aos='fade-right'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'>
                    <img src='https://img.texasmonthly.com/2021/11/austin-studio-tour-1.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45' alt='art' className='story-img'/>
                </div>
                <div className='story story-img-right'
                data-aos='fade-left'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'>
                    <img src='https://downtownaustin.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-23-at-4.52.11-PM-1127x700.png' alt='art' className='story-img'/>
                </div>
                <div className='story story-img-center'
                data-aos='zoom-in'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src='https://images.fineartamerica.com/images-medium-large-5/contemporary-downtown-austin-art-painting-night-skyline-cityscape-painting-texas-svetlana-novikova.jpg' alt='tacos' className='story-img-center'/>
                </div>
                <div className='story story-img-center'
                data-aos='zoom-in'
                data-aos-duration='1500'
                data-aos-once='true'
                data-aos-offset='400'
                >
                    <img src='https://do512family.com/wp-content/uploads/2019/01/RainbowWall_ReneeDominguez_20181127_008.jpg' alt='tacos' className='story-img-center'/>
                </div>
                <div className='filler'/>
            </div>
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