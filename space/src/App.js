import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Homepage } from './components/pages/Homepage';
import { Footer } from './components/Footer';
import BooTopMenu from './components/navigation/BooTopMenu';

function App() {
  return (
    <>
      <BooTopMenu />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
