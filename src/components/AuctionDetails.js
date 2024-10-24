import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Chip, Button, Modal, TextField } from '@mui/material';
import Smartphone from '../assets/Smartphone.png';

const auctionData = [
  {
    id: 1,
    title: 'SmartPhones',
    description: 'Immerse yourself in pristine sound quality with the smartphones...',
    minimumBid: 100,
    currentBid: 165,
    timeLeft: '1 day 12 hrs 43 minutes',
    bids: [157, 150, 145, 140, 132, 111, 109, 105],
    imageUrl: Smartphone
  }
];

const AuctionDetails = () => {
  const { id } = useParams();
  const auction = auctionData.find((item) => item.id === parseInt(id));

  const [open, setOpen] = useState(false);
  const [bid, setBid] = useState(auction ? auction.currentBid + 1 : 0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBidChange = (e) => setBid(e.target.value);

  if (!auction) {
    return <Typography variant="h6">Auction not found!</Typography>;
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <img 
        src={auction.imageUrl} 
        alt={auction.title} 
        style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto 20px' }}
      />

      <Typography variant="h4" gutterBottom>{auction.title}</Typography>
      <Typography>{auction.description}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Minimum Bid: ${auction.minimumBid}</Typography>
      <Typography variant="h5">Current Bid: ${auction.currentBid}</Typography>
      <Typography color="textSecondary">Ends in: {auction.timeLeft}</Typography>

      <Box sx={{ mt: 2 }}>
        <Chip label="Live Auction" color="success" />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Bid History:</Typography>
        <ul>
          {auction.bids.map((bid, index) => (
            <li key={index}>Bid: ${bid}</li>
          ))}
        </ul>
      </Box>

      <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handleOpen}>
        Place a Bid
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="place-bid-modal"
        aria-describedby="place-your-bid"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" id="place-bid-modal">
            Submit Bid | {auction.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Minimum Bid: ${auction.minimumBid}
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Current Bid: ${auction.currentBid}
          </Typography>

          <TextField
            fullWidth
            label="Your Bid"
            type="number"
            value={bid}
            onChange={handleBidChange}
            InputProps={{ inputProps: { min: auction.currentBid + 1 } }}
            sx={{ mt: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => {
              handleClose();
              alert(`Bid of $${bid} submitted successfully!`);
            }}
          >
            Submit Bid
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AuctionDetails;
