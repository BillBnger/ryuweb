import React, { useMemo } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team1 from "../assets/images/dragon1.png";
import Team2 from "../assets/images/dragon2.png";
import Team3 from "../assets/images/dragon3.png";
import Team4 from "../assets/images/dragon4.png";
import "./team.css";

export const Team = () => {
  const members = useMemo(() => {
    return [
      {
        name: "Bill",
        position: "Founder",
        image: Team1,
      },
      {
        name: "Charles",
        position: "Investor",
        image: Team2,
      },
      {
        name: "Flou",
        position: "Investor",
        image: Team3,
      },
      {
        name: "Max",
        position: "Social Media Expert",
        image: Team4,
      },
    ];
  }, []);

  return (
    <div className="container-fluid section " id="team">
      <div className="container">
        <ScrollAnimation animateIn="slideInUp">
          <div className="row align-items-center fill_height">
            <div className="col-md-12 center">
              <h2 className="primary-heading center">OUR TEAM</h2>
              <p>The tremendous amount of work from our incredible team</p>
            </div>
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12 team-slider">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={2000}
                beforeChange={(previousSlide, { currentSlide, onMove }) => {
                  var elements =
                    document.getElementsByClassName("team-item-slide");
                  elements[currentSlide + 2].classList.add("bigger-team-item");
                }}
                afterChange={(previousSlide, { currentSlide, onMove }) => {
                  var elements =
                    document.getElementsByClassName("team-item-slide");
                  Array.prototype.forEach.call(
                    elements,
                    function (element, index) {
                      elements[index].classList.remove("bigger-team-item");
                    }
                  );
                  elements[currentSlide + 1].classList.add("bigger-team-item");
                }}
                centerMode={false}
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass="team-item-slide"
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                renderButtonGroupOutside={true}
                ssr={true}
              >
                {members.map((member, index) => {
                  return (
                    <div className="team-item" key={`slider-${index}`}>
                      <ScrollAnimation
                        key={`team-item-${index}`}
                        animateIn="fadeIn"
                      >
                        <div className="">
                          <div className="image-responsive  product_image team-thumb">
                            <img
                              src={`${member.image}`}
                              alt={`${member.name}`}
                              className="img-thumbnail"
                            />
                          </div>
                          <div className="product_info team-item-info">
                            <h2 className="team-name">{member.name}</h2>
                            <p className="team-position">{member.position}</p>
                            {/* <p>
                              <a
                                className="no-decoration"
                                href="#"
                                target={"_blank"}
                                rel="noopener noreferrer nofollow"
                              >
                                <i
                                  className="fab fa-twitter fa"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </p> */}
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};
