import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import App from './App';
import Concept from './pages/Concept';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="concept" element={<Concept />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  </React.StrictMode>
);

