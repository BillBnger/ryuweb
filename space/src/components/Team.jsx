import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Team1 from "../assets/images/team/sp-alien.png";
import Team2 from "../assets/images/team/sp-mask.png";
import Team3 from "../assets/images/team/sp-sword2.png";
import Team4 from "../assets/images/team/sp-cam.png";
import Team5 from "../assets/images/team/sp-eye.png";
import Team6 from "../assets/images/team/sp-sword.png";
import Discord from "../assets/images/discord.svg";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";


import "./team.css";

export const Team = () => {
  const members = useMemo(() => {
    return [
      {
        name: "Manfred",
        position: "Developer",
        image: Team1,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,

      },
      {
        name: "Nigel",
        position: "Developer",
        image: Team2,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,      },
      {
        name: "Alexander",
        position: "Developer",
        image: Team3,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,      },
      {
        name: "Tommy",
        position: "Developer",
        image: Team4,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,      },
      {
        name: "Khaycee",
        position: "Developer",
        image: Team5,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,      },
      {
        name: "Khaycee",
        position: "Developer",
        image: Team6,
        discord:Discord,
        instagram:Instagram,
        twitter:Twitter,      },
    ];
  }, []);

  return (
    <div className="container-fluid section"  style={{background:'#fff'}} >
      <div className="container">
          <div className="row align-items-center fill_height">
            <div className="col-md-12 center">
              <h2 className="team__heading center">OUR TEAM</h2>
              <p className="text02">The tremendous amount of work from our incredible team</p>
            </div>
          </div>
         
          <div className="row">
              <div className="col-md-12">
              
            <Row className="team">
              {members.map((member, index) => {
                return (
                  <Col key={index}>
                  <div className="team__image"> 
                 <img src={member.image} width='130px' alt='images'/>
                    </div>
                <div className="team__name"> 
                {member.name}
                  </div>  
                  <div className="team__position">
                  {member.position}
                    </div>
                    <div>
                      {/* <img src= {member.discord} width='20px' alt='images'/>
                      <img src= {member.instagram} width='20px' alt='images'/> */}
                      <img src= {member.twitter} width='20px' alt='images'/>


                    </div>
                  
                  
                 
                  </Col>

                )})}
          
            </Row>

          
              </div>
              </div> 
  
           
       </div>
       </div>
  );    

};
