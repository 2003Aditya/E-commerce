import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Grid, Box} from '@mui/material';

interface User {
  _id: string;
  username: string;
  email: string;
  password: string; // Depending on whether you need this
  __v: number;
}

interface LoginResponse {
  token: string;
  user: User;
  message: string;
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      // Assert the type of the response data
      const data = response.data as LoginResponse;

      localStorage.setItem('token', data.token);

      // Access the username from the user object
      const username = data.user.username;
      localStorage.setItem('username', username);

      navigate('/home');
    } catch (error) {
      console.error('Login error:', (error as any).response?.data?.error || (error as Error).message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8, boxShadow: 3, p: 4, borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  ':hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
