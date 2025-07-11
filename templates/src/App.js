import React from 'react';
import ProductTable from './components/Product_table';
import './App.css';
import AreaChart from './components/Line_graph';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar' 
import PieChartOrder from './components/Piechart';
import InventoryCapacityChart from './components/Inventory_capacity_chart';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
        <Sidebar />
    </div>
  );
};

export default App;
