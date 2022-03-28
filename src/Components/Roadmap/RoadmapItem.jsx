import React from "react";
import { useWindowWidth } from "../../services/common_services";

export const RoadmapItem = (props) => {
  const {
    title,
    progress = "0",
    line1,
    line2,
    line3,
    image,
    align = "left",
  } = props;

  const content = (
    <div>
      <p className="text-white">{line1}</p>
      <p className="text-white">{line2}</p>
      <p className="text-white">{line3}</p>
    </div>
  );

  const dotContent = (
    <div className="timeline-dot-content ">
      <div className="sticky-dot d-flex align-items-center justify-content-center"></div>
    </div>
  );

  if (useWindowWidth() <= 600) {
    return (
      <div className="row align-items-center timeline-item">
        <div className="col-sm-2">
          <div className="dot">{dotContent}</div>
        </div>
        <div className="col-sm-10">
          <div className="content-box">
            <h2 className="roadmap-item-heading">{title}</h2>
            {content}
          </div>
        </div>
        <div className="col-md-6 border-right left timeline-container d-flex align-items-center"></div>
        <div className="col-md-6 border-left"></div>
      </div>
    );
  }

  if (align === "right") {
    return (
      <div className="row align-items-center timeline-item">
        <div className="col-md-6 border-right left timeline-container d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-md-12 text-right">
              {image !== "" && (
                <div className="image-responsive">
                  <img src={`${image}`} alt="" />
                </div>
              )}
            </div>
          </div>
          {dotContent}
        </div>
        <div className="col-md-6 border-left">
          <div className="content-box">
            <h2 className="roadmap-item-heading">{title}</h2>
            {content}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row align-items-center timeline-item">
      <div className="col-md-6 border-right left timeline-container d-flex align-items-center">
        <div className="content-box">
          <h2 className="roadmap-item-heading">{title}</h2>
          {content}
        </div>
        {dotContent}
      </div>
      <div className="col-md-6 border-left">
        <div className="row align-items-center">
          <div className="col-md-12 text-left">
            {image !== "" && (
              <div className="image-responsive">
                <img src={`${image}`} alt={`${title}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
