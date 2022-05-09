import React from 'react'
import { Benefits } from "../Benefits";
import { Faqs } from "../Faqs";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HomeBanner } from '../HomeBanner/HomeBanner';
import { JoinBoars } from "../JoinBoars";
import { Roadmap } from "../Roadmap/Roadmap";
import { Team } from "../Team";

export const Home = () => {
  return (

          <div className="MainDiv">
            <Header />
            <div className="fs_menu_overlay"></div>

            <HomeBanner/>
            {/* <BSCBanner /> */}
            <JoinBoars />
            <Benefits />

            <Roadmap />
            {/* <Collection /> */}
            <Team />
            <Faqs />
            <Footer />
          </div>
        );
      }
