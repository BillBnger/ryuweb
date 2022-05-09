import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/pages/Home';
import CenterMint from './Mint/CenterMint';

class App extends React.Component {
  render() {
    return (
      <div className='MainDiv'>
        {/* <Header />
        <div className='fs_menu_overlay'></div> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CenterMint' element={<CenterMint />} />
        </Routes>
      </div>
    );
  }
}

export default App;
