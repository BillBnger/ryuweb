import React from 'react'
import {AboutUs} from '../AboutUs'
import {Roadmap} from '../Roadmap'
import { Faqs } from '../Faqs'
// import { Team } from '../Team'

import Herosection from '../herosection/Herosection'

export const Homepage = () => {
  return (
   <React.Fragment>
<div className='fs_menu_overlay'>
    <div id='home'> 
    <Herosection/>
      </div>
      <div id='about'>

    <AboutUs/>
      </div>
      <div id='roadmap'>
    <Roadmap/>
      </div>
      <div id='faq'>
    <Faqs/>
    </div>
    {/* <div id='team'>
    <Team/>
    </div> */}
    </div>
</React.Fragment>
  )
}
