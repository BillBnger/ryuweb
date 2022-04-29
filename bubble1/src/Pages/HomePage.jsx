import React from 'react';
import HeroSection from '../components/pagesections/HeroSection';
import Features from '../components/pagesections/Features';
import Roadmap from '../components/pagesections/Roadmap';
import DevRoadmap from '../components/pagesections/DevRoadmap';
import Ourteam from '../components/pagesections/Ourteam';
import Faqs from '../components/faqs/Faqs';
import GetInAction from '../components/pagesections/GetInAction';


export const HomePage = () => {
  return (
      <>
      <div id='about'>
        <HeroSection />
      </div>
      <div id='features'>
        <Features />
      </div>
      <div id='roadmap'>
        <Roadmap />
      </div>
      <div id='devroadmap'>
        <DevRoadmap />
      </div>
      <div id='team'>
        <Ourteam />
      </div>
      <div id='faq'>
        <Faqs />
      </div>
      <div id='contactus'>
        <GetInAction />
      </div></>
  );
}
