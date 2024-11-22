import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListaProductos from './components/ListaProductos';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/lista-productos" element={<ListaProductos/>} />
        <Route path="/producto/:slug" element={<ProductoDetalle/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;














