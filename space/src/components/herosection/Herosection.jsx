import React, { useEffect, useState } from 'react'
import './herosection.css';
import BgVideo from "../../assets/videos/spacevid.mp4";
import Astro from '../../assets/images/astro-main-float.png'
import {SocialRight}  from '../SocialRight';



const Herosection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
    
    // function logit() {
    //     setScrollY(window.pageYOffset);
    //     console.log(new Date().getTime());
    //   }
    
      useEffect(() => {
        const updatePosition = () => {
          setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", updatePosition);

        return () => 
          window.removeEventListener("scroll", updatePosition);
        }, []);
  
  return (
    
    <div  container-fluid style={{ height:'90vh',}}>
      <video
                disablePictureInPicture
                controlsList="nodownload"
                id="myVideo"
                muted
                autoPlay="true"
                loop
                style={{ width: "100%" }}
              >
                <source src={BgVideo} type="video/mp4" />
        </video>

{/* <video src={BgVideo}   autoPlay="true" /> */}
{/* 
<img src={logoimg} width='300px' alt="logo" className='hero__img__01'/> */}
      <div className="astro-img floating"> <img className='logoimg' src={Astro} width='600px' alt="logo" style={{ 
transform: `translate(-50%, 20%) rotate(${scrollPosition/20}deg)`, width: `${scrollPosition > 0 ? 400 + 200 - scrollPosition : null}px`

       }} /></div>

<SocialRight />
    

    </div>


  )
}

export default Herosection

