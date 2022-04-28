import React, { useMemo } from "react";
import ShowMoreText from "react-show-more-text";
import ScrollAnimation from "react-animate-on-scroll";
// import { Link as RouteLink } from "react-router-dom";
import Phase1Img from "../assets/images/0percent.png";
import Phase2Img from "../assets/images/30percent.png";
import Phase3Img from "../assets/images/65percent.png";
import Phase4Img from "../assets/images/90percent.png";
import { RoadmapItem } from "./RoadmapItem";


export const Roadmap = () => {
  const items = useMemo(() => {
    return [
      {
        title: "Stage 1 - Recruitment ",
        // image: Phase1Img,
        line1:( <>
        “Infinauts wanted - are you eager to explore, or yearning for more? Join us.”
        In the early stages of our project, we’ll be looking for worthy candidates to join our cause, and protect Earth from the incoming invasion. Getting involved is as simple as joining our Discord, or following us on Instagram.
        Board the ship, buckle-up, and stay tuned.
        </>),
    
        align: "right",
        progress: "0%",
        image: Phase1Img,
       

      },
      {
        title: "Stage 2 - Lift Off (MINT) ",
        line1: (
          <>
            
            As our ship takes off with our Infinauts on board, we’ll start preparations for our arrival at the ISS.
2500 3D NFTs will be minted onto the Ethereum blockchain. Our artwork is generative-style, composed of 50 hand-drawn traits. IMPORTANT: EACH PURCHASE OF YOUR UNIQUE AND INDIVIDUALIZED 3D INFINAUT IS A FREE 2D MIRRORED ACADEMY HEADSHOT NFT.This is their last picture taken before blast off. This 2D NFT is included FOR FREE upon purchase of our 3D NFT. Each of our NFTs is completely unique, and a representation of your commitment to our journey.
          
          </>
        ),
        align: "left",
        progress: "15%",
      },
      {
        title: "Stage 3 - Merch Giveaway",
        line1: (
          <>
            <p>
            Once we’re settled in space and preparing for battle, there will be a chance to reassess your clothing choices.
We’ll be partnering with Infinityy Clothing to offer our holders unique discounts and giveaways on premium clothing options. As well as a selection of unique designs, holders will also be able to purchase merchandise that displays their 1/1 NFT.
Holders of our 10 super rare NFTs will receive a 50% discount on all Infinityy Clothing and free merchandise displaying their design, whilst other holders get 10% off store-wide.
We’ll be showing our community what their support means using giveaways and auctions, as well as giving a percentage of mint profits back to a charity that will be chosen by our community.
            </p>
          </>
        ),
        align: "right",
        progress: "30%",
        image: Phase2Img,
      },
      {
        title: "Stage 4 - Infinite Invaders(Community Voting)",
        line1: (
          <>
            <p>
            The Invaders are here - and their message is kind of convincing.

At this stage in our collection, 1250 of our holders will be able to mutate their NFT to become an Infinite invader. They’ll get a reset on rarity, but most importantly they’ll now be on the opposing side, which will be important in the future.
All of our holders will be able to propose ideas for the collection, with the highest voted ideas being implemented.
            </p>
          </>
        ),
        align: "left",
        progress: "50%",
        
      },
      {
        title: "Stage 5 - Metaverse and Virtual Clothing",
        line1: (
          <>
            <p>
            Now the sides have been chosen, it’s time to build a base.
Now that our two sides are fully established, we’ll be buying land in the metaverse using mint profits and creating bases for the Inifinauts and the Infinite Invaders. These bases will act as central hubs to discuss tactics for the upcoming games.
In order to help you show off a little bit more, we’ll be creating 3D versions of the clothes from our partners Infinityy Clothing, and allowing you to customize your 3D NFTs with a brand new look that matches your allegiance.
            </p>
          </>
        ),
        align: "right",
        progress: "65%",
        image: Phase3Img,
      },
      {
        title: "Stage 6 - P2E Game",
        line1: (
          <>
            <p>
            The battle is finally here - who will be the victor?
Each month, Astro Army will host a PVP style game that pits the Inifinauts against the Infinite Invaders. Using a wager system, and a 1v1-style gameplay, players will have the chance to earn.
Are you ready to do battle?
 </p>
          </>
        ),
        align: "left",
        progress: "80%",
      },
      {
        title: "Stage 7 - Giving Back",
        image: "",
        line1: (
          <>
            <p>
            Looking back at Earth from up here, it’s important to remember how far you’ve come and how you got here.
We’re eager to show our appreciation to those that made our journey possible, so we’ll be giving back in a number of ways.
             </p>
          </>
        ),
        align: "right",
        progress: "90%",
        image: Phase4Img,
        
      },
      {
        title: "Stage 8- premium give away",
        image: "",
        line1: (
          <>
            <p>
            Once we’ve sold out of our nfts we will be giving away two, 2020 model S Tesla’s, one in white and one in black for 2 of our 3D nft holders what a prize! Let’s take off into the future.
            </p>
          </>
        ),
        align: "left",
        progress: "100%",
      },
    ];
  }, []);

  // const map2Items = useMemo(() => {
  //   return [
  //     {
  //       title: (
  //         <>
  //           <RouteLink href="/game" to="game" spy={true} smooth={true}>
  //             The Big Game
  //           </RouteLink>
  //         </>
  //       ),
  //       image: "",
  //       line1: <></>,
  //       align: "left",
  //       progress: "1",
  //     },
  //     {
  //       title: "Royalties",
  //       image: "",
  //       line1: (
  //         <>
  //           <p>
  //             Spinal Foxes Royalties will be 10% from secondary sales. 5% will
  //             go to “Wild Forest” fund. Other 5% will be donated to “National
  //             institute of neurogical disorders and stroke" towards to cure
  //             spinal cord injuries.
  //           </p>
  //         </>
  //       ),
  //       align: "right",
  //       progress: "2",
  //     },
  //   ];
  // }, []);
  return (
    <div
      className="container-fluid section show-on-scroll bg"
      id="roadmap"
      
    >
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h2 className="primary-heading center">RoadMap</h2>
            </div>
          </div>

          <div
            className="row timeline align-items-center"
            style={{ marginTop: 50 }}
          >
            {items.map((item, index) => {
              return (
                <ScrollAnimation key={`animate=${index}`} animateIn="fadeIn">
                  <RoadmapItem  className="roadmap__card__size"
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
    </div>
  );
};
