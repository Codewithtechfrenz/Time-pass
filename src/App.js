import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTopButton from "./Components/ScrollToTopButton";
import PageScrollProgress from "./Components/PageScrollProgress";

import Home from "./Components/Home";
import ProductsPage from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

import Loader from "./Components/Loader";   // ✅ ADD
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  // ✅ Initial loader (1.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Show loader first
  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTopButton />
      <PageScrollProgress />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
