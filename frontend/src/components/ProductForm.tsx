import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { TextField, Button, Paper, Grid, Box, Typography } from '@mui/material';

interface ProductFormProps {
  onSuccess: () => void; // Callback for handling successful submission
}

const ProductForm: React.FC<ProductFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      console.log({
        name,
        description,
        price: parseFloat(price),
        image,
      });
      await axios.post('http://localhost:5000/api/products/products/', {
        name,
        description,
        price: parseFloat(price),
        image,
      });
      onSuccess(); // Call the success callback
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 6, borderRadius: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Product Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{ backgroundColor: '#f9f9f9', borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              fullWidth
              required
              multiline
              minRows={4}
              variant="outlined"
              sx={{ backgroundColor: '#f9f9f9', borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{ backgroundColor: '#f9f9f9', borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Image URL"
              value={image}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: '#f9f9f9', borderRadius: 1 }}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error" align="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Box mt={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  backgroundColor: '#007bff',
                  ':hover': {
                    backgroundColor: '#0056b3',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ProductForm;
