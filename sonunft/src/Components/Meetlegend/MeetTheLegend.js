import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import LegendBottom from './LegendBottom';
import Subscribe from './Subscribe';

const sonuVideo = ['/sonuvid.mp4'];

function MeetTheLegend() {
  return (
    <React.Fragment>
      <Container
        maxWidth='xxl'
        sx={{
          color: '#fff',
          backgroundColor: '#f1f1f1',
          paddingBottom: '50px',
        }}
      >
        <Box
          maxWidth='xl'
          sx={{
            padding: '60px',
            textAlign: 'center',
            zIndex: '1',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              color: '#A08C5B',
              fontWeight: 'bold',
            }}
          >
            Meet The Legend
          </Typography>

          <Typography
            variant='h5'
            sx={{ color: '#000', fontSize: '16px', pt: 2 }}
          >
            As one of India's most popular playback singers, music director and
            actor, Sonu Nigam needs no introduction.
          </Typography>
        </Box>
        <Grid container maxWidth='lg' sx={{ m: ' auto' }}>
          <Grid item md={6}>
            <Box>
              <Typography
                variant='subtitle1'
                sx={{ color: '#000', lineHeight: '30px', pr: 4 }}
              >
                He was just four, for his first stage performance, when he sang
                a song by his idol, Mohammed Rafi. In fact, Nigam’s singing
                style is often likened to that of the music legend. Trained by
                Ustad Ghulam Mustafa Khan, Sonu began his Bollywood journey at
                the age of 19. He has worn many awards and accolades, hosted the
                popular music show on TV, SaReGaMa and even collaborated with
                popular western musicians like Britney Spears and Jermaine
                Jackson. What is not known is that Sonu kept a written record
                and documented his entire musical journey over the last thirty
                years. For the first time he is making these diaries public by
                creating this NFT. As the first mainstream artist launching an
                NFT, this is a historic moment for Sonu Nigam fans.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography
                variant='subtitle1'
                sx={{ color: '#000', fontWeight: 'bold' }}
              >
                <video width='100%' height='100%' preload='auto' controls>
                  <source src={sonuVideo} type='video/mp4' />
                  Your browser does not support HTML5 video.
                </video>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <LegendBottom />
      <Subscribe />
    </React.Fragment>
  );
}

export default MeetTheLegend;
