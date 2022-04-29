import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
const DevRoadmapImg = ['./images/DevRoadmap.png'];

function DevRoadmap() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='lg'
        sx={{
          background: 'rgba(256, 256, 256, 0.15)',
          display: { xs: 'none', md: 'block' },
          pt: 1,
        }}
      >
        <Box sx={{ mt: { xs: 15, md: 5 } }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{
              fontWeight: '700',
              color: '#fff',
              fontFamily: 'Poppins',
              fontSize: '36px',
              ml: 3,
            }}
          >
            Development Roadmap
          </Typography>
          <Typography
            variant='body1'
            gutterBottom
            sx={{
              color: '#fff',
              fontWeight: '600',
              fontSize: '16px',
              width: '97%',
              fontFamily: 'Poppins',
              ml: 3,
              mt: 1,
            }}
          >
            Our goal is to make sure your investment is highly profitable. To do
            so, we already set up several strategies (reduce supply, marketing &
            community push simultaneously) after the launch in order to increase
            the floor price.
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ pt: 5, margin: 'auto' }}>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',
              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              METAVERSE DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '14px',
                mt: 4,
              }}
            >
              Expanding our presence in the Metaverse and creating a currency to
              shape the future of our community. All NFTs acquired will be used
              safely.
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',

              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              GAME DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '14px',
                mt: 4,
              }}
            >
              We will develop a game based on the next chapters. All phases will
              be useful. Holders of the Bubble Faction collection will have a
              massive advantage in terms of resources due to seniority.
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',

              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              PLAY TO EARN
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '14px',
                mt: 4,
              }}
            >
              Expanding our presence in the Metaverse and creating a currency to
              shape the future of our community. All NFTs acquired will be used
              safely.
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',

              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              UTILITY TOKEN
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '14px',
                mt: 4,
              }}
            >
              Rewards will be given as a part of our game, such as exclusive
              NFTs and $L2D tokens. This functionality will be reserved for
              Holders. Your NFTs will represent you as an in-game asset, as a
              virtual character to be used as part of the game.
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',

              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              FORGING EVENT
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '14px',
                mt: 4,
              }}
            >
              To provide utility for our NFTs for years to come, we will use
              $L2D, an ETH ERC-20 token for our ecosystem. The owners of
              LEFT2DROP NFTs will be able to obtain $L2D through many methods.
            </Typography>
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            sx={{
              backgroundImage: `url(${DevRoadmapImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left top',
              backgroundSize: 'fit',
              width: '100%',

              mt: 5,
            }}
          >
            <Typography
              component={'div'}
              sx={{
                color: '#FF2FDE',
                fontWeight: '800',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 3,
                ml: 10,
              }}
            >
              WANT TO KNOW MORE?
            </Typography>
            <Typography
              sx={{
                color: '#fff',
                fontWeight: '600',
                fontFamily: 'Poppins',
                fontSize: '16px',
                mt: 4,
              }}
            >
              Join our{' '}
              <Typography
                component='span'
                sx={{
                  color: '#ff2fDE',
                  fontWeight: '600',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                }}
              >
                {' '}
                Discord!
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DevRoadmap;
