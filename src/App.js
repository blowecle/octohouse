import './css/App.css';
import Home from './components/Home';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
      console.log(scrollPosition)
      if (scrollPosition >= 100) {
        setCurrentIndex(1);
      }

      if (scrollPosition >= 500) {
        setCurrentIndex(2);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Home/>
    // <div className='content'>
    //   <div
    //     className={`sliding-div ${currentIndex >= 0 ? 'visible' : 'hidden'}`}
    //     style={{ backgroundColor: 'red' }}
    //   >
    //     Div 1
    //   </div>
    //   <div
    //     className={`sliding-div ${currentIndex >= 1 ? 'visible' : 'hidden'}`}
    //     style={{ backgroundColor: 'green' }}
    //   >
    //     Div 2
    //   </div>
    //   <div
    //     className={`sliding-div ${currentIndex >= 2 ? 'visible' : 'hidden'}`}
    //     style={{ backgroundColor: 'blue' }}
    //   >
    //     Div 3
    //   </div>
    // </div>
  );
}
// import { BrowserRouter } from 'react-router-dom';
// import Router from './components/Routes';
// import {Parallax} from 'react-parallax'
// import first from './first.jpeg'
// import second from './second.jpeg'
// import third from './third.jpeg'

// const App = () => {
  // return (
  //   <BrowserRouter>
      {/* <Router /> */}
      {/* <Parallax strength={200} bgImage={first}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={second}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={third}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
    </BrowserRouter>
  ); */}
// }

export default App;
