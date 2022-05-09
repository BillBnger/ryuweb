import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import HomeBannerImg from "../../assets/images/home-banner.png";
import "./home.css";

export const BSCBanner = () => {
  return (
    <div className="section " id="home">
      <div className="container fill_height">
        <div className="row align-items-center fill_height justify-content-space-between">
          <div className="col-md-6 section-part section-space-right">
            <ScrollAnimation animateIn="slideInLeft">
              <div className="">
                <h1 className="main-heading">
                  GLOBALLY FABRICATE GOAL-ORIENTED RESULTS DISINTERMEDIATE
                </h1>
                <p className="text-white">
                  DISTINCTIVE SEIZE EFFECTIVE CHANNELS BEFORE BACKEND METHODS OF
                  EMPOWERMENT. GLOBALLY IMPACT INSTALLED BASE.
                </p>
                <span>
                  <div className="d-flex">
                    <a
                      href="https://www.instagram.com/angryfalconnft/"
                      className="btn btn-white btn-sm btn-social"
                      style={{ marginLeft: 0 }}
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="TwitterIcon"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                      </svg>{" "}
                      Twitter
                    </a>
                    <a
                      href="https://www.instagram.com/angryfalconnft/"
                      className="btn btn-white btn-sm btn-social"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="AdbIcon"
                      >
                        <path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                      </svg>{" "}
                      Discord
                    </a>
                  </div>
                </span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-6 section-part banner-right">
            <ScrollAnimation animateIn="slideInRight">
              <div className="image-responsive">
                <img src={HomeBannerImg} alt="Home" className="home-image" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};
