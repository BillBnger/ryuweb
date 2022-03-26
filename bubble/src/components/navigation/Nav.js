import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { color } from '@mui/system';

const pages = ['About', 'Features', 'Roadmap', 'Team', 'FAQs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const logo = ['./nlogo.png'];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='static'
      sx={{ background: 'transparent', boxShadow: '0' }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flex: '6', mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img alt='Profile Picture' src={logo} width={100} />
          </Typography>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <img src='/nlogo.png' width={100} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,

              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
          <Button
            color='inherit'
            sx={{
              backgroundColor: '#009bf2',
              color: 'white',
              borderRadius: '50px',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#ff2fde',
              },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Join Our Discord
          </Button>
          <Box sx={{ display: { md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='right'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
