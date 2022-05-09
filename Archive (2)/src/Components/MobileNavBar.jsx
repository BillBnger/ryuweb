import React from "react";
import { Link } from "react-scroll";
export const MobileNavBar = () => {
  return (
    <div className="hamburger_menu">
      <div className="hamburger_close">
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="hamburger_menu_content text-left">
        <ul className="menu_top_nav">
          <li className="menu_item">
            <Link href="#" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li className="menu_item">
            <Link href="#" to="about" spy={true} smooth={true}>
              Story
            </Link>
          </li>
          <li className="menu_item">
            <Link href="#" to="roadmap" spy={true} smooth={true}>
              Roadmap
            </Link>
          </li>
          {/* <li className="menu_item">
            <Link href="#" to="spinal-foxes" spy={true} smooth={true}>
              Showcase
            </Link>
          </li> */}
          <li className="menu_item">
            <Link href="#" to="team" spy={true} smooth={true}>
              Team
            </Link>
          </li>
          <li className="menu_item">
            <Link href="#" to="faqs" spy={true} smooth={true}>
              Faq
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
