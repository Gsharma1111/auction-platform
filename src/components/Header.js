import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Header = ({ isLoggedIn, user }) => {
  const [auctionAnchorEl, setAuctionAnchorEl] = useState(null);
  const [biddingAnchorEl, setBiddingAnchorEl] = useState(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
  const handleMenuClose = (setter) => () => setter(null);
  const handleLoginClick = () => navigate('/login');
  const handleGetStartedClick = () => navigate('/get-started');
  const handleProfileMenuOpen = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setProfileAnchorEl(null);

  return (
    <AppBar position="static" style={{ backgroundColor: '#ffe4eb', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/path-to-your-logo.png" alt="Logo" style={{ height: '30px', marginRight: '8px' }} />
          <Typography variant="h6" style={{ color: '#000' }}>
            Genix Auctions
          </Typography>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            onClick={handleMenuOpen(setAuctionAnchorEl)}
            style={{ textTransform: 'none', color: '#000' }}
          >
            Auctions
          </Button>
          <Menu anchorEl={auctionAnchorEl} open={Boolean(auctionAnchorEl)} onClose={handleMenuClose(setAuctionAnchorEl)}>
            <MenuItem onClick={handleMenuClose(setAuctionAnchorEl)}>Live Auctions</MenuItem>
            <MenuItem onClick={handleMenuClose(setAuctionAnchorEl)}>Upcoming Auctions</MenuItem>
          </Menu>

          <Button
            color="inherit"
            onClick={handleMenuOpen(setBiddingAnchorEl)}
            style={{ textTransform: 'none', color: '#000' }}
          >
            Bidding
          </Button>
          <Menu anchorEl={biddingAnchorEl} open={Boolean(biddingAnchorEl)} onClose={handleMenuClose(setBiddingAnchorEl)}>
            <MenuItem onClick={handleMenuClose(setBiddingAnchorEl)}>How to Bid</MenuItem>
            <MenuItem onClick={handleMenuClose(setBiddingAnchorEl)}>Bidding Rules</MenuItem>
          </Menu>

          <Button
            color="inherit"
            onClick={handleMenuOpen(setAboutAnchorEl)}
            style={{ textTransform: 'none', color: '#000' }}
          >
            About Us
          </Button>
          <Menu anchorEl={aboutAnchorEl} open={Boolean(aboutAnchorEl)} onClose={handleMenuClose(setAboutAnchorEl)}>
            <MenuItem onClick={handleMenuClose(setAboutAnchorEl)}>Our Story</MenuItem>
            <MenuItem onClick={handleMenuClose(setAboutAnchorEl)}>Contact</MenuItem>
          </Menu>

          <Button
            color="inherit"
            onClick={handleMenuOpen(setLanguageAnchorEl)}
            style={{ textTransform: 'none', color: '#000', marginLeft: '16px' }}
          >
            English
          </Button>
          <Menu anchorEl={languageAnchorEl} open={Boolean(languageAnchorEl)} onClose={handleMenuClose(setLanguageAnchorEl)}>
            <MenuItem onClick={handleMenuClose(setLanguageAnchorEl)}>English</MenuItem>
            <MenuItem onClick={handleMenuClose(setLanguageAnchorEl)}>Spanish</MenuItem>
          </Menu>

          {isLoggedIn ? (
            <>
              <IconButton onClick={handleProfileMenuOpen} style={{ marginLeft: '16px' }}>
                <Avatar src={user?.avatar || '/path-to-default-avatar.jpg'} alt={user?.name || 'Profile'} />
              </IconButton>
              <Menu
                anchorEl={profileAnchorEl}
                open={Boolean(profileAnchorEl)}
                onClose={handleProfileMenuClose}
              >
                <MenuItem onClick={handleProfileMenuClose}>View Profile</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>My Auctions</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>My Bids</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={handleLoginClick}
                style={{ color: '#000', textTransform: 'none', marginLeft: '8px' }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={handleGetStartedClick}
                style={{ backgroundColor: '#57a0f8', textTransform: 'none', color: '#fff', marginLeft: '8px' }}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;