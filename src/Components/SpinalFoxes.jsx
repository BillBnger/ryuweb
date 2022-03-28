import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import FoxSectionImg from "../assets/images/fox-section.png";

export const SpinalFoxes = () => {
  return (
    <div className="container section" id="spinal-foxes">
      <div className="row align-items-center justify-content-space-between">
        <div className="col-md-6 section-part section-space-right">
          <ScrollAnimation animateIn="slideInLeft">
            <div className="image-responsive">
              <img
                style={{ height: "auto", width: "100%" }}
                alt="about"
                src={FoxSectionImg}
              />
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 section-part ">
          <ScrollAnimation animateIn="slideInRight">
            <div className="">
              <h1 className="main-heading">6000 Spinal Foxes</h1>
              <p className="primary-text">
                Each fox is unique digital artwork that has been generated from
                a mix of 140+ traits. All Foxes looks decent, but some of them
                are more decent than other foxes! To get a Fox it will cost you
                0.04 eth if you are whitelisted! How to get WL check our
                discord! Public price will be 0.06 eth. Once all 6000 have been
                sold, no more Spinal Foxes will ever be created, instead of that
                you will see new Spinal animal coming to dominate Ethereum
                blockchain!
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2>140+</h2>
                  <h4>TRAITS</h4>
                </div>
                <div>
                  <h2>6000</h2>
                  <h4>TOTAL SUPPLY</h4>
                </div>
                <div>
                  <h2>Price</h2>
                  <h4>0.04ETH</h4>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
