import React from 'react'
import { ReactComponent as Discord } from '../assets/images/discord.svg';
import { ReactComponent as Twitter } from '../assets/images/twitter.svg';
import { ReactComponent as Insta } from '../assets/images/instagram.svg';
import { ReactComponent as Opensea } from '../assets/images/opensea.svg';




export const SocialRight = () => {
  return (
    <div>
        <div className='social__box'>
   

  
<div className='top__social__icons'>
        <a href='#'> 
        <Discord className='top__social__icons'/>
        </a>
</div>
<div className='top__social__icons'>
        <a href='#'> 
        <Twitter className='top__social__icons'/>
        </a>
</div>
<div className='top__social__icons'>
        <a href='#'> 
        <Insta className='top__social__icons'/>
        </a>
</div>
<div className='top__social__icons'>
        <a href='#'> 
        <Opensea className='top__social__icons'/>
        </a>
</div>
       
       

        
    </div>

    </div>
  )
}
