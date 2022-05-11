import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-scroll";
import LogoImg from "../assets/images/logo.png";
import { MobileNavBar } from "./MobileNavBar";
import { Socials } from "./Socials/Socials";

export const Header = () => {
  return (
    <div className="header trans_300">
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <a href="/">
                  <Image src={`${LogoImg}`} rounded={true} />
                </a>
              </div>
              <nav
                className="navbar d-flex justify-content-between"
                style={{ float: "none" }}
              >
                <ul
                  className="navbar_menu"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    marginRight: "-100px",
                  }}
                >
                  <li>
                    <Link href="#" to="home" spy={true} smooth={true}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" to="about" spy={true} smooth={true}>
                      Story
                    </Link>
                  </li>
                  <li>
                    <Link href="#" to="roadmap" spy={true} smooth={true}>
                      Roadmap
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" to="collection" spy={true} smooth={true}>
                      Showcase
                    </Link>
                  </li> */}
                  <li>
                    <Link href="#" to="team" spy={true} smooth={true}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" to="faqs" spy={true} smooth={true}>
                      Faq
                    </Link>
                  </li>
                  <li>
                    <a href="https://mintryuworld.com">
                      Mint
                    </a>
                  </li>
                </ul>
                <ul className="navbar_user hide-mobile">
                  <li>
                    <Socials />
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};
