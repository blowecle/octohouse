import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Routes';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const App = () => {
  return (
    <BrowserRouter>
      {/* <Router /> */}
      <div className='wrapper'>
        {/* <Parallax pages={7}
        style={{maxHeight: '100vh'}}>
          <ParallaxLayer
          speed={.4}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_7_ro2xih.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={.5}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_6_stvbn0.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={.7}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_5_yyyrmp.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={.7}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_4_ckfbaz.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={.8}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_3_gnidiu.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={.9}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_2_rqykmh.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          speed={1}
          style={{backgroundImage: `url('https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_1_wz0wl7.png')`, backgroundSize: 'cover'}}>
          </ParallaxLayer>
          <ParallaxLayer
          offset={.9}
          speed={1}
          style={{backgroundColor: '#8BD0DB'}}>
            <div>
              <h2>offset</h2>
            </div>
          </ParallaxLayer>
        </Parallax> */}
        <div className='parallax-wrapper'>
          <img className='parallax-one' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_7_ro2xih.png'/>
          <img className='parallax-two' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_6_stvbn0.png'/>
          <img className='parallax-three' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_5_yyyrmp.png'/>
          <img className='parallax-four' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_4_ckfbaz.png'/>
          <img className='parallax-five' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_3_gnidiu.png'/>
          <img className='parallax-six' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_2_rqykmh.png'/>
          <img className='parallax-seven' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1671217017/octo-house/Layer_1_wz0wl7.png'/>
        </div>
        <div className='content'>
          <div className='image-wrapper'>
            <img className='tester-image' src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-2303878664998712562_ghe5fy.jpg'/>
          </div>
          <div className='filler'></div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
