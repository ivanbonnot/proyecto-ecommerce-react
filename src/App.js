import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';
import Home from './routes/Home/Home';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// import ProductsId from './routes/ProductsId/ProductsId';


function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/products/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
