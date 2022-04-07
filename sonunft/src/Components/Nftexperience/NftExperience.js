import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  premiumNft: {
    color: '#fff',
    letterSpacing: '10px',
    padding: '10px',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    whiteSpace: 'wrap',
  },
  musicNft: {
    color: '#A08C5B',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '4px',
  },
});

function NftExperience() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container
        maxWidth='xxl'
        sx={{
          marginTop: 0,
          color: '#fff',
          backgroundColor: '#000',
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
          <Typography variant='h5' className={classes.premiumNft}>
            INDIA'S FIRST EVER PREMIUM
          </Typography>
          <Typography variant='h1' className={classes.musicNft}>
            Music NFT
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default NftExperience;
