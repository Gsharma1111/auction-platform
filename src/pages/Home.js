// src/pages/Home.js
import React from 'react';
import MiddleSection from '../components/MiddleSection';
import { Typography } from '@mui/material';
import AuctionsSection from '../components/AuctionsSection';

const Home = ({ isLoggedIn, user }) => {
  return (
    <>
      {isLoggedIn ?  (<Typography variant="h4">Hi, {user}!</Typography>):(<MiddleSection isLoggedIn={isLoggedIn} user={user} />)}
       <AuctionsSection isLoggedIn={isLoggedIn} user={user} />
       <AuctionsSection isLoggedIn={isLoggedIn} user={user} />
    </>
  );
};

export default Home;
