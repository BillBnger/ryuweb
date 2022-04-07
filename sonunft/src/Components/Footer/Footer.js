import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <React.Fragment>
      <Container
        maxWidth='lg'
        sx={{
          m: '2',
          marginTop: '20px',
          padding: '20px',
        }}
      >
        <Box>
          <Typography
            variant='subtitle1'
            sx={{ fotnFamily: 'Robot', fontSize: '12px', color: '#fff', ml: 2 }}
          >
            &copy; 2022 - Sonu Nigam Music NFT
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
