import React from "react";
import NavBar from "../NavBar";
import { Carousel } from 'react-responsive-carousel';
import './StudioA.css'

const StudioA = () => {

    return (
        <div className='artist-container'>
            <NavBar />
            <div className='top-div'>
                <div className='portrait-image-container'>
                    <img className='portrait-image' alt='' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180615493_ylfsis.jpg' />
                </div>
                <div className='blurb'>During our first meetings with Joey, he expressed a strong desire to create a house that would be a gathering place for his family, neighbors, and the community.  However, the original form of the spec house was closed, even hostile towards the street.  I had a hunch that landscaping and a standard re-paint wouldn't be the cure needed.  Assembling the team of builders, designers, and craftspeople to collaborate on the transformation of the house from spec to an underwater fantasy was great fun!   Each new person brought onto the team caught the infectious joy of the project!  We all could feel the FUN and WONDER radiating from the house onto the street to every passerby.</div>
            </div>
            <div className='carousel-div'>
                <Carousel>
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
            </div>
            <a className='social-link' href='www.studioagroup.com'>Click here to see more!</a>
        </div>
    )
}

export default StudioA;