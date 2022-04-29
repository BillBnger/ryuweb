import { Grid, Container, Typography, Button } from '@mui/material';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// images used in hero section

const bbImage = ['./images/bbImage.png'];
const ee19 = ['./images/graphics/ee19.png'];
const ee20 = ['./images/graphics/ee20.png'];

const useStyles = makeStyles({
  imgMobiHid: {
    display: { xs: 'hidden', sm: '12', md: '6', lg: '12' },
  },
  topSmallHeading: {
    fontWeight: '700',
    fontSize: '17px',
    fontFamily: 'Poppins',
    color: '#FFF',
    letterSpacing: '1px',
    maxWidth: '100%',
  },
  topSmallHeading2: {
    display: 'inline',
    color: '#FF2FDE',
    fontWeight: '700',
    fontSize: '17px',
    fontFamily: 'Poppins',
    letterSpacing: '1px',
  },
  topMainHeading: {
    fontWeight: '900',
    fontSize: { xs: '40px', md: '48px' },
    color: '#fff',
    fontName: 'Poppins',
  },
  topMainHeading2: {
    fontWeight: '900',
    color: '#FF2FDE',
    fontFamily: 'Poppins',
    fontSize: { xs: '40px', md: '48px' },
  },
  topText: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '2',
    color: '#FFF',
    display: { xs: '12', sm: '12', md: '6', lg: '6', xl: '6' },
  },
  joinBtn: {
    backgroundColor: '#009bf2',
    width: {
      xs: '95%',
      md: 'auto',
    },
    fontSize: '14px',
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: 'white',
    borderRadius: '50px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#ff2fde',
    },
  },
  roadmapBtn: {
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: '800',
    width: {
      xs: '100%',
      md: 'auto',
    },
    padding: '6px 20px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#ff2fde',
    },
  },
});

function HeroSection() {
  // const projRoadMap = useRef(null);

  // const devRoadmap = useRef(null);

  // const navScroll = sec => {
  //   window.scrollTo({
  //     top: sec.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        to='/#hero'
        sx={{
          mt: 2,
          pt: 8,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
          borderRadius: '20px 20px 0px 0px',
        }}
      >
        <Grid container spacing={2}>
          {/* Ellipse 19 top left  */}
          <Box
            sx={{
              float: 'left',
              position: 'absolute',
              mt: { md: 0 },
              ml: { md: -13 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <img src={ee19} width={130} alt='triangle' />
          </Box>

          <Grid
            md={6}
            item
            sx={{ display: { xs: '12', sm: '12', md: '6', lg: '12' } }}
          >
            {/* triangle top right  */}
            <Box
              sx={{
                opacity: '0.6',
                float: 'right',
                mr: { md: -83 },
                mt: { md: 30 },
                display: { xs: 'none', md: 'block' },
              }}
            >
              <img src={ee20} width={130} alt='triangle' />
            </Box>
            <Box>
              <Grid
                item
                className={classes.topSmallHeading}
                sx={{
                  mb: 1,
                  ml: { xs: 2, md: 4 },
                }}
              >
                {' '}
                GET IN THE ACTION.&nbsp;
                <Box component='span' className={classes.topSmallHeading2}>
                  JOIN OUR FACTION.
                </Box>
              </Grid>

              <Typography
                variant='h2'
                className={classes.topMainHeading}
                sx={{
                  ml: { xs: 2, md: 4 },
                }}
              >
                Welcome to
              </Typography>
              <Typography
                variant='h2'
                gutterBottom
                className={classes.topMainHeading2}
                sx={{
                  ml: { xs: 2, md: 4 },
                }}
              >
                Bubble Faction
              </Typography>
              <Typography
                className={classes.topText}
                sx={{
                  pb: 3,
                  ml: { xs: 2, md: 4 },
                }}
              >
                Bubble Faction is a limited collection of 10.000 NFTs submering
                on the Ethereum Blockchain. The NFTs are stored as ERC-721
                tokens on the Ethereum Blockchain and hosted on IPFS.
              </Typography>
              <Typography
                className={classes.topText}
                sx={{
                  pb: 2,
                  ml: { xs: 2, md: 4 },
                }}
              >
                With 500+ hand made traits, each NFT is unique and comes with a
                membership to an exclusive faction of ambitious investors. Join
                an ever-growing community with multiple benefits and utilities.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            className={classes.imgMobiHid}
            sx={{
              margin: 'auto',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              sx={{
                borderRadius: '50%',
                background: 'rgba(256, 256, 256, 0.2)',
                backgroundImage: `url(${bbImage})`,
                backgroundSize: 'cover',
                repeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '430px',
                minWidth: '430px',
              }}
            >
              {' '}
              &nbsp;{' '}
            </Box>
          </Grid>

          <Box sx={{ mt: 0 }}>
            <a
              style={{ textDecoration: 'none' }}
              href='https://discord.gg/LEFT2DROP'
            >
              <Button
                className={classes.joinBtn}
                color='inherit'
                sx={{
                  ml: { xs: 4, md: 6 },
                  mt: 2,
                }}
              >
                Join Our Discord
              </Button>{' '}
            </a>
            <HashLink smooth to='#roadmap' style={{ textDecoration: 'none' }}>
              <Button
                className={classes.roadmapBtn}
                color='inherit'
                sx={{
                  ml: { xs: 2, md: 2 },
                  mt: 2,
                }}
              >
                Project Roadmap{' '}
                <ArrowRightAltIcon
                  sx={{
                    width: '40px',
                    height: '40px',
                    color: '#ff2fde',
                    ml: 2,
                  }}
                />
              </Button>
            </HashLink>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default HeroSection;
