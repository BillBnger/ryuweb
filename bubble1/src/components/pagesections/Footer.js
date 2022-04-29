import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Grid, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import { NavHashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
  footerLinks: {
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'Poppins',
    pt: 2,
    pb: 2,
    color: '#fff',
    cursor: 'pointer',
    '& a': {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  footerCredits: {
    fontWeight: '500',
    fontSize: '16px',
    fontFamily: 'Poppins',
    lineHeight: '24px',
    pt: 2,
    pb: 2,
    color: '#fff',
    cursor: 'pointer',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='lg'
        sx={{
          pb: { xs: 1, md: 5 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Box>
              <Typography component='div' variant='h5' sx={{ mb: 3 }}>
                <img src='/images/logo01.png' alt='logo' width={60} />
              </Typography>
              <Typography variant='h5' className={classes.footerLinks}>
                Inovation.
              </Typography>

              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                Collective.
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                Unique.
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                Community.
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                Long-term.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            sx={{ mr: 0, textAlign: 'right' }}
          >
            <Box>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: '700',
                  fontSize: '19px',
                  pt: 2,
                  pb: 2,
                  color: '#FF2FDE',
                  cursor: 'pointer',
                }}
              >
                Bubble Faction
              </Typography>
              <Box>
                <Typography component='span' variant='h5' sx={{ mb: 3, p: 1 }}>
                  <a href='https://opensea.io/collection/bubblefaction'>
                    <img src='/images/open01.png' alt='logo' width={24} />
                  </a>
                </Typography>
                <Typography component='span' variant='h5' sx={{ mb: 3, p: 1 }}>
                  <a href='https://twitter.com/BubbIeFaction'>
                    <img src='/images/twitter.png' alt='logo' width={24} />
                  </a>
                </Typography>
                <Typography component='span' variant='h5' sx={{ mb: 3, p: 1 }}>
                  <a href='https://instagram.com/LEFT2DROP'>
                    <img src='/images/instagram.png' alt='logo' width={24} />
                  </a>
                </Typography>
              </Box>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                <a href='https://flow.page/BubbleFaction'> Flowpage </a>
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                <HashLink smooth to='/#about'>
                  About Us
                </HashLink>
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                <HashLink smooth to='/#contactus'>
                  Contact Us{' '}
                </HashLink>
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant='h5'
                className={classes.footerLinks}
              >
                <Link className={classes.link} to='/terms'>
                  Terms & Conditions
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ mt: { xs: 4 }, textAlign: 'center' }}
          >
            <Box
              sx={{
                mr: 0,
                textAlign: 'center',
                width: { sx: '100%', md: '100%', lg: '100%' },
                margin: 'auto',
              }}
            >
              <Typography variant='h5' className={classes.footerCredits}>
                <b>BUBBLE FACTION </b>is a registered trademark of LEFT2DROP,
                LDA. <br></br> All Rights Reserved. <b>LEFT2DROP</b>. <br></br>
                All logos are registered trademarks of their respective owners.
                <br></br> All contents of this website, unless otherwise
                credited, are copyright © 2022 <b>LEFT2DROP, LDA. </b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
