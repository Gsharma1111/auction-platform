import React, { useState } from "react";
import { Button, Checkbox, TextField, Typography, Box, Link, Grid } from "@mui/material";
import { Google as GoogleIcon, Apple as AppleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email] = useState("hello@example.com");
  const [password] = useState("correctpassword");
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUsername("Geeta");
    if (username) {
      onLogin(username);  
      navigate('/');      
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "100px auto",
        padding: "30px",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Welcome back. Enter your credentials to access your account.
      </Typography>
      <form onSubmit={handleLogin}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            defaultValue={email}
            disabled
          />
        </Box>
        <Box mb={1}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            defaultValue={password}
            disabled
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography variant="body2">Keep me signed in</Typography>
          </Box>
          <Link href="#" variant="body2" underline="hover">
            Forgot Password?
          </Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2, py: 1.5 }}
        >
          Continue
        </Button>
      </form>
      <Typography variant="body2" color="textSecondary" sx={{ my: 2 }}>
        or sign up with
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "none" }}
          >
            Google
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{ textTransform: "none" }}
          >
            Apple
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: "none" }}
          >
            Facebook
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mt: 3 }}>
        Don't have an account?{" "}
        <Link href="#" variant="body2" underline="hover">
          Sign up here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;