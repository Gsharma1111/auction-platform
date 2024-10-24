// src/pages/AuctionsPage.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const AuctionsPage = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Current Auctions
      </Typography>
    
      <Typography variant="body1">
        List of auctions will be displayed here...
      </Typography>
    </Box>
  );
};

export default AuctionsPage;
