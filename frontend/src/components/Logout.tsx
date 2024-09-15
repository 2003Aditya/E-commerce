
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    // Redirect to the login page
    navigate('/');
  };

  return (
    <Button onClick={handleLogout} variant="contained" color="secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
