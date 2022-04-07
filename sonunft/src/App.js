import React from 'react';
import AnimatedNfts from './Components/AnimatedNFT/AnimatedNfts';
import Faqs from './Components/Faqs/Faqs';
import Footer from './Components/Footer/Footer';
import Herosection from './Components/Herosection/Herosection';
import MeetTheLegend from './Components/Meetlegend/MeetTheLegend';
import Navbar from './Components/Navigation/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Herosection />
      <AnimatedNfts />
      <MeetTheLegend />
      <Faqs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
