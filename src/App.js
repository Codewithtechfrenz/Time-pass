import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTopButton from './Components/ScrollToTopButton';
import PageScrollProgress from './Components/PageScrollProgress';
import Home from './Components/Home';
import ProductsPage from './Components/Products';
import AboutUs from './Components/AboutUs'; // Import AboutUs
import ContactUs from './Components/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTopButton />
      <PageScrollProgress/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
     </Routes>
    </Router>
  );
}

export default App;
