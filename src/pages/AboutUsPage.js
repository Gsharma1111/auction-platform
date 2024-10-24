
import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to Genix Auctions! We are a platform dedicated to helping you find the best deals through competitive and transparent bidding.
      </Typography>
    </Box>
  );
};

export default AboutUsPage;
