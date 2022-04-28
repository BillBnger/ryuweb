import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AboutUsImg from "../assets/images/team/sp-mask.png";
import AstroImg from "../assets/images/team/sp-cam.png";
import { useWindowWidth } from "../services/common_services";

export const AboutUs = () => {
  if (useWindowWidth() <= 600) {
    return (
      <div className="container "  id="about">
        <div className="row align-items-center justify-content-space-between section__mobi" >
          {/* <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
             
              <div className="image-responsive">
                <img
                  style={{ height: "auto", width: "100%" }}
                  alt="about"
                  src={AboutUsImg}
                />
              </div>
            </ScrollAnimation>
          </div> */}
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading">Who are we?</h1>
                <p className="primary-text">
                An infinite space collective. The Astro Army is an all encompassing plane of eternal brandishing. Simply put, we exist to push the boundaries of what is possible. A group comprised of individuals who want more out of the experience we call reality.     
                </p>          
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row align-items-center justify-content-space-between section__mobi ">
          {/* <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
              <div className="image-responsive">
                <img
                  style={{ height: "auto", width: "100%" }}
                  alt="about"
                  src={AstroImg}
                />
              </div>
            </ScrollAnimation>
          </div> */}
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading"> Our Brave Army</h1>
                <p className="primary-text">
                Made up of Infinauts, our brave members embark on a journey of everlasting expansion. To the light, from the light. We cruise the cosmos, deriving from the full feeling of our mind body and soul, becoming limitless as we triumph over all challenges that lie ahead. Existing in five dimensions, our mission encapsulates the deepest feelings and sensations imaginable in a never ending effort of reaching enlightenment. As soldiers, we battle for righteousness while enjoying fully the spoils of our endeavors.
                </p>
                {/* <div className="d-flex align-items-center justify-content-between center">
                  <div>
                    <h2>140+</h2>
                    <h4>TRAITS</h4>
                  </div>
                  <div>
                    <h2>6000</h2>
                    <h4>SUPPLY</h4>
                  </div>
                  <div>
                    <h2>PRESALE</h2>
                    <h4>0.04ETH</h4>
                  </div>
                  <div>
                    <h2>SALE</h2>
                    <h4>0.06ETH</h4>
                  </div>
                </div> */}
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading"> Title Goes Here</h1>
                <p className="primary-text">
                This NFT collection is a leap into the realm of infinite possibilities. This is the Astro Army. We are Infinauts. And everything you’ve ever imagined is only a step away.                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="container-fluid section"
      id="about"
    >
                         <div style={{textAlign:'center'}}> 
                         <h1 className="main-heading"> About Us</h1>
                           </div>  


      <div className="container">
        <div className="row align-items-center justify-content-space-between about__custom">
        

          <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
            
              <div className="" minWidth='lg'>
                <h1 className="main-heading">Who are we?</h1>
                <p className="primary-text">
                An infinite space collective. The Astro Army is an all encompassing plane of eternal brandishing. Simply put, we exist to push the boundaries of what is possible. A group comprised of individuals who want more out of the experience we call reality.
                </p>
          
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="image-responsive">
                <img
                  style={{ height: "auto", width: "100%", borderRadius:'20px' }}
                  alt="about"
                  src={AboutUsImg}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row align-items-center justify-content-space-between section about__custom">
          <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
              <div className="image-responsive">
                <img
                  style={{ height: "auto", width: "100%", borderRadius:'20px' }}
                  alt="about"
                  src={AstroImg}
                />
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading"> Our Brave Army</h1>
                <p className="primary-text">
                Made up of Infinauts, our brave members embark on a journey of everlasting expansion. To the light, from the light. We cruise the cosmos, deriving from the full feeling of our mind body and soul, becoming limitless as we triumph over all challenges that lie ahead. Existing in five dimensions, our mission encapsulates the deepest feelings and sensations imaginable in a never ending effort of reaching enlightenment. As soldiers, we battle for righteousness while enjoying fully the spoils of our endeavors.                </p>
                
              </div>
            </ScrollAnimation>
          </div>
          <div className="about__custom row align-items-center justify-content-space-between section cen" style={{textAlign:'center'}}>
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading"> Astro Army</h1>
                <p className="primary-text">
                This NFT collection is a leap into the realm of infinite possibilities. This is the Astro Army. We are Infinauts. And everything you’ve ever imagined is only a step away.                </p>
                
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
