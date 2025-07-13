import React from "react";
import WarehouseDiv from "../components/FinalWarehouse";
import ProductTable from "../components/Product_table";
import "../styles/inventory.css"


export default function Inventory() {
    return (
        <div style={{
            position: 'relative',
            width: '90em', height: '100vh',
          
        }}>
            <h1>Inventory</h1>
            <div className="warehouse">
                <h1 className="warehouse-title">Warehouse Layout</h1>
                <WarehouseDiv position={{ x: 180, y: 150 }} />
            </div> 
            <div className="product-info">
            <ProductTable />
            </div>

        </div>
    );
}