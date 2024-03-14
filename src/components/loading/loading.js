import { useEffect, useState } from 'react'

//importing images for loading screen
// import firstFloor from '../../images/Outlined_pieces/firstfloor@4x.webp'
// import secondFloor from '../../images/Outlined_pieces/secondfloor@4x.webp'
// import octopus from '../../images/Outlined_pieces/Octopus@4x.webp'
// import treasure from '../../images/Outlined_pieces/treasure.webp'
// import sun from '../../images/Outlined_pieces/sun.webp'

import '../../css/Home.css';
import '../../css/loading.css';

import { gsap } from 'gsap';

const Loading = ({onLoadingComplete, onImagesLoaded}) => {
    window.scrollTo(0, 0);
    
    const basePath = `${process.env.PUBLIC_URL}/images/Outlined_pieces`;

    const firstFloor = `${basePath}/firstfloor@4x.webp`;
    const secondFloor = `${basePath}/secondfloor@4x.webp`;
    const octopus = `${basePath}/Octopus@4x.webp`;
    const treasure = `${basePath}/treasure.webp`;
    const sun = `${basePath}/sun.webp`;
    const [imagesPreloaded, setImagesPreloaded] = useState(false);
    

    useEffect(() => {
        const imagesToLoad = [firstFloor, secondFloor, octopus, treasure, sun];
        let loadedImages = 0;

        imagesToLoad.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === imagesToLoad.length) {
                    setImagesPreloaded(true);
                    onImagesLoaded();
                }
            };
        });
    }, []);

    const mm = gsap.matchMedia();

    const clickHandler = () => {
        const timeline = gsap.timeline({
            onComplete: onLoadingComplete,
        });
        mm.add("(max-width: 399px)", () => {
            timeline.to('.firstFloor',{
                left: "0px",
                right: "0px",
                duration: 2,
            })
            .to('.firstFloor',{
                bottom: "0",
                duration: .5,
            })
            .to('.secondFloor',{
                duration: 2,
                left: "0px",
                right: "0px",
            })
            .to('.secondFloor',{
                bottom: "39px",
                duration: .5,
            })
            .to('.octopus',{
                duration: 2,
                left: "0",
                right: "0",
            })
            .to('.octopus',{
                duration: .5,
                bottom: "25px",
            })
            .to('.sun', {
                top: "50%",
                marginLeft: "200px",
                duration: 2,
            })
            .to('.bg-1', {
                opacity: 0,
                duration: 2,
            })
            .to('.loading', {
                delay: 2,
                opacity: 0,
                duration: 2,
            })
            .to('.loading', {
                delay: 2,
                zIndex: -1,
            })
            })
            mm.add("(min-width: 400px) and (max-width: 499px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "38px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "25px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 500px) and (max-width: 699px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "50px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "33px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 700px) and (max-width: 899px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "62px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "42px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 900px) and (max-width: 1099px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "62px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "42px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 1100px) and (max-width: 1299px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "55px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 1100px) and (max-width: 1299px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "55px",
                })
                .to('.sun', {
                    top: "50%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
            mm.add("(min-width: 1300px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 2,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 2,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 2,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "55px",
                })
                .to('.sun', {
                    top: "70%",
                    marginLeft: "200px",
                    duration: 2,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 2,
                    zIndex: -1,
                })
            })
        }

    return (
        <div className="loading">
            <div className="loading-wrapper"/>
                <img src={treasure} alt="treasure" className="treasure loading-img" onClick={clickHandler}/>
                <img src={sun} alt="sun" className="sun loading-img"/>
                <div className="house-wrapper">
                    <img src={firstFloor} alt="firstFloor" className="firstFloor loading-img"/>
                    <img src={secondFloor} alt="secondFloor" className="secondFloor loading-img"/>
                    <img src={octopus} alt="octopus" className="octopus loading-img"/>
                </div>
            <div className="bg-1"/>
        </div>
    )
}

export default Loading;