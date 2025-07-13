import React from "react";
import { warehouseLayout } from "./LayoutData";

function WarehouseDiv({ position = { x: 0, y: 0 } }) {
  const getShelfColor = (stock) => {
    if (stock >= 70) return "#4caf50";
    if (stock >= 40) return "#ffeb3b";
    if (stock >= 5) return "#d9d8d8ff";
    return "#f44336";
  };

  const warehouseBaseX = warehouseLayout.warehouse.x;
  const warehouseBaseY = warehouseLayout.warehouse.y;

  return (
    <div
      className="warehouse-layout-card-wrapper"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: warehouseLayout.warehouse.x - warehouseBaseX,
          top: warehouseLayout.warehouse.y - warehouseBaseY,
          width: warehouseLayout.warehouse.width,
          height: warehouseLayout.warehouse.height,
          backgroundColor: warehouseLayout.warehouse.color,
          border: "1px solid #d3cbcbff",
        }}
      ></div>

      {warehouseLayout.functionalZones.map((zone, i) => (
        <React.Fragment key={i}>
          {/* Label for the functional zone, positioned separately */}
          <div
            style={{
              position: "absolute",
              left: zone.x - warehouseBaseX,
              top: zone.y - warehouseBaseY - 15, // 20px above the zone
              fontSize: "12px",
              fontWeight: "bold",
              color: "#333",
              whiteSpace: "nowrap", // Prevents label from wrapping
              zIndex: 10, // Ensure label is above other elements if needed
            }}
          >
            {zone.label}
          </div>

          {/* The functional zone div itself */}
          <div
            style={{
              position: "absolute",
              left: zone.x - warehouseBaseX,
              top: zone.y - warehouseBaseY,
              width: zone.width,
              height: zone.height,
              backgroundColor: zone.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #000",
            }}
          >
            {/* The label is moved out, so this div can be empty or have other content */}
          </div>
        </React.Fragment>
      ))}

      {warehouseLayout.shelfZones.map((zone, i) => (
        <div
          key={`zone-${i}`}
          style={{
            position: "absolute",
            left: zone.x - warehouseBaseX,
            top: zone.y - warehouseBaseY,
            width: zone.width,
            height: zone.height,
            border: "1px solid #999",
            backgroundColor: "#e1d6d6ff",
            overflow: "hidden",
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

export default WarehouseDiv;