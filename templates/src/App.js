import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import LayoutWithSidebar from './pages/MainLayout';
import TrendAnalysis from './pages/Trend_analysis';
import Suppliers from './pages/Suppliers';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route element={<LayoutWithSidebar />}>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      <Route path="/analysis" element={<TrendAnalysis />} />
      <Route path="/suppliers" element={<Suppliers />} />
      </Route>
    </Routes>
  );
}

export default App;