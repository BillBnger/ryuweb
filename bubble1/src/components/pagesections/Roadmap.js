import { Grid, Container, Typography, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
const imageTen = ['./images/section10.png'];
const imageTwen = ['./images/section20.png'];
const imageThir = ['./images/section30-40.png'];
const imageFour = ['./images/section60-80.png'];
const imageFive = ['./images/100pc.png'];
const ee21 = ['./images/graphics/ee21.png'];

const useStyles = makeStyles({
  mainHeading: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#fff',
    fontSize: '36px',
  },
  mainText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  tenHeading: {
    fontWeight: '900',
    fontSize: '150px',
    fontFamily: 'Poppins',
    color: '#FF2FDE',
  },
  tenText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  colorTextTen: {
    display: 'inline',
    color: '#FF2FDE',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '18px',
  },
  twenHeading: {
    fontWeight: '900',
    fontFamily: 'Poppins',
    fontSize: '144px',
    color: '#fff',
    textAlign: 'right',
  },
  twenText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },

  fourHeading: {
    fontWeight: '900',
    fontFamily: 'Poppins',
    fontSize: '144px',
    color: '#FF2FDE',
  },
  fourText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  colorTextFour: {
    display: 'inline',
    color: '#FF2FDE',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },

  sixHeading: {
    fontWeight: '900',
    fontFamily: 'Poppins',
    fontSize: '144px',
    color: '#fff',
  },
  sixText: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  eightHeading: {
    fontWeight: '900',
    color: '#FF2FDE',
    fontFamily: 'Poppins',
  },
  eightText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
  },
  hundHeading: {
    fontWeight: '900',
    fontSize: '150px',
    fontFamily: 'Poppins',
    color: '#fff',
  },
  hundHeadingMobi: {
    fontWeight: '900',
    fontSize: '130px',
    fontFamily: 'Poppins',
    color: '#fff',
  },
  hundText: {
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#ff2fde',
    textAlign: 'center',
    fontSize: '18px',
  },
});

function Roadmap() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='lg'
        sx={{
          pt: { xs: 5, md: 3 },
          background: 'rgba(256, 256, 256, 0.15)',
        }}
      >
        <Grid container spacing={2}>
          <Grid item margin='auto' sm={12} md={12}>
            <Box sx={{ display: 'block' }}>
              <Typography
                variant='h3'
                className={classes.mainHeading}
                sx={{
                  ml: { xs: 2, md: 6 },
                }}
              >
                Launch Roadmap
              </Typography>
              <Typography
                className={classes.mainText}
                variant='h5'
                sx={{
                  ml: { xs: 2, md: 6 },
                  mt: 1,
                }}
              >
                As we value our community, our roadmap will be updated according
                to our members comments and ideas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 10% COLUMNS 3 COLUMNS ROAD MAP STARTS HERE  */}

      <Container
        maxWidth='lg'
        sx={{
          pt: 5,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography
              variant='h1'
              className={classes.tenHeading}
              sx={{
                textAlign: { xs: 'center', md: 'center' },
              }}
            >
              10%
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              className={classes.tenText}
              sx={{
                width: { xs: '95%', sm: '100%', md: '100%', lg: '100%' },
                ml: { xs: 2, sm: 5, md: -5, lg: -5 },
                mt: { xs: 0, md: 5 },
              }}
            >
              Congratulations,<br></br> you are invited to the Faction. Join the
              community on Discord. &nbsp;<br></br>
              <Box component='span' className={classes.colorTextTen}>
                Let’s chill together.
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                backgroundImage: `url(${imageTen})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'fit',
                height: '100%',
                width: '380px',
                pb: 25,
                mt: 1,
                pt: 10,
                ml: -8,
                display: { xs: 'none', md: 'flex' },
              }}
            ></Typography>
          </Grid>
        </Grid>
      </Container>

      {/* 20% SECTION STARTS HERE */}

      <Container
        maxWidth='lg'
        sx={{
          pt: 1,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
          <Grid item>
            <Typography
              className={classes.twenText}
              sx={{
                ml: { xs: 2, md: -10 },
                mt: { xs: 20, md: -5 },
                width: { xs: '90%', md: '488px' },
              }}
            >
              An investment fund is available to finance the community’s
              designs, creations and development. Also,{' '}
              <Box
                component='span'
                sx={{
                  color: '#FF2FDE',
                }}
              >
                50% of the OpenSea fees &nbsp;
              </Box>
              are dedicated to this special fund, ensuring the longevity through
              common projects.
              <br></br>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='h1'
              className={classes.twenHeading}
              sx={{
                mt: { xs: -45, md: -10 },
                ml: { xs: 4, md: -2 },
              }}
            >
              20%
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* 30%-40%-50% COLUMNS 3 COLUMNS ROAD MAP STARTS HERE  */}

      <Container
        maxWidth='lg'
        sx={{
          pt: 1,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Typography
              variant='h1'
              className={classes.fourHeading}
              sx={{
                textAlign: 'center',
                ml: { xs: 2, md: 6 },
                mt: { xs: -2, md: 'auto' },
              }}
            >
              40%
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              ml: 2,
            }}
          >
            <Typography
              className={classes.fourText}
              sx={{
                width: { xs: '90%', md: '100%', lg: '500px' },
                mt: { xs: 2, md: 5 },
                // ml: { sx: 15, md: 0, lg: -3 },
              }}
            >
              Access to an exclusive Community. That’s not all, the lucky owners
              of our Legend Edition pieces will get&nbsp;{' '}
              <Typography component='span' className={classes.colorTextFour}>
                Monthly Money Rewards and access to Giveaways such as cars,
                trips and luxury items.
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                backgroundImage: `url(${imageTwen})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'fit',
                height: '100%',
                width: '150px',
                mr: -8,
                float: 'right',
                mt: -7,
                ml: -2,
              }}
            ></Typography>
          </Grid>
        </Grid>
      </Container>

      {/* 60% SECTION STARTS HERE */}

      <Container
        maxWidth='lg'
        sx={{
          pt: 1,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Typography
              sx={{
                backgroundImage: `url(${imageThir})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'fit',
                height: '100%',
                width: '580px',
                ml: -16,
                mt: -10,
              }}
            ></Typography>
          </Grid>
          <Grid>
            <Typography
              className={classes.sixText}
              sx={{
                ml: { xs: 4, md: -15 },
                mt: { xs: 20, md: 2 },
                width: { xs: '88%', md: '500px' },
              }}
            >
              An investment fund is available to finance the community’s
              designs, creations and development. Also,{' '}
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE', fontWeight: '700' }}
              >
                50% of the OpenSea fees &nbsp;
              </Box>
              are dedicated to this special fund, ensuring the longevity through
              common projects.
              <br></br>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='h1'
              className={classes.sixHeading}
              sx={{
                textAlign: 'right',
                mt: { xs: -44, md: -5 },
                ml: { xs: 3, md: 0 },
              }}
            >
              60%
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* 80% COLUMNS 3 COLUMNS ROAD MAP STARTS HERE  */}
      <Container
        maxWidth='lg'
        sx={{
          pt: 1,
          background: 'rgba(256, 256, 256, 0.15)',
          pb: 5,
        }}
      >
        {/* Ellipse GREEN IMAGE ON THE LEFT */}
        <Box
          sx={{
            position: 'absolute',
            mt: { md: -5 },
            ml: { md: -15 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <img src={ee21} width={150} alt='shape' />
        </Box>
        <Grid container spacing={2}>
          <Grid>
            <Typography
              variant='h1'
              className={classes.eightHeading}
              sx={{
                fontSize: { xs: '144px', md: '150px' },
                textAlign: { xs: 'center', md: 'center' },
                mt: { xs: -1, md: 4 },
                ml: { xs: 4, md: 8 },
              }}
            >
              80%
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              className={classes.eightText}
              sx={{
                width: { xs: '90%', md: '500px' },
                mt: { xs: 2, md: 5 },
                ml: { xs: 2, md: 2 },
              }}
            >
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE', fontWeight: '700' }}
              >
                Daily Giveaways for an Entire Month. &nbsp;
              </Box>
              Monthly Surprises for Holders. Unlock Exclusive Merch Releases.
              Holders of Bubbles that have Specific Traits will be automatically
              entering
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE' }}
              >
                &nbsp; huge (global) Giveaways and Raffles.
              </Box>
              You will have to stay in touch for monthly airdrops with
              <Box
                component='span'
                sx={{ display: 'inline', color: '#FF2FDE' }}
              >
                &nbsp; future benefits.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              sx={{
                backgroundImage: `url(${imageFour})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'fit',
                height: '100%',
                width: '580px',
                mt: -7,
                ml: -1,
              }}
            ></Typography>
          </Grid>

          <Box
            sx={{
              backgroundImage: `url(${imageFive})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'fit',
              width: '1200px',
              height: '600px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography
              variant='h1'
              className={classes.hundHeading}
              sx={{
                textAlign: 'center',
                margin: 'auto',
                fontSize: { xs: '144px', md: '150px' },
                mt: { xs: 3, md: 30 },
                pb: { xs: 2, md: 0 },
              }}
            >
              100%
              <Typography
                variant='h4'
                className={classes.hundText}
                sx={{
                  mt: { xs: 0, md: -2 },
                }}
              >
                It’s time to initiate the next steps.
                <Box
                  sx={{
                    align: 'auto',
                    textAlign: 'center',
                    mt: { xs: 0, md: 2 },
                  }}
                >
                  <Typography
                    component='span'
                    variant='h5'
                    sx={{ mb: 1, p: 1 }}
                  >
                    <a href='https://opensea.io/collection/bubblefaction'>
                      <img src='/images/open01.png' alt='logo' width={30} />
                    </a>
                  </Typography>
                  <Typography
                    component='span'
                    variant='h5'
                    sx={{ mb: 1, p: 4 }}
                  >
                    <a href='https://twitter.com/BubbIeFaction'>
                      <img src='/images/twitter.png' alt='logo' width={30} />
                    </a>
                  </Typography>
                  <Typography
                    component='span'
                    variant='h5'
                    sx={{ mb: 1, p: 1 }}
                  >
                    <a href='https://instagram.com/LEFT2DROP'>
                      <img src='/images/instagram.png' alt='logo' width={30} />
                    </a>
                  </Typography>
                </Box>{' '}
              </Typography>
            </Typography>
          </Box>
        </Grid>

        {/* 100% mobile verstion starts here */}

        <Box sx={{ display: { md: 'none' } }}>
          <Typography
            className={classes.hundHeadingMobi}
            variant='h1'
            sx={{
              textAlign: 'center',
              mt: { xs: 1, md: 30 },
            }}
          >
            100%
            <Typography
              variant='h4'
              sx={{
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: { xs: '18px', md: '18px' },
                color: '#ff2fde',
                textAlign: 'center',
                mt: { xs: 0, md: -2 },
              }}
            >
              It’s time to initiate the next steps.
              <Box
                sx={{
                  align: 'auto',
                  textAlign: 'center',
                  mt: { xs: 0, md: 2 },
                }}
              ></Box>
            </Typography>
          </Typography>
          <Button
            color='inherit'
            sx={{
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
              ml: { xs: 1, md: 6 },
              mt: 4,
              '&:hover': {
                backgroundColor: '#ff2fde',
              },
            }}
          >
            Join Our Discord
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default Roadmap;
