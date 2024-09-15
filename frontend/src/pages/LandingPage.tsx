import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyCompany
          </Typography>
          <Button color="inherit" onClick={handleLogin} sx={{ mr: 2 }}>
            Login
          </Button>
          <Button color="inherit" onClick={handleSignUp}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to MyCompany
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          </Typography>
          <Box>
            <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" gutterBottom>
            </Typography>
            <Typography variant="body1">
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" gutterBottom>
            </Typography>
            <Typography variant="body1">
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" gutterBottom>
            </Typography>
            <Typography variant="body1">
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: 8, py: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 MyCompany. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
