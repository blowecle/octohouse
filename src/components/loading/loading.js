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

const loading = ({onLoadingComplete}) => {
    console.log(window.innerWidth)

    const mm = gsap.matchMedia();

    const clickHandler = () => {
        const timeline = gsap.timeline({
            onComplete: onLoadingComplete,
        });
        mm.add("(min-width: 0px) and (max-width: 320px)", () => {
            timeline.to('.firstFloor',{
                left: "0px",
                right: "0px",
                duration: 1,
            })
            .to('.firstFloor',{
                bottom: "260px",
                duration: .5,
            })
            .to('.secondFloor',{
                duration: 1,
                left: "0px",
                right: "0px",
            })
            .to('.secondFloor',{
                bottom: "325px",
                duration: .5,
            })
            .to('.octopus',{
                duration: 1,
                left: "0",
                right: "0",
            })
            .to('.octopus',{
                duration: .5,
                bottom: "300px",
            })
            .to('.palmTree',{
                height: "150px",
                duration: 1,
            })
            .to('.loading', {
                delay: 2,
                duration: 2,
                background: 'transparent',
            })
            .to('.loading-wrapper', {
                opacity: 0,
                duration: 1,
            })
            .to('.loading-wrapper', {
                delay: 2,
                zIndex: -1,
            })
        })
        mm.add("(min-width: 321px) and (max-width: 399px)", () => {
                timeline.to('.island',{
                    duration: 2,
                    bottom: "125px",
                })
                .to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "260px",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "325px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "300px",
                })
                .to('.palmTree',{
                    height: "150px",
                    duration: 1,
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
            mm.add("(min-width: 400px) and (max-width: 499px)", () => {
                timeline.to('.island',{
                    duration: 2,
                    bottom: "150px",
                })
                .to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "280px",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "345px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "320px",
                })
                .to('.palmTree',{
                    height: "150px",
                    duration: 1,
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
            mm.add("(min-width: 500px) and (max-width: 550px)", () => {
                timeline.to('.island',{
                    duration: 2,
                    bottom: "150px",
                })
                .to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "280px",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "343px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "330px",
                })
                .to('.palmTree',{
                    height: "150px",
                    duration: 1,
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
            mm.add("(min-width: 551px) and (max-width: 600px)", () => {
                timeline.to('.island',{
                    duration: 2,
                    bottom: "150px",
                })
                .to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "280px",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "340px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "330px",
                })
                .to('.palmTree',{
                    height: "150px",
                    duration: 1,
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
            mm.add("(min-width: 601px)", () => {
                timeline.to('.firstFloor',{
                    left: "0px",
                    right: "0px",
                    duration: 1,
                })
                .to('.firstFloor',{
                    bottom: "280px",
                    duration: .5,
                })
                .to('.secondFloor',{
                    duration: 1,
                    left: "0px",
                    right: "0px",
                })
                .to('.secondFloor',{
                    bottom: "340px",
                    duration: .5,
                })
                .to('.octopus',{
                    duration: 1,
                    left: "0",
                    right: "0",
                })
                .to('.octopus',{
                    duration: .5,
                    bottom: "330px",
                })
                .to('.palmTree',{
                    height: "150px",
                    duration: 1,
                })
                .to('.sun', {
                    top: "70%",
                    marginLeft: "200px",
                    duration: 2,
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
            <div className="loading-wrapper">
                <img src={island} alt="island" className="island loading-img"/>
                <img src={treasure} alt="treasure" className="treasure loading-img" onClick={clickHandler}/>
                <img src={sun} alt="sun" className="sun loading-img"/>
                <img src={wave1} alt="wave1" className="wave1 loading-img"/>
                <img src={wave2} alt="wave2" className="wave2 loading-img"/>
                <img src={wave3} alt="wave3" className="wave3 loading-img"/>
                <img src={firstFloor} alt="firstFloor" className="firstFloor loading-img"/>
                <img src={secondFloor} alt="secondFloor" className="secondFloor loading-img"/>
                <img src={octopus} alt="octopus" className="octopus loading-img"/>
                <img src={palmTree} alt="palmTree" className="palmTree loading-img"/>
                <div className="bg-1"/>
                <div className="ocean-filler"/>
            </div>
        </div>
    )
}

export default loading;