import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home';
import ProductDetails from './Components/Product/ProductDetails';
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import ForgotPassword from './Components/User/ForgotPassword';
function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          <Route path="/search/:keyword" element={<Home />} exact="true" />
          <Route path="/login" element={<Login />} exact="true" />
          <Route path="/register" element={<Register exact="true" />} />
          <Route path="/password/forgot" element={<ForgotPassword />} exact="true" />
          
        </Routes>

      </Router>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
