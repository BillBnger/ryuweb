import { Grid, Container, Typography, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
const glImage = ['./images/bubbleGlobe.png'];

const useStyles = makeStyles({
  featHeading: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#fff',
    fontSize: '36px',
  },
  featSubHeading: {
    color: '#FF2FDE',
    fontWeight: '700',
    fontFamily: 'Poppins',
    letterSpacing: '1px',
    fontSize: '18px',
  },
  featTopText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: '20px',
    fontFamily: 'Poppins',
    overflow: 'hidden',
    lineHeight: '24px',
  },
  featText: {
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#fff',
    width: '100%',
  },
  join__Btn: {
    backgroundColor: '#009bf2',
    color: 'white',
    borderRadius: '50px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#ff2fde',
    },
  },
});

function Features() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='lg'
        sx={{
          pt: { xs: 2, md: 5 },
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item margin='auto' sm={12} md={12}>
            <Box sx={{ display: 'block' }}>
              <Typography
                variant='h3'
                className={classes.featHeading}
                sx={{
                  ml: 2,
                  textAlign: {
                    xs: 'left',
                    md: 'center',
                  },
                }}
              >
                Features
              </Typography>
              <Typography
                className={classes.featSubHeading}
                component='div'
                md={12}
                lg={12}
                variant='h5'
                sx={{
                  mt: 1,
                  ml: 2,
                  mb: 3,
                  textAlign: {
                    xs: 'left',
                    sm: 'center',
                    md: 'center',
                    lg: 'center',
                  },
                }}
              >
                AN OUT-STANDING NFT COLLECTION
              </Typography>
            </Box>

            <Box>
              <Typography
                className={classes.featTopText}
                variant='h5'
                sx={{
                  margin: { xs: 2, md: 'auto' },
                  textAlign: {
                    xs: 'left',
                    sm: 'center',
                    md: 'center',
                  },
                  width: { xs: '80%', md: '80%' },
                  mt: 4,
                  pb: 5,
                }}
              >
                Earlier this year, a mysterious force coming from a bubbly
                galaxy summoned the most important people on planet Earth...
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 3 COLUMNS WITH GLOBE STARTS HERE  */}

      <Container
        maxWidth='lg'
        sx={{
          pt: 10,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography
              className={classes.featText}
              variant='h6'
              sx={{
                ml: { xs: 2, md: 5 },
                mt: { xs: -18 },
              }}
            >
              They received instructions and were sent the geographic
              coordinates of a secret location to enter an amazing
              community:&nbsp;
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE' }}
              >
                the Bubble Faction.
              </Box>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              backgroundImage: `url(${glImage})`,
              backgroundSize: 'cover',
              repeat: 'no-repeat',
              display: { xs: 'none', md: 'flex' },
              backgroundPosition: 'center',
              minHeight: '500px',
              minWidth: '500px',
              ml: -5,
              mt: -18,
            }}
          ></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '14px',
                fontFamily: 'Poppins',
                color: '#fff',
                ml: { xs: 2, md: -11 },
                mt: { xs: -7, md: 14 },
                width: { xs: '95%', md: '120%' },
              }}
            >
              There, they will have the opportunity to exchange, discuss and
              collaborate in order to become even bigger than they are.
              <br></br> <br></br> At this faction, you’ll get to know the future
              of the &nbsp;
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE' }}
              >
                well-thought.
              </Box>
            </Typography>
          </Grid>
        </Grid>

        {/* join Button */}

        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 1 } }}>
          <a
            style={{ textDecoration: 'none' }}
            href='https://discord.gg/LEFT2DROP'
          >
            <Button className={classes.join__Btn}>Join Our Discord</Button>
          </a>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Features;
