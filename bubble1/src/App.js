import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Faqs from './components/faqs/Faqs';
import Nav from './components/navigation/Nav';
// import DevRoadmap from './components/pagesections/DevRoadmap';
// import Features from './components/pagesections/Features';
// import GetInAction from './components/pagesections/GetInAction';
// import HeroSection from './components/pagesections/HeroSection';
// import Ourteam from './components/pagesections/Ourteam';
// import Roadmap from './components/pagesections/Roadmap';
import Footer from './components/pagesections/Footer';
import Terms from './components/termsandconditions/Terms';
import { Mint } from './Mint/Mint';

import './App.css';
import { HomePage } from './Pages/HomePage';

function App() {
  // const btn1Height = useRef(null);
  // const btn2Height = useRef(null);
  // const btn3Height = useRef(null);
  // const btn4Height = useRef(null);
  // const btn5Height = useRef(null);
  // const btn6Height = useRef(null);
  // const btn7Height = useRef(null);

  // const hero = useRef(null);
  // const features = useRef(null);
  // const roadmap = useRef(null);
  // const devRoadmap = useRef(null);
  // const ourTeam = useRef(null);
  // const faqs = useRef(null);
  // const getIntouch = useRef(null);

  // const navScroll = sec => {
  //   window.scrollTo({
  //     top: sec.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  // const dotNavigation = (
  //   sec,
  //   dotBtn,
  //   btn1Height,
  //   btn2Height,
  //   btn3Height,
  //   btn4Height,
  //   btn5Height,
  //   btn6Height
  // ) => {
  //   dotBtn.current.style.height = '25px';
  //   dotBtn.current.style.borderRadius = '5px';
  //   btn1Height.current.style.height = '2px';
  //   btn1Height.current.style.borderRadius = '5px';
  //   btn2Height.current.style.height = '2px';
  //   btn2Height.current.style.borderRadius = '5px';
  //   btn3Height.current.style.height = '2px';
  //   btn3Height.current.style.borderRadius = '5px';
  //   btn4Height.current.style.height = '2px';
  //   btn4Height.current.style.borderRadius = '5px';
  //   btn5Height.current.style.height = '2px';
  //   btn6Height.current.style.borderRadius = '5px';
  //   btn6Height.current.style.height = '2px';
  //   btn6Height.current.style.borderRadius = '5px';

  //   window.scrollTo({
  //     top: sec.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <React.Fragment>
      <Nav />
      {/* <div className='div__fixed'>
        <button
          ref={btn1Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              hero,
              btn1Height,
              btn2Height,
              btn3Height,
              btn4Height,
              btn5Height,
              btn6Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn2Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              features,
              btn2Height,
              btn1Height,
              btn3Height,
              btn4Height,
              btn5Height,
              btn6Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn3Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              roadmap,
              btn3Height,
              btn2Height,
              btn1Height,
              btn4Height,
              btn5Height,
              btn6Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn4Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              devRoadmap,
              btn4Height,
              btn2Height,
              btn1Height,
              btn3Height,
              btn5Height,
              btn6Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn5Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              ourTeam,
              btn5Height,
              btn2Height,
              btn1Height,
              btn4Height,
              btn3Height,
              btn6Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn6Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              faqs,
              btn6Height,
              btn2Height,
              btn1Height,
              btn4Height,
              btn5Height,
              btn3Height,
              btn7Height
            )
          }
        ></button>
        <button
          ref={btn7Height}
          className='dot__Btn'
          onClick={() =>
            dotNavigation(
              getIntouch,
              btn7Height,
              btn2Height,
              btn1Height,
              btn4Height,
              btn5Height,
              btn6Height,
              btn3Height
            )
          }
        ></button>
      </div> */}
      {/* <Nav
        hero={hero}
        features={features}
        roadmap={roadmap}
        ourTeam={ourTeam}
        faqs={faqs}
        onClick={navScroll}
      /> */}

      {/* <Route
          path='/'
          element={
            <Home
              hero={hero}
              features={features}
              roadmap={roadmap}
              devRoadmap={devRoadmap}
              ourTeam={ourTeam}
              faqs={faqs}
              getIntouch={getIntouch}
            />
          }
        /> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/terms' element={<Terms />} />
        {/* <Route path='/mint' element={<Mint />} /> */}
      </Routes>

      <Mint />
      <Footer />
      {/* <Mint /> */}
    </React.Fragment>
  );
}
// function Home(props) {
//   return (
//     <>
//       <div>
//         <div id='aboutus' ref={props.hero}>
//           <HeroSection />
//         </div>
//         <div ref={props.features}>
//           <Features />
//         </div>
//         <div id='roadmap' ref={props.roadmap}>
//           {' '}
//           <Roadmap />
//         </div>
//         <div ref={props.devRoadmap}>
//           {' '}
//           <DevRoadmap />{' '}
//         </div>
//         <div ref={props.ourTeam}>
//           <Ourteam />{' '}
//         </div>
//         <div ref={props.faqs}>
//           {' '}
//           <Faqs />{' '}
//         </div>
//         <div id='contactus' ref={props.getIntouch}>
//           <GetInAction />
//         </div>
//       </div>
//     </>
//   );
// }

export default App;
