import React from "react";
import "./App.css";
import { Benefits } from "./Components/Benefits";
import { Collection } from "./Components/Collection/Collection";
import { Faqs } from "./Components/Faqs";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { BSCBanner } from "./Components/Home/BSCBanner";
import { HomeBanner } from './Components/HomeBanner/HomeBanner';
import { JoinBoars } from "./Components/JoinBoars";
import { Roadmap } from "./Components/Roadmap/Roadmap";
import { Team } from "./Components/Team";

class App extends React.Component {
  render() {
    return (
      <div className="MainDiv">
        <Header />
        <div className="fs_menu_overlay"></div>

        <HomeBanner />
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
}

export default App;
