import React from 'react';
import ProductTable from './components/Product_table';
import './App.css';
import AreaChart from './components/Line_graph';
import Auth from './pages/Auth';
import PieChartOrder from './components/Piechart';
import InventoryCapacityChart from './components/Inventory_capacity_chart';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      {/* <div className='auth-page'>
          <Auth/>
        </div> */}
         {/*leave this as it is for now */}

      {/* <div className='demo-page'>
         <div className='dummy-sidebar'> </div> dummy sidebar for refernceing
         <div className='charts'>
          <AreaChart />
          <PieChartOrder />
          <InventoryCapacityChart />
          <ProductTable />
         </div>
          </div>   */}
          {/* <Cards head="Pallet Incoming" value="120" color="#4CAF50" />
          <Cards head="Pallet Outgoing" value="80" color="#2196F3" />
          <Cards head="Low Stock Alert" value="5" color="#FF9800" /> */}
     

    </div>
  );
}

export default App;
