
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import ProductForm from './ProductForm';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string; // Optional image field
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('http://localhost:5000/api/products/getproducts');
      setProducts(response.data);
    } catch (error) {
      // Handle error appropriately
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(fetchProducts());
    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    // Refresh the product list after adding a new product
    fetchProducts();
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box>
      <Box sx={{ margin: '30px 50%' }}>
        <Typography>PRODUCTS</Typography>
      </Box>
      {/* Add margin to the Box here */}

      <Box sx={{ margin: '50px 0' }}>
        {/* Uncomment the ProductForm component if you want to include it */}
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
      >
        {products.map((product) => (
          <Box
            key={product._id}
            component="article"
            width={{ xs: '100%', sm: '45%', md: '30%' }} // Responsive widths
            maxWidth={300}
          >
            <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  ₹{product.price}
                </Typography>
                <Box mt={2}>
                  <Button
                    component={Link}
                    to={`/product/${product._id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.2,
                      transition: 'background-color 0.3s, transform 0.3s',
                      ':hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Buy
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
