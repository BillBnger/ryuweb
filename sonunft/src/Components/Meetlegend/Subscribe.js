import React from 'react';
import {
  Divider,
  FormControlLabel,
  Button,
  Typography,
  Checkbox,
  Box,
  Container,
  FormGroup,
} from '@mui/material';
import TextField from '@mui/material/TextField';

function Subscribe() {
  return (
    <React.Fragment>
      <Container>
        <Box
          maxWidth='xl'
          sx={{
            padding: '30px',
            textAlign: 'center',
            zIndex: '1',
            mt: { md: 5 },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '30px', md: '3.5rem' },
              fontWeight: '700',
              fontFamily: 'Roboto',
            }}
          >
            NEVER MISS A DROP
          </Typography>
          <Typography
            variant='h4'
            sx={{ color: '#FFF', fontSize: '20px', pt: 2, fontWeight: '800' }}
          >
            Subscribe for the latest news, drops & collectibles
          </Typography>
        </Box>

        <Box
          maxWidth='lg'
          sx={{
            width: '100%',
            textAlign: 'center',
            pt: '30px',
          }}
        >
          <TextField
            fullWidth
            id='fullWidth'
            placeholder='Enter Your Email'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            sx={{
              background: '#fff',
              borderRadius: '4px 0px 0px 4px',
              height: '30px',
              padding: '10px',
              width: '40%',
            }}
          />
          <Button
            variant='contained'
            sx={{
              background: '#A08C5B',
              height: '50px',
              borderRadius: '0px 4px 4px 0px',
              padding: '10px 20px',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#CBB682',
                color: '#000',
              },
            }}
          >
            Subscribe
          </Button>
          <Typography
            variant='subtitle2'
            sx={{
              color: '#fff',
              pt: 2,
              textAlign: 'center',
              width: '50%',
              margin: 'auto ',
              padding: '30px',
            }}
          >
            After reading the Privacy Notice, you may subscribe for our
            newsletter to get special offers and occasional surveys delivered to
            your inbox. Unsubscribe at any time by clicking on the link in the
            email.
          </Typography>
          <FormGroup>
            <FormControlLabel
              sx={{
                width: '40%',
                margin: 'auto',
              }}
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    textAlign: 'center',
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#A08C5B',
                    },
                    fontWeight: '600',
                    fontSize: '14px',
                  }}
                />
              }
              label={
                <Typography
                  variant='body2'
                  color='white'
                  sx={{ fontSize: '12px', fontWeight: '600' }}
                >
                  By entering my email and subscribing I confirm and agree to
                  the above.
                </Typography>
              }
            />
          </FormGroup>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Subscribe;
