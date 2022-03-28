import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./team.css";

export const Slider = (props) => {
  const { slides, config = [], direction = "left" } = props;
  return (
    <Carousel
      transitionDuration={1000}
      additionalTransfrom={1000}
      autoPlaySpeed={1000}
      autoPlay={true}
      direction={direction}
      centerMode={true}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      focusOnSelect={true}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderDotsOutside={false}
      responsive={config}
      showDots={false}
      sliderClass=""
      renderButtonGroupOutside={true}
      arrows={false}
      ssr={true}
      slidesToSlide={1}
    >
      {slides.map((slide, index) => {
        return (
          <div className="" key={`slider-${index}`}>
            <div className="image-responsive">
              <img src={slide} alt="not-found" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
