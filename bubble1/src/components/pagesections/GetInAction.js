import React from 'react';
import { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const email02 = ['./images/email02.png'];
const ee25 = ['./images/graphics/ee25.png'];

function GetInAction() {
  const [email, setEmail] = useState('');

  const PostData = async e => {
    e.preventDefault();

    await fetch('https://bubble-30c28-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then(res => {
        console.log(res);
        setEmail([]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='lg'
        sx={{
          pt: 5,
          background: 'rgba(256, 256, 256, 0.15)',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            textalign: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: '900',
              fontFamily: 'Poppins',
              color: '#fff',
              fontSize: { xs: '30px', md: '72px' },
              ml: { xs: 3, sm: 5, md: 10, lg: 10 },
              position: 'absolute',
            }}
          >
            GET IN THE ACTION.
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontWeight: '900',
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: { xs: '30px', md: '72px' },
              ml: { xs: 3, md: 10 },
              opacity: 0.1,
              pt: 1,
            }}
          >
            GET IN THE ACTION.
          </Typography>
          <Typography
            component='span'
            variant='h2'
            sx={{
              fontWeight: '900',
              color: '#FF2FDE',
              fontFamily: 'Poppins',
              fontSize: { xs: '30px', md: '72px' },
              textAlign: 'right',
              margin: 'auto',
              mr: { xs: 3, sm: 5, md: 10, lg: 10 },
              float: 'right',
            }}
          >
            JOIN OUR FACTION.
          </Typography>
          <Typography
            variant='h2'
            component='span'
            sx={{
              fontWeight: '900',
              fontFamily: 'Poppins',
              color: '#FF2FDE',
              fontSize: { xs: '30px', md: '72px' },
              textAlign: 'right',
              margin: 'auto',
              mr: { xs: 3, sm: 5, md: 10, lg: 10 },
              opacity: 0.1,
              float: 'right',
              mt: { xs: -4, sm: -6, md: -9 },
            }}
          >
            JOIN OUR FACTION.
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 0, md: 13 },
            p: 2,
          }}
        >
          <a
            style={{ textDecoration: 'none' }}
            href='https://discord.gg/LEFT2DROP'
          >
            <Button
              color='inherit'
              sx={{
                backgroundColor: '#009bf2',
                color: 'white',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '50px',
                mt: 2,
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#ff2fde',
                },
              }}
            >
              Join Our Discord
            </Button>
          </a>
        </Box>
      </Container>

      {/* SUBSCRIPTION STARTS FROM HERE */}

      <Container
        maxWidth='lg'
        sx={{
          pt: { xs: 1, md: 5 },
          background: 'rgba(256, 256, 256, 0.15)',
          borderRadius: '0px 0px 20px 20px',
          pb: 10,
          mb: 5,
        }}
      >
        <Box>
          <Box
            sx={{
              mt: { xs: 4, md: 10 },
              float: { md: 'right' },
              mr: { xs: 5, md: 18 },
            }}
          >
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '34px', md: '48px' },
                fontWeight: '700',
                fontFamily: 'Poppins',
                color: '#FF2FDE',
                ml: { xs: 3, md: -16 },
              }}
            >
              BE THE FIRST{' '}
            </Typography>
            <Typography
              component='span'
              sx={{
                fontSize: { xs: '34px', md: '48px' },
                fontFamily: 'Poppins',
                fontWeight: '700',
                color: '#fff',
                ml: { xs: 3, md: -16 },
              }}
            >
              TO BE WARNED
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            background: 'rgba(256, 256, 256, 0.20)',
            borderRadius: { xs: '20px', md: '60px ' },
            width: '90%',
            margin: 'auto',
          }}
        >
          <Grid item sx={{ width: '50%' }}>
            <Box
              sx={{
                ml: 0,
                mt: -25,
                position: 'absolute',
                display: { xs: 'none', md: 'flex' },
                borderRadius: '10%',
                overflow: 'hidden',
              }}
            >
              <img src={email02} alt='emial' width='695px' />
            </Box>
          </Grid>
          <Grid item sx={{ width: { sx: '100%', md: '50%' } }}>
            {/* SUBSCRIPTION FORM STARTS HERE */}
            <Box
              sx={{
                p: { xs: '20px 30px', md: '0px 50px' },
                width: '100%',
              }}
            >
              <Box
                sx={{
                  pt: { sx: 1, md: 3 },
                  mt: 1,
                  margin: 'auto',
                  pb: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    fontFamily: 'Poppins',
                    color: '#fff',
                  }}
                >
                  By joining our{' '}
                  <Typography
                    component='span'
                    sx={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#FF2FDE',
                    }}
                  >
                    newsletter
                  </Typography>
                  , you will get all the updates in first hand!
                </Typography>
              </Box>

              {/* triangle top right  */}
              <Box
                sx={{
                  // backgroundImage: `url(${ee25})`,
                  // backgroundSize: 'fit',
                  // backgroundPosition: 'center center',
                  // backgroundRepeat: 'no-repeat',
                  // width: '200px',
                  // height: '200px',
                  float: 'right',
                  mr: { md: -28 },
                  mt: { md: -55 },

                  display: { xs: 'none', md: 'block' },
                }}
              >
                <img src={ee25} width={150} alt='shape' />
              </Box>

              <Box
                sx={{
                  width: '80%',
                  margin: 'auto',
                  mt: 3,
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    background: '#FF2FDE',
                    ml: { xs: -5, md: 1 },
                    position: 'absolute',
                    borderRadius: '10px 0px 0px 10px',
                    boxShadow: '0px 0px 0px #fff',
                    padding: '5px 16px',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#FF2FDE',
                      boxShadow: '0px 0px 0px #fff',
                    },
                  }}
                >
                  <MailOutlineIcon sx={{ fontSize: '40px' }} />
                </Button>
                <TextField
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  validate
                  fullWidth
                  placeholder='Enter your email'
                  variant='standard'
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    background: 'rgba(256, 256, 256, 0.15)',
                    borderRadius: '0px 10px 10px 0px',
                    textAlign: 'right',
                    height: '50px',
                    lineHeight: '80px',
                    width: { xs: '220px', md: '280px' },
                    margin: 'auto',
                    ml: { xs: 4, md: 10 },
                    pt: 1,
                    pl: 2,
                  }}
                />
              </Box>

              <Box
                sx={{
                  pt: 4,
                  pb: { xs: 6, md: 5.5 },
                  mr: -3,
                  textAlign: 'center',
                }}
              >
                <Button
                  onClick={PostData}
                  color='inherit'
                  sx={{
                    backgroundColor: '#009bf2',
                    color: 'white',
                    borderRadius: '50px',
                    fontFamily: 'Poppins',
                    fontWeight: '800',
                    mt: { xs: 1 },
                    padding: '10px 20px',
                    '&:hover': {
                      backgroundColor: '#ff2fde',
                    },
                  }}
                >
                  SUBSCRIBE ME!
                </Button>
                <Box
                  sx={{
                    display: { md: 'none' },
                    position: 'absolute',
                    overflow: 'hidden',
                    mt: -2,
                    ml: -4,
                  }}
                >
                  <img src={email02} alt='email' width='120' />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default GetInAction;
