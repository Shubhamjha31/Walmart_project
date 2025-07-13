import React from "react";
import { warehouseLayout } from "../components/LayoutData";

const getShelfColor = (stock) => {
  if (stock >= 70) return "#4caf50";
  if (stock >= 40) return "#ffeb3b";
  if (stock >=5) return "#d9d8d8ff"
  return "#f44336";
};

export default function Inventory() {
  return (
    <div className="inventory-page">
      <h1>inventory</h1>
      <div
  style={{
    position: "absolute",
    left: warehouseLayout.warehouse.x,
    top: warehouseLayout.warehouse.y,
    width: warehouseLayout.warehouse.width,
    height: warehouseLayout.warehouse.height,
    backgroundColor: warehouseLayout.warehouse.color,
    border: "1px solid #d3cbcbff",
  }}
></div>

      {warehouseLayout.functionalZones.map((zone, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: zone.x,
            top: zone.y,
            width: zone.width,
            height: zone.height,
            backgroundColor: zone.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #000",
          }}
        >
          {zone.label}
        </div>
      ))}
      {warehouseLayout.shelfZones.map((zone, i) => (
        <div
          key={`zone-${i}`}
          style={{
            position: "absolute",
            left: zone.x,
            top: zone.y,
            width: zone.width,
            height: zone.height,
            border: "1px solid #999",
            backgroundColor: "#e1d6d6ff",
          }}
        >
          {zone.shelves?.map((shelf, j) => (
            <div
              key={shelf.id || `shelf-${j}`}
              style={{
                position: "absolute",
                left: shelf.x - zone.x,
                top: shelf.y - zone.y,
                width: shelf.width,
                height: shelf.height,
                backgroundColor: getShelfColor(shelf.stock),
                fontSize: "10px",
                color: "#333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
              title={`Stock: ${shelf.stock}`}
            >
              {shelf.stock}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}