import React, { useMemo } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Phase1Img from "../../assets/images/dragon1.png";
import Phase2Img from "../../assets/images/dragon2.png";
import Phase3Img from "../../assets/images/dragon3.png";
import "./roadmap.css";
import { RoadmapItem } from "./RoadmapItem";

export const Roadmap = () => {
  const items = useMemo(() => {
    return [
      {
        title: "NFT Collection ",
        image: Phase1Img,
        line1: `1-5-2022 Whitelist Sale`,
        line2: `3-5-2022 Public Sale`,
        line3: `7-5-2022 Reveal`,
        align: "right",
        progress: "0%",
      },
      {
        title: "The RyuCoin ",
        image: Phase2Img,
        line1: `1-5-2022 Whitelist Sale`,
        line2: `3-5-2022 Public Sale`,
        align: "right",
        progress: "25%",
      },
      {
        title: "Following",
        image: Phase3Img,
        line1: (
          <>

            <p>
              <ul style={{ listStyle: "disc", paddingLeft: 30 }}>
                <li>
                  Airdrops
                </li>
                <li>Giveaways</li>
                <li>Merchandise</li>
                <li>Special Events</li>
                <li>
                  2nd Collection
                </li>
              </ul>
            </p>
          </>
        ),
        align: "right",
        progress: "50%",
      },
      //     {
      //       title: "A day before ",
      //       image: Phase4Img,
      //       line1: (
      //         <>
      //           <p>
      //             As we near having our collection sold out, We’ll be donating +14
      //             ETH to Spinal Injuries associations. We are not finished yet,
      //             we’ll do a 4*0.5 ETH giveaway to random holders. You’ll get a
      //             glimpse of our “Forest Run” game trailer and Our Exclusive Merch
      //             store will be unlocked. We’ll conduct Merch Giveaways and ‘Wild
      //             Forest’ will be open to all Spinal Fox holders.
      //           </p>
      //         </>
      //       ),
      //       align: "left",
      //       progress: "75%",
      //     },
      //     {
      //       title: "Going All In",
      //       image: "",
      //       line1: (
      //         <>
      //           <p>
      //             Last but not least, we’ll set +20 ETH Donations to Spinal Injuries
      //             associations. 5 * 0.5 ETH will be given to random Spinal Fox
      //             owners. Alongside, 40 ETH will go to the ‘Wild Forest’ fund and
      //             the ‘Forest Run’ Game launch will happen
      //           </p>
      //         </>
      //       ),
      //       align: "right",
      //       progress: "100%",
      //     },
      //
    ];
    //
  },
    []);

  return (
    <div className="container-fluid section show-on-scroll" id="roadmap">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="primary-heading center">RoadMap</h2>
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
                    line3={item.line3}
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
    </div>
  );
};
