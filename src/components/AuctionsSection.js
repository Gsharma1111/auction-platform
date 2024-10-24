import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Button, Chip } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Smartphone from '../assets/Smartphone.png';
import Earbuds from '../assets/WirelessEarbud.jpg';
import laptop from '../assets/laptop.jpg';

const auctions = [
  {
    id: 1,
    title: 'Smartphone',
    img: Smartphone,
    minimumBid: 100,
    currentBid: 157,
    timeLeft: '1 day 12 hrs 43 minutes',
    imageUrl: Smartphone
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    img: Earbuds,
    minimumBid: 50,
    currentBid: 85,
    timeLeft: '3 days 4 hrs 30 minutes'
  },
  {
    id: 3,
    title: 'Laptop',
    img: laptop,
    minimumBid: 500,
    currentBid: 750,
    timeLeft: '2 days 8 hrs 10 minutes'
  }
];

const AuctionsSection = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: '2rem' }}>
      {auctions.map((auction) => (
        <Box key={auction.id} sx={{ flex: '1 1 calc(33.333% - 2rem)', boxSizing: 'border-box', position: 'relative' }}>
          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image={auction.img}
                alt={auction.title}
              />
              <Chip
                label="Live Auction"
                color="success"
                sx={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  fontWeight: 'bold'
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h6" sx={{ mt: 1 }}>{auction.title}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Minimum Bid: ${auction.minimumBid}
                </Typography>
                <Typography variant="h6">
                  Current Bid: ${auction.currentBid}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Ends in: {auction.timeLeft}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
                <Link to={`/auction/${auction.id}`}>
                  <Button variant="contained" color="error">
                    Bid now
                  </Button>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default AuctionsSection;
