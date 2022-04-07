import React from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AlbumIcon from '@mui/icons-material/Album';

const useStyles = makeStyles({
  btn: {
    backgroundColor: '#000',
    borderRadius: '50px',
    padding: '10px 40px',
    '&:hover': {
      backgroundColor: '#181510',
      color: '#cbb682',
      boxShadow: 1,
    },
  },

  lbMainText: {
    fontFamily: 'Roboto',
    fontWeight: '900',
    textAlign: { xs: 'justify', md: 'center' },
    width: { xs: '100%', md: '85%' },
    margin: 'auto',
    fontSize: { xs: '20px', md: '36px' },
  },
});

function LegendBottom() {
  const classes = useStyles();
  return (
    <Container
      maxWidth='xl'
      sx={{ backgroundColor: '#A08C5B', padding: '50px' }}
    >
      <Divider
        sx={{
          width: '70%',
          margin: '0 auto',
          '&::before': {
            content: '""',
            display: 'block',
            borderTop: '3px solid #000',
          },
          '&::after': {
            content: '""',
            display: 'block',
            borderTop: '3px solid #000',
          },
        }}
      >
        <Typography>
          <AlbumIcon sx={{ border: '1px solix #000', fontSize: '80px' }} />
        </Typography>
      </Divider>
      <Grid
        container
        maxWidth='lg'
        sx={{ textAlign: 'center', margin: 'auto', padding: '20px' }}
      >
        <Grid item>
          <Box>
            <Typography variant='h4' className={classes.lbMainText}>
              I am excited to launch my first NFT series, where I’ll share my
              latest music videos I am excited to connect with a new generation
              of digital music fans and look forward to our journey together.
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: '600',
                width: '85%',
                margin: 'auto',
                pt: 3,
                pb: 5,
                fontFamily: 'Roboto',
                color: '#fff',
                letterSpacing: '1px',
              }}
            >
              If you are interested in owning a part of this historic NFT,
              <br></br>register now and we will get in touch with you.
            </Typography>
          </Box>
          <Box>
            <Button
              size='large'
              type='submit'
              variant='contained'
              className={classes.btn}
            >
              BITSKI
            </Button>
            <Button
              size='large'
              type='submit'
              variant='contained'
              className={classes.btn}
              sx={{ ml: 2 }}
            >
              NEWS
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LegendBottom;
