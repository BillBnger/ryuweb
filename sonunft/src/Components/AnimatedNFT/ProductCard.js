import { Typography, Button, Container, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';

function ProductCard({ product }) {
  return (
    <Container maxWidth='lg' sx={{ paddingBottom: '40px' }}>
      <Card sx={{ maxWidth: '400px', borderRadius: '10px' }} elevation={2}>
        <CardMedia
          component='video'
          alt='green iguana'
          image={product.tokenMetadata['animation_url']}
          controls
        />
        <CardContent>
          <Typography
            gutterBottom
            component='div'
            sx={{ fontSize: '14px', fontWeight: 'bold' }}
          >
            {product.tokenMetadata['name']}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {`${product.tokenMetadata['description'].substring(0, 50)}...`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <Typography sx={{ color: '#000', fontWeight: 'bold' }}>
              {product.prices.map(price => price['currency'])}
              {product.prices.map(price => price['price'])}
            </Typography>
          </Button>
          <Button>
            <Link
              sx={{
                color: '#A08C5B',
                textDecoration: 'none',
                textAlign: 'right',
              }}
              href={product.purchaseLink}
            >
              {' '}
              Buy Now
            </Link>{' '}
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProductCard;
