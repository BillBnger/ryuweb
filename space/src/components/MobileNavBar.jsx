import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { HeaderMenuItem } from "./Header";
export const MobileNavBar = (props) => {
  const { isHome = false } = props;
  return (
    <div className="hamburger_menu">
      <div className="hamburger_close">
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="hamburger_menu_content text-left">
        <ul className="menu_top_nav">
          <li className="menu_item">
            <RouteLink href="#" to="/home" spy={true} smooth={true}>
              Home
            </RouteLink>
          </li>
          <li className="menu_item">
            <HeaderMenuItem
              href="#"
              to="about"
              spy={true}
              smooth={true}
              isHome={isHome}
            >
              Story
            </HeaderMenuItem>
          </li>
          <li className="menu_item">
            <HeaderMenuItem
              href="#"
              to="roadmap"
              spy={true}
              smooth={true}
              isHome={isHome}
            >
              Roadmap
            </HeaderMenuItem>
          </li>
          <li className="menu_item">
            <HeaderMenuItem
              href="#"
              to="spinal-foxes"
              spy={true}
              smooth={true}
              isHome={isHome}
            >
              Showcase
            </HeaderMenuItem>
          </li>
          <li className="menu_item">
            <HeaderMenuItem
              href="#"
              to="team"
              spy={true}
              smooth={true}
              isHome={isHome}
            >
              Team
            </HeaderMenuItem>
          </li>
          <li className="menu_item">
            <HeaderMenuItem
              href="#"
              to="faqs"
              spy={true}
              smooth={true}
              isHome={isHome}
            >
              Faq
            </HeaderMenuItem>
          </li>
         

          {/* <li className="menu_item">
            <div className="social-items d-flex flex-row align-items-center ">
              <ul style={{ display: "flex" }}>
                <li>
                  <a
                    className="social-link"
                    href="https://twitter.com/AngryFalconNFT"
                    target={"_blank"}
                    rel="noopener noreferrer nofollow"
                  >
                    <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
                  </a>
                </li>

                <li>
                  <a
                    className="social-link"
                    href="https://discord.gg/S9PSXJeKRj"
                    target={"_blank"}
                    rel="noopener noreferrer nofollow"
                  >
                    <i className="fab fa-discord fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="social-link"
                    href="https://www.instagram.com/angryfalconnft/"
                    target={"_blank"}
                    rel="noopener noreferrer nofollow"
                  >
                    <i
                      className="fa fa-paper-plane fa-2x"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
