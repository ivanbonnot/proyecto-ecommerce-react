import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar/NavBar';
//import Home from './routes/Home/Home';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Cart  from './components/Cart/Cart'
import  { Brief }  from './components/Brief/Brief'
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="proyecto-ecommerce-react/" element={<ItemListContainer />} />
          <Route exact path="proyecto-ecommerce-react/category/:categoryid" element={<ItemListContainer />} />
          <Route exact path="proyecto-ecommerce-react/item/:id" element={<ItemDetailContainer />} />
          <Route exact path='proyecto-ecommerce-react/cart' element={<Cart />} />
          <Route exact path='proyecto-ecommerce-react/brief' element={<Brief />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
