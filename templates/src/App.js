import React from 'react';
import ProductTable from './components/Product_table';
import './App.css';
import AreaChart from './components/Line_graph';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar'
import PieChartOrder from './components/Piechart';
import InventoryCapacityChart from './components/Inventory_capacity_chart';
import Cards from './components/Cards';
import Card from '@mui/material/Card';
import Home from './pages/Home';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='main-page'>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
