import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory'; 
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import kids_banner from './components/Assests/kids_banner.jpg';
import mens_banner from './components/Assests/men_banner.jpg';
import womens_banner from './components/Assests/womens_banner.jpg';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory  banner={mens_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
