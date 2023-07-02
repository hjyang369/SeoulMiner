import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import ViewAll from './pages/productList/ViewAll';
import ProductList from './pages/productList/ViewAll';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ViewAll" element={<ViewAll />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
