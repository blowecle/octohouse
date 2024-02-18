import { useEffect, useState } from 'react'

//importing images for loading screen
import island from '../../images/Outlined_pieces/island@4x.png'
import wave1 from '../../images/Outlined_pieces/wave1@4x.png'
import wave2 from '../../images/Outlined_pieces/wave2@4x.png'
import wave3 from '../../images/Outlined_pieces/wave3@4x.png'
import firstFloor from '../../images/Outlined_pieces/firstfloor@4x.png'
import secondFloor from '../../images/Outlined_pieces/secondfloor@4x.png'
import octopus from '../../images/Outlined_pieces/Octopus@4x.png'
import palmTree from '../../images/Outlined_pieces/fullpalm@4x.png'
import treasure from '../../images/Outlined_pieces/treasure.png'
import sun from '../../images/Outlined_pieces/sun.png'

import '../../css/loading.css';

import { gsap } from 'gsap';

const Loading = ({onLoadingComplete, onImagesLoaded}) => {

    const [imagesPreloaded, setImagesPreloaded] = useState(false);
    

    useEffect(() => {
        const imagesToLoad = [island, wave1, wave2, wave3, firstFloor, secondFloor, octopus, palmTree, treasure, sun];
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
                duration: 1,
            })
            .to('.firstFloor',{
                bottom: "0",
                duration: .5,
            })
            .to('.secondFloor',{
                duration: 1,
                left: "0px",
                right: "0px",
            })
            .to('.secondFloor',{
                bottom: "39px",
                duration: .5,
            })
            .to('.octopus',{
                duration: 1,
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
                duration: 3,
            })
            .to('.bg-1', {
                opacity: 0,
                duration: 1,
            })
            .to('.loading', {
                delay: 2,
                opacity: 0,
                duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "40px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "50px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "62px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "62px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "0",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "83px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
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
                    duration: 3,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 1,
                })
                .to('.loading', {
                    delay: 2,
                    opacity: 0,
                    duration: 1,
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