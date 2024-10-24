import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0b1120',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="h6" component="div" fontWeight="bold">
            <img
              src="/path-to-logo" 
              alt="Genix Auctions Logo"
              style={{ marginRight: '10px', verticalAlign: 'middle' }}
            />
            Genix Auctions
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                Products
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                About us
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                Contact
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                Auctions
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                Bidding
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={3} textAlign={{ xs: 'center', md: 'right' }}>
          <IconButton color="inherit" href="#">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="#">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="#">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="#">
            <GitHub />
          </IconButton>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{ marginTop: '20px' }}
      >
        &copy; Copyright 2024, All Rights Reserved by Genix
      </Typography>
    </Box>
  );
};

export default Footer;
