import React from 'react'
import { ReactComponent as Discord } from '../../../assets/images/discord.svg';
import { ReactComponent as Twitter } from '../../../assets/images/twitter.svg';
import { ReactComponent as Insta } from '../../../assets/images/instagram.svg';
import { ReactComponent as Opensea } from '../../../assets/images/opensea.svg';
import './menusocial.css'

export const MenuSocial = () => {
  return (
    
    <div className='social__menu'>
   
  
    <div className='menu__social__icons'>
            <a href='#'> 
            <Discord className='menu__social__icons'/>
            </a>
    </div>
    <div className='menu__social__icons'>
            <a href='#'> 
            <Twitter className='menu__social__icons'/>
            </a>
    </div>
    <div className='menu__social__icons'>
            <a href='#'> 
            <Insta className='menu__social__icons'/>
            </a>
    </div>
    <div className='menu__social__icons'>
            <a href='#'> 
            <Opensea className='menu__social__icons'/>
            </a>
    </div>
    </div>

  )
}
