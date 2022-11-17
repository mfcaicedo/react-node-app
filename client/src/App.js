import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//importamos el componente de productos 
import ViewProduct from './components/ViewProduct';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import AddProduct from './components/AddProduct';

import Navbar from './components/Navbar';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ViewProduct />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/addProduct" element={<AddProduct />} />
      

    </Routes>
    // <div className="App bg-slate-00">
    //   {/* navbar */}
    //   <Navbar />
    //   {/* LLamado de los componentes */}
    //   <ViewProduct />

    // </div>
  );
}

export default App;
