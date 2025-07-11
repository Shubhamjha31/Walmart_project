import React from 'react';
import ProductTable from './components/Product_table';
import './App.css';
import AreaChart from './components/Line_graph';
import Auth from './pages/Auth';
import PieChartOrder from './components/Piechart';
import InventoryCapacityChart from './components/Inventory_capacity_chart';


function App() {
  return (
    <div className="App">
        <div className='charts'>
            {/* <AreaChart/> */}
            {/* <ProductTable /> */}
            {/* <Auth/> */}
            <PieChartOrder />
            <InventoryCapacityChart />
        </div>

    </div>
  );
}

export default App;
