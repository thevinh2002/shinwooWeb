import React from 'react';
import Home from './pages/Home';

import Header from './layouts/Header';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Facility from './pages/Factility';
import Customer from './pages/Customer';

import Quality from './pages/Quality';
import Location from './pages/Location';
import Career from './pages/Career';

function App() {
  return (
<>
<Header/>
<Routes>
  <Route index element={<Home />} />
  <Route path="/facility" element={<Facility />} />
  <Route path="/products" element={<Products />} />
  <Route path="/customer" element={<Customer />} />
  <Route path="/career" element={<Career />} />
  <Route path="/quality" element={<Quality />} />
  <Route path="/location" element={<Location />} />
</Routes>
</>


  );
}

export default App;
