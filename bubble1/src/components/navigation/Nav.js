import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { HashLink } from 'react-router-hash-link';

const logo = ['./images/logo01.png'];

const pages = ['About', 'Features', 'Roadmap', 'Team', 'Faq'];
const settings = ['About', 'Features', 'Roadmap', 'Team', 'Faq'];

function Nav() {
  //   const [pages] = React.useState([
  //     { name: 'About', val: props.hero },
  //     { name: 'Features', val: props.features },
  //     { name: 'Roadmap', val: props.roadmap },
  //     { name: 'Team', val: props.ourTeam },
  //     { name: 'FAQs', val: props.faqs },
  //   ]);
  //   const [settings] = React.useState([
  //     { name: 'About', val: props.hero },
  //     { name: 'Features', val: props.features },
  //     { name: 'Roadmap', val: props.roadmap },
  //     { name: 'Team', val: props.ourTeam },
  //     { name: 'FAQs', val: props.faqs },
  //   ]);
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
      sx={{ background: 'transparent', boxShadow: '0', mt: 4 }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flex: '6',
              mr: 3,
              mb: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <HashLink to='/'>
              <img src={logo} width={70} alt='ProfilePicture' />
            </HashLink>
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
            <img src={logo} width={50} alt='logo' />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,

              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                // onClick={() => props.onClick(page.val)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  paddingLeft: '1.5rem',
                  paddingRight: '1.5rem',
                }}
              >
                <HashLink
                  style={{ color: '#fff', textDecoration: 'none' }}
                  smooth
                  to={`/#${page.toLocaleLowerCase()}`}
                >
                  {page}
                </HashLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
          <a
            style={{ textDecoration: 'none' }}
            href='https://discord.gg/LEFT2DROP'
          >
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
          </a>
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
              {settings.map((setting, index) => (
                <MenuItem
                  sx={{ minWidth: '200px', borderBottom: '1px solid #f3f3f3' }}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    // onClick={() => props.onClick(setting.val)}
                    textAlign='right'
                  >
                    <HashLink
                      style={{ color: '#444', textDecoration: 'none' }}
                      smooth
                      to={`/#${setting.toLocaleLowerCase()}`}
                    >
                      {setting}
                    </HashLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
