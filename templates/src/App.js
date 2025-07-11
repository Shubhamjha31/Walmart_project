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
      {/* <div className='auth-page'>
          <Auth/>
        </div> */}
         {/*leave this as it is for now */}

      <div className='demo-page'>
         <div className='dummy-sidebar'> </div> {/*dummy sidebar for refernceing*/}
         <div className='charts'>
          <AreaChart />
          <PieChartOrder />
          <InventoryCapacityChart />
          <ProductTable />
         </div>
      </div>

    </div>
  );
}

export default App;
