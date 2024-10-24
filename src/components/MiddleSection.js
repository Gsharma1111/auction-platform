import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import happygirl from '../assets/happygirl3.webp';
import user1 from '../assets/1.jpg';
import user2 from '../assets/2.jpg';

const MiddleSection = ({ isLoggedIn, user }) => {
  const handleWatchVideo = () => {
    // Implement the logic for watching the video here, e.g., open a modal or redirect
    console.log('Watch Video clicked');
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '4rem 2rem', 
        backgroundColor: '#f8f9fc',
        flexDirection: { xs: 'column', md: 'row' } // Column on small screens, row on larger screens
      }}
    >
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, marginRight: { md: '2rem' } }}>
        <Typography variant="h3" gutterBottom>
          Your Gateway to Extraordinary Finds
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Unlock deals, bid smart, and seize the moment with our online bidding bonanza!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ margin: '1rem 0' }} 
          onClick={handleWatchVideo} // Added click handler
        >
          Watch Video
        </Button>
      </Box>

      <Box
        sx={{ 
          position: 'relative', 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '400px', // Adjust height as needed
          backgroundImage: `url(${happygirl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: '8px'
        }}
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
          <Avatar src={user1} alt="User 1 testimonial" />
          <Typography variant="body1" sx={{ backgroundColor: '#6200ea', color: '#fff', borderRadius: '12px', padding: '0.5rem', marginTop: '0.5rem' }}>
            Seamless, lightweight! Loving this site.
          </Typography>
        </Box>

        <Box sx={{ position: 'absolute', top: '10%', right: '10%' }}>
          <Avatar src={user2} alt="User 2 testimonial" />
          <Typography variant="body1" sx={{ backgroundColor: '#00c853', color: '#fff', borderRadius: '12px', padding: '0.5rem', marginTop: '0.5rem' }}>
            Overall Fantastic!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MiddleSection;