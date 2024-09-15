import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.tsx';
import RegisterForm from './components/RegisterForm.tsx';
import LogoutButton from './components/Logout.tsx';
import LandingPage from './pages/LandingPage.tsx';
import ProductListing from './components/ProductList.tsx';
import Home from './pages/Home.tsx';
import BuyingPage from './components/BuyingPage.tsx';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/logout" element={<LogoutButton />} />
      <Route path="/product" element={<ProductListing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:id' element={<BuyingPage />} />
    </Routes>
  </Router>
);

export default App;
