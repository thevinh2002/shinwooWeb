import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import Header from './layouts/Header';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
<Header/>
<Routes>
  <Route index element={<Home />} />
  <Route path="/products" element={<Products />} />
</Routes>
</>


  );
}

export default App;
