import React from "react";
import '../styles/dashboard.css';
import Cards from "../components/Cards";
import PieChartOrder from "../components/Piechart";
import InventoryCapacityChart from "../components/Inventory_capacity_chart";


export default function Dashboard() {
    return(
        <div className="dashboard">
            <Cards head="Palettes Incoming" value="100" color="#4CAF50" />
            <Cards head="palettes Outing" value="57" color="#2196F3" />
            <Cards head="Low Stock" value="24" color="#FF9800" />
            <div className="pie">
                <PieChartOrder />
            </div>
            
            <InventoryCapacityChart />
        </div>
    )
}