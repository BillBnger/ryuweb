import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/pages/Home';
import { Mint } from './Mint/Mint';

class App extends React.Component {
  render() {
    return (
      <div className='MainDiv'>
        {/* <Header />
        <div className='fs_menu_overlay'></div> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mint' element={<Mint />} />
        </Routes>
      </div>
    );
  }
}

export default App;
