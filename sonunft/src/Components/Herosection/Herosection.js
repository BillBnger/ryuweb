import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import NftExperience from '../Nftexperience/NftExperience';
const heroTitle = ['A New Experience with Iconic Singer'];
const coverImg = ['/sonu-cover.jpg'];

const useStyles = makeStyles({
  heroContainer: {
    color: '#fff',
    paddingBottom: '50px',
    backgroundImage: `url(${coverImg})`,
    backgroundSize: 'cover',
    repeat: 'no-repeat',
    backgroundPosition: 'center',
    pb: 15,
  },
  liveButton: {
    borderRadius: '50px',
    backgroundColor: '#A08C5B',
    pb: 10,
    '&:hover': {
      backgroundColor: '#A08C5B',
      color: '#000',
    },
  },
  buttonAttention: {
    borderRadius: '50px',
    padding: '15px 30px',
    color: '#efefef',
    background: 'linear-gradient(45deg, #A08C5B 0%, #000 100%)',
    '&:hover': {
      backgroundColor: '#A08C5B',
      color: '#fff',
      boxShadow: 1,
    },
  },
});

function Herosection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth='xxl' className={classes.heroContainer}>
        <Box
          sx={{
            textAlign: 'center',
            margin: 'auto',
            pt: 10,
            pb: 10,
          }}
        >
          <Button
            size='large'
            type='submit'
            variant='contained'
            className={classes.liveButton}
          >
            <RadioButtonCheckedIcon
              sx={{
                paddingRight: '10px',
                color: 'red',
                '&:hover': {
                  color: 'red',
                },
              }}
            />{' '}
            Live Now
          </Button>

          <Typography
            variant='h2'
            sx={{ fontSize: '50px', fontWeight: '700', mt: 5, mb: 10 }}
          >
            {heroTitle}
          </Typography>
          <Button
            size='large'
            type='submit'
            variant='contained'
            className={classes.buttonAttention}
          >
            Attention Sonu Fans
          </Button>
        </Box>
      </Container>
      <NftExperience />
    </React.Fragment>
  );
}

export default Herosection;
