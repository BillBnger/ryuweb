import React from "react";
import { ReactComponent as Discord } from '../assets/images/discord.svg';
import { ReactComponent as Twitter } from '../assets/images/twitter.svg';
import { ReactComponent as Insta } from '../assets/images/instagram.svg';
import { ReactComponent as Opensea } from '../assets/images/opensea.svg';
import './footer.css'
import JoinDiscord from "./JoinDiscord";

export const Footer = () => {
  return (
    <footer
      className="footer"
     
    >
      <JoinDiscord/>
      <div className="container">
       
          <div className="col-lg-12">
            <div >
          

            <div className='social__footer'>
   
  
   <div className='footer__social__icons'>
           <a href='#'> 
           <Discord className='footer__social__icons'/>
           </a>
   </div>
   <div className='footer__social__icons'>
           <a href='#'> 
           <Twitter className='footer__social__icons'/>
           </a>
   </div>
   <div className='footer__social__icons'>
           <a href='#'> 
           <Insta className='footer__social__icons'/>
           </a>
   </div>
   <div className='footer__social__icons'>
           <a href='#'> 
           <Opensea className='footer__social__icons'/>
           </a>
   </div>
          
          
   
           
       </div>

            </div>
          </div>
        </div>
        <hr style={{height:'1px', color:'#fff'}}/>
            <p className="copyright-text">
              ©2022 Astro Army | All right reserved
            </p>
        
    </footer>
  );
};

