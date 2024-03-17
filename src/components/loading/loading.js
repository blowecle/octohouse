import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../css/Home.css';
import '../../css/loading.css';
import { setInitialDataLoaded } from '../../store/reducers/artifactSlice';

import { gsap } from 'gsap';

const Loading = ({onLoadingComplete, onImagesLoaded}) => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();

    const basePath = `${process.env.PUBLIC_URL}/images/Outlined_pieces`;

    const firstFloor = `${basePath}/firstfloor@4x.webp`;
    const secondFloor = `${basePath}/secondfloor@4x.webp`;
    const octopus = `${basePath}/Octopus@4x.webp`;
    const treasure = `${basePath}/treasure.webp`;
    const sun = `${basePath}/sun.webp`;
    const [active, setActive] = useState(true);

    const mm = gsap.matchMedia();

    const clickHandler = () => {
        if(active){
            setActive(false);
        }

        const onLoadingComplete = () => {
            dispatch(setInitialDataLoaded(true));
        }

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
                duration: 1.6,
            })
            .to('.bg-1', {
                opacity: 0,
                duration: 2,
            })
            .to('.loading', {
                delay: 0,
                opacity: 0,
                duration: 3,
            })
            .to('.loading', {
                delay: 0,
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
                    bottom: "38px",
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
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
                    duration: 1.6,
                })
                .to('.bg-1', {
                    opacity: 0,
                    duration: 2,
                })
                .to('.loading', {
                    delay: 0,
                    opacity: 0,
                    duration: 3,
                })
                .to('.loading', {
                    delay: 0,
                    zIndex: -1,
                })
            })
        }

    return (
        <div className="loading">
            <div className="loading-wrapper"/>
                <img src={treasure} alt="treasure" className={active ? "treasure loading-img active" : "treasure loading-img"} onClick={clickHandler}/>
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