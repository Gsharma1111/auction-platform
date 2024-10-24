import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Footer from "./components/Footer";
import AboutUsPage from './pages/AboutUsPage';
import AuctionPage from './pages/AuctionPage';
import LoginForm from "./components/LoginForm";
import AuctionDetails from './components/AuctionDetails';
import user2 from './assets/7.jpg';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <CssBaseline />

    
      <Header isLoggedIn={isLoggedIn} user={{
    name: "Geeta",
    avatar: user2 // Optional, will fallback to default if not provided
  }} />

     
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} user={user} />}/>
          <Route path="/auctions" element={<AuctionPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/auction/:id" element={<AuctionDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}



export default App;
