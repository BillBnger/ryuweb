import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from 'react-bootstrap';



const JoinDiscord = () => {
  return (
    <div className="container-fluid section " >
    <div className="container">
      <ScrollAnimation animateIn="slideInDown">
        <div className="row align-items-center fill_height">
          <div className="col-md-12 center">
            <h2 className="primary-heading center">Join the Astro Army </h2>
            {/* <p>Join a genuine community of 999,000 Astro Army!</p> */}
          </div>
          <div className="col-md-12"></div>
          <Button className='discord__btn_foo'> Join our discord</Button>

        </div>
       
      </ScrollAnimation>
    </div>
  </div>
  )
}

export default JoinDiscord
