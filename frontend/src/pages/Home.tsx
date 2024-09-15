
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import LogoutButton from '../components/Logout';
import ProductList from '../components/ProductList';

const Home = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyCompany
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {username ? `welcome ${username}` : ''}
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <ProductList />

      <Box
        sx={{
          borderTop: '1px solid #ddd',
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
      </Box>
      <Box sx={{ marginTop: 2, padding: 4, textAlign: 'center', backgroundColor: 'background.paper', borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 MyCompany. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
