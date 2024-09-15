const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
// Load environment variables
dotenv.config();

const app = express();

app.use(cors());

app.use(userRoutes);
// Middleware to parse JSON requests
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
