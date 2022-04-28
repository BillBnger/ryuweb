

import React, {useMemo, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { Menu } from '@mui/icons-material';
import { MenuSocial } from './MenuSocial';

export default function OffCanvasMenu() {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    
    <div >
      <Box
      sx={{  width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
    
      
              
                           <ul className='off__menu' >

                             <li>
                               <a href='/#home'>Home</a>
                             </li>
                             <li>
                               <a href='/#about'>About</a>

                                </li>
                                <li>
                               <a href='/#roadmap'>Roadmap</a>
                                </li>
                                <li>
                               <a href='/#faq'>Faqs</a>
                                </li>
                                <li>
                               <a href='/#team'>Our Team</a>
                                </li>
                               
                        </ul>
                       
                        <MenuSocial/>

      </List>
     
    </Box>
      </div>
  );

  return (
    <div>
      
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}> <Menu sx={{marginRight:'40px', color:'#fff'}}/> </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            className='off__menu'
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
  
    </div>
  );
}
