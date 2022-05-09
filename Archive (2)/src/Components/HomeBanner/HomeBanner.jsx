import React from "react";
import HomeBannerImg from "../../assets/images/home-banner.png";
import "./home.css";

export const HomeBanner = () => {
  return (
    <div
      className="section main_slider mt-0"
      id="home"
      style={{
        backgroundImage: `url(${HomeBannerImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* <div className="container home-banner">
        <div className="row flex-column justify-content-space-between align-items-end ">
          <div className="col-md-12 center">
            <h1 className="main-heading">
              THE WORLD'S FIRST NFT PRIVATE <br /> LIFESTYLE CLUB
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
};
