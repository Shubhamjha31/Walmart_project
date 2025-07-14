import React from "react";
import '../styles/dashboard.css';
import Cards from "../components/Cards";
import PieChartOrder from "../components/Piechart";
import InventoryCapacityChart from "../components/Inventory_capacity_chart";
import WarehouseSalesChart from "../components/SalesGraph";
import ReturnTable from "../components/ReturnTable";


export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-heading">Dashboard</h2>

      
        <div className="cards-row">
            <Cards head="Pallets Incoming" value="100" color="#4CAF50" />
            <Cards head="Pallets Outing" value="57" color="#2196F3" />
            <Cards head="Low Stock" value="24" color="#FF9800" />
            <Cards head="Damaged Pallets" value="12" color="#F44336" />
        </div>


        <div className="dashboard-grid">
        <div className="chart-row">
            <div className="dashboard-box pie">
                <PieChartOrder />
            </div>
            <div className="dashboard-box inventory">
                <InventoryCapacityChart />
            </div>
        </div>

        <div className="sales-return-wrapper">
            <div className="dashboard-box sales">
            <WarehouseSalesChart
               chartData={null}
                lineColor="#FF5733"
             valueFormatter={null}
                    />
            </div>

            <div className="dashboard-box return-table">
                <ReturnTable />
            </div>
        </div>
      </div>
    </div>
  );
}