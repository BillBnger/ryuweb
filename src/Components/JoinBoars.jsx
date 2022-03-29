import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import BullImg1 from "../assets/images/dragon1.png";

export const JoinBoars = () => {
  return (
    <div className="container-fluid section" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-space-between">
          <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
              <div className="stack-images ">
                <div className="row justify-content-center">
                  <div className="col-sm-12 stack-image">
                    <div className="image-responsive">
                      <img alt="about" src={BullImg1} />
                    </div>
                  </div>
                  {/* <div className="col-sm-6 stack-image">
                    <div className="image-responsive">
                      <img alt="about" src={BullImg2} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 stack-image">
                    <div className="image-responsive">
                      <img alt="about" src={BullImg3} />
                    </div>
                  </div>
                  <div className="col-sm-6 stack-image">
                    <div className="image-responsive">
                      <img alt="about" src={BullImg4} />
                    </div>
                  </div> */}
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 section-part ">
            <ScrollAnimation animateIn="slideInRight">
              <div className="">
                <h1 className="main-heading">Who are we?</h1>
                <p className="primary-text">
                  It all started with two crypto enthusiasts talking About NFTs. It didn't take long until an idea popped up in their heads. "Wouldn't it be awesome to launch your own NFT collection?"
                </p>
                <p>
                  Just a couple days later we were able to present our idea to an investor. They were absolutely thrilled. Thus Ryu World was born.
                </p>
                <p>
                  The only thing missing was an artist, but it didn't take long until we were able to find one. We gave him a gist of our vision and he absolutely killed it. Here's what he came up with.
                </p>
                <p>
                  Not long after the digital version followed. We decided to put scales over the entire body and now the final product looks like this (the finished one).
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
