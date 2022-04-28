import React, { useMemo } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { RoadmapItem } from "./RoadmapItem";

export const Roadmap2 = () => {
  const items = useMemo(() => {
    return [
      {
        title: "The Big Game",
        image: "",
        line1: (
          <>
            <p>To be announced soon.</p>
          </>
        ),
        align: "left",
        progress: "1",
      },
      {
        title: "Royalties",
        image: "",
        line1: (
          <>
            <p>
              Spinal Foxes Royalties will be 10% from secondary sales. 5% will
              go to “Wild Forest” fund. Other 5% will be distributed to the
              holders each month.
            </p>
          </>
        ),
        align: "right",
        progress: "2",
      },
    ];
  }, []);
  return (
    <div className="container section show-on-scroll" id="roadmap2">
      <ScrollAnimation animateIn="fadeIn">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 className="primary-heading center">Roadmap 1.2 Sicko Mode</h2>
            <p></p>
          </div>
        </div>
        <div
          className="row timeline align-items-center"
          style={{ marginTop: 80 }}
        >
          {items.map((item, index) => {
            return (
              <ScrollAnimation key={`animate=${index}`} animateIn="fadeIn">
                <RoadmapItem
                  key={index}
                  title={item.title}
                  line1={item.line1}
                  line2={item.line2}
                  image={item.image}
                  align={item.align}
                  progress={item.progress}
                />
              </ScrollAnimation>
            );
          })}
        </div>
      </ScrollAnimation>
    </div>
  );
};
