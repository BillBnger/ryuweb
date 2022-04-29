import React from 'react';
import { Stack, Grid, Container, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
const TwoSeven = ['./images/RANGEL.png'];
const TwoEight = ['./images/NUNOFRZ.png'];
const TwoNine = ['./images/ELENOJON.png'];
const ThreeZero = ['./images/WADDUP.png'];
const ThreeOne = ['./images/E31.png'];
const ThreeTwo = ['./images/SLICK.png'];
const ee22 = ['./images/graphics/ee22.png'];
const ee23 = ['./images/graphics/ee23.png'];
const twitter = ['./images/twitter.png'];
const instagram = ['./images/instagram.png'];
const linkedIn = ['./images/linkedIn.png'];

const useStyles = makeStyles({
  mainHeading: {
    fontWeight: '700',
    color: '#fff',
    fontSize: '36px',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  teamTitle: {
    color: '#FF2FDE',
    fontWeight: '700',
    fontSize: '18px',
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: '20px',
  },
  teamText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  imgBox: {
    margin: 'auto',
    textAlign: 'center',
    marginTop: '10px',
  },
});

function Ourteam() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        maxWidth='lg'
        sx={{
          background: 'rgba(256, 256, 256, 0.15)',
          pt: { xs: 2, md: 10 },
        }}
      >
        <Box>
          <Typography variant='h2' gutterBottom className={classes.mainHeading}>
            Our Team
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            mt: 5,
          }}
        >
          <Grid item sm={12} xs={12} md={3}></Grid>
          <Grid item sm={12} xs={12} md={3} spacing={2}>
            <Box className={classes.imgBox}>
              <img
                style={{
                  borderRadius: '100%',
                  border: '3px solid rgba(256,256,256, 0.3',
                }}
                src={TwoSeven}
                width={250}
                alt='RANGEL'
              />
            </Box>
            <Typography
              className={classes.teamTitle}
              variant='body1'
              gutterBottom
            >
              RANGEL
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamText}
            >
              The Founder & CEO
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 2, md: 2 },
                width: { xs: '18%', md: '24%' },
                margin: 'auto',
              }}
            >
              <Stack direction='row' spacing={2}>
                <a href='https://twitter.com/rangel19x'>
                  <img alt='RANGEL' src={twitter} width='24px' height='24px' />
                </a>
                <a href='https://instagram.com/rangel19x'>
                  <img
                    alt='RANGEL'
                    src={instagram}
                    width='24px'
                    height='24px'
                  />
                </a>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} md={3} spacing={2}>
            <Box className={classes.imgBox} sx={{ pt: { xs: 3, md: 0 } }}>
              <img
                style={{
                  borderRadius: '100%',
                  border: '3px solid rgba(256,256,256, 0.3',
                }}
                src={TwoEight}
                width={250}
                alt='NUNOFRZ'
              />
            </Box>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamTitle}
            >
              NUNOFRZ
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamText}
            >
              The Co-Founder
            </Typography>

            {/* TIRIANGLE SHAPE ON TOP RIGHT   */}
            <Box
              sx={{
                float: 'right',
                mr: { md: -47 },
                mt: { md: -60 },
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <img src={ee22} width={150} alt='shape' />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 2, md: 2 },
                width: { xs: '8%', md: '10%' },
                margin: 'auto',
              }}
            >
              <Stack direction='row' spacing={2}>
                <a href='https://instagram.com/nunomiguelferraz'>
                  <img
                    alt='ELENOJON'
                    src={instagram}
                    width='24px'
                    height='24px'
                  />
                </a>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} md={3} spacing={2}></Grid>
        </Grid>

        {/* SHAPE ON THE LEFT  */}
        <Box
          sx={{
            backgroundRepeat: 'no-repeat',
            mt: { md: -35 },
            ml: { md: -15 },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <img src={ee23} width={150} alt='shape' />
        </Box>

        {/* SECOND ROW / CONTAINER STARTED HERE */}

        <Grid
          container
          maxWidth='md'
          sx={{
            mt: { xs: 2, md: 18 },
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          <Grid item sm={12} xs={12} md={4}>
            <Box className={classes.imgBox}>
              <img
                style={{
                  borderRadius: '100%',
                  border: '3px solid rgba(256,256,256, 0.3',
                }}
                src={TwoNine}
                width={250}
                alt='ELENOJON'
              />
            </Box>

            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamTitle}
            >
              ELENOJON
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamText}
            >
              The Artist
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 2, md: 2 },
                width: { xs: '8%', md: '12%' },
                margin: 'auto',
              }}
            >
              <Stack direction='row' spacing={2}>
                <a href='https://instagram.com/lvdrxgv.exe'>
                  <img alt='NUNOFRZ' src={instagram} width={24} />
                </a>
              </Stack>
            </Box>
          </Grid>

          <Grid item sm={12} xs={12} md={4}>
            <Box className={classes.imgBox}>
              <img
                style={{
                  borderRadius: '100%',
                  border: '3px solid rgba(256,256,256, 0.3',
                }}
                src={ThreeZero}
                width={250}
                alt='WADDUP'
              />
            </Box>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamTitle}
            >
              WADDUP
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamText}
            >
              The Director
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 2, md: 3 },
                width: { xs: '19%', md: '26%' },
                margin: 'auto',
              }}
            >
              <Stack direction='row' spacing={2}>
                <a href='https://twitter.com/waddup_t'>
                  <img alt='Remy Sharp' src={twitter} width={24} />
                </a>
                <a href='https://instagram.com/tatiana_silva16'>
                  <img alt='NUNOFRZ' src={instagram} width={24} />
                </a>
              </Stack>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <Box className={classes.imgBox}>
              <img
                style={{
                  borderRadius: '100%',
                  border: '3px solid rgba(256,256,256, 0.3',
                }}
                src={ThreeTwo}
                width={250}
                alt='SLICK'
              />
            </Box>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamTitle}
            >
              SLICK
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.teamText}
            >
              The Blockchain Expert
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                mt: { xs: 2, md: 3 },
                width: { xs: '8%', md: '10%' },
                margin: 'auto',
              }}
            >
              <Stack direction='row' spacing={2}>
                <a href='https://instagram.com/_slick_rick23 '>
                  <img alt='NUNOFRZ' src={instagram} width={24} />
                </a>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Ourteam;
