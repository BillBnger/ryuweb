import { Divider, Typography, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function AnimatedNfts() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch('https://api.bitski.com/v1/products?limit=8')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      sx={{
        background: '#fff',
        borderRadius: '10px',
        opacity: '0.9',
        marginBottom: '50px',
      }}
    >
      <Divider sx={{ padding: '50px' }}>
        <Typography
          variant='h3'
          sx={{
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          Latest Collection of NFTs
        </Typography>
      </Divider>

      <Grid container spacing={2} sx={{ padding: '0' }}>
        {products.map(product => (
          <Grid key={product.id} item sm={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AnimatedNfts;
