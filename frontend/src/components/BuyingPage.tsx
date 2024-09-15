
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, Box, TextField, Card, CardMedia } from '@mui/material';

const BuyingPage: React.FC = () => {
  const { id } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState<any>(null); // Adjust the type as needed
  const [quantity, setQuantity] = useState<number>(1); // To manage the quantity
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };

    fetchProduct();
  }, [id]);

  const handlePurchase = async () => {
    // Handle the purchase logic here, e.g., send data to your backend
  };

  if (error) return <Typography color="error">Error: {error}</Typography>;
  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: 'auto',
        boxShadow: 4,
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
        mt: 8,
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        height="300"
        image={product.image}
        sx={{
          objectFit: 'cover',
        }}
      />
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 2 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 3 }}>
          Price: ₹{product.price}
        </Typography>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          fullWidth
          variant="outlined"
          sx={{ backgroundColor: '#f9f9f9', borderRadius: 1, mb: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlePurchase}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#007bff',
            ':hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Purchase
        </Button>
      </Box>
    </Card>
  );
};

export default BuyingPage;
