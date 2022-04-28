import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import OffCanvasMenu from './offCanvas/OffCanvasMenu'
import './bootopmenu.css'

const BooTopMenu = () => {
  return (
    <div>


<Navbar className='nav__bar__top'>

    <Navbar.Brand href="#home" style={{color:'#fff', }}>Astro Army</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <OffCanvasMenu />
      </Navbar.Text>
    </Navbar.Collapse>

</Navbar>

    </div>
  )
}

export default BooTopMenu;
