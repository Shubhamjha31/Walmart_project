import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const ZONE_TYPES = [
  { label: "Staging Area", color: "#facc15" },
  { label: "Inbound", color: "#22c55e" },
  { label: "Outbound", color: "#3b82f6" },
  { label: "Packaging", color: "#ec4899" },
  { label: "Returns/Damaged", color: "#ef4444" },
  { label: "Free Space", color: "#a3a3a3" },
];

const SHELF_ZONE_COLOR = "#94a3b8";

function getShelfColor(stock) {
  if (stock > 80) return "#22c55e";
  if (stock > 40) return "#facc15";
  if (stock > 0) return "#f97316";
  return "#e5e7eb";
}

const MIN_DRAG_DISTANCE = 5;

function WarehouseCanvas() {
  const [step, setStep] = useState("draw-warehouse");
  const stageRef = useRef(null);
  const [currentDrawingRect, setCurrentDrawingRect] = useState(null);
  const [startPos, setStartPos] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [warehousePerimeter, setWarehousePerimeter] = useState(null);
  const [zones, setZones] = useState([]);
  const [shelfZones, setShelfZones] = useState([]);
  const [selectedShelfZoneIndex, setSelectedShelfZoneIndex] = useState(null);
  const [gridRows, setGridRows] = useState(3);
  const [gridCols, setGridCols] = useState(4);
  const [selectedFunctionalZoneType, setSelectedFunctionalZoneType] = useState(ZONE_TYPES[0]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setCurrentDrawingRect(null);
        setStartPos(null);
        setIsDrawing(false);
        setSelectedShelfZoneIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseDown = (e) => {
    if (step === "finished") return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    // If we are in "configure-shelves" step and clicked an existing shelf zone,
    // let its onClick handler take over. Otherwise, assume we're starting a draw.
    if (step === "configure-shelves" && e.target.name() === "shelf-zone-rect") {
        setIsDrawing(false);
        setCurrentDrawingRect(null);
        // The individual Rect's onClick will handle selection
        return;
    }

    // For all other steps, or if not a selectable shelf zone, we initiate a draw.
    setStartPos({ x, y });
    setIsDrawing(true);
    setCurrentDrawingRect({ x: x, y: y, width: 0, height: 0, type: step });
    setSelectedShelfZoneIndex(null); // Deselect anything when starting a new draw
  };


  const handleMouseMove = (e) => {
    if (!isDrawing || !startPos || step === "finished") return;

    const { x, y } = stageRef.current.getPointerPosition();
    const width = x - startPos.x;
    const height = y - startPos.y;

    setCurrentDrawingRect({
      ...currentDrawingRect,
      x: startPos.x,
      y: startPos.y,
      width,
      height,
    });
  };

  const handleMouseUp = () => {
    if (!isDrawing || !startPos || step === "finished") return;

    const currentX = currentDrawingRect ? Math.min(currentDrawingRect.x, currentDrawingRect.x + currentDrawingRect.width) : startPos.x;
    const currentY = currentDrawingRect ? Math.min(currentDrawingRect.y, currentDrawingRect.y + currentDrawingRect.height) : startPos.y;

    const distance = Math.sqrt(
        Math.pow(currentX - startPos.x, 2) + Math.pow(currentY - startPos.y, 2)
    );

    setIsDrawing(false);
    setStartPos(null);

    if (distance < MIN_DRAG_DISTANCE || !currentDrawingRect || (currentDrawingRect.width === 0 && currentDrawingRect.height === 0)) {
        setCurrentDrawingRect(null);
        return;
    }

    const normalizedRect = {
      x: Math.min(currentDrawingRect.x, currentDrawingRect.x + currentDrawingRect.width),
      y: Math.min(currentDrawingRect.y, currentDrawingRect.y + currentDrawingRect.height),
      width: Math.abs(currentDrawingRect.width),
      height: Math.abs(currentDrawingRect.height),
    };

    if (step === "draw-warehouse") {
      setWarehousePerimeter(normalizedRect);
    } else if (step === "define-zones") {
      if (warehousePerimeter && !isWithinBounds(normalizedRect, warehousePerimeter)) {
        alert("Zone must be inside the warehouse boundaries.");
      } else {
        setZones((prev) => [...prev, { ...selectedFunctionalZoneType, ...normalizedRect }]);
      }
    } else if (step === "define-shelf-zones") {
      setShelfZones((prev) => [
        ...prev,
        { ...normalizedRect, color: SHELF_ZONE_COLOR, label: "Shelf Zone" },
      ]);
    }

    setCurrentDrawingRect(null);
  };

  const isWithinBounds = (child, parent) => {
    if (!parent) return false;

    const childX1 = child.x;
    const childY1 = child.y;
    const childX2 = child.x + child.width;
    const childY2 = child.y + child.height;

    const parentX1 = parent.x;
    const parentY1 = parent.y;
    const parentX2 = parent.x + parent.width;
    const parentY2 = parent.y + parent.height;

    return (
      childX1 >= parentX1 &&
      childY1 >= parentY1 &&
      childX2 <= parentX2 &&
      childY2 <= parentY2
    );
  };

  const handleShelfZoneClick = (e, index) => {
    e.cancelBubble = true;
    if (step === "configure-shelves") {
      setSelectedShelfZoneIndex(index);
    }
  };

  const handleGenerateGrid = (e) => {
    e.preventDefault();
    if (selectedShelfZoneIndex === null || !shelfZones[selectedShelfZoneIndex]) return;

    const shelfZone = shelfZones[selectedShelfZoneIndex];
    const newShelves = [];

    const effectiveWidth = shelfZone.width;
    const effectiveHeight = shelfZone.height;
    const startX = shelfZone.x;
    const startY = shelfZone.y;

    const calculatedGridRows = gridRows > 0 ? gridRows : 1;
    const calculatedGridCols = gridCols > 0 ? gridCols : 1;

    const cellWidth = effectiveWidth / calculatedGridCols;
    const cellHeight = effectiveHeight / calculatedGridRows;

    for (let row = 0; row < calculatedGridRows; row++) {
      for (let col = 0; col < calculatedGridCols; col++) {
        newShelves.push({
          id: `shelf-${selectedShelfZoneIndex}-${row}-${col}`,
          row,
          col,
          x: startX + col * cellWidth,
          y: startY + row * cellHeight,
          width: cellWidth,
          height: cellHeight,
          stock: Math.floor(Math.random() * 100),
        });
      }
    }

    const updatedShelfZones = [...shelfZones];
    updatedShelfZones[selectedShelfZoneIndex] = {
      ...shelfZone,
      shelves: newShelves,
    };

    setShelfZones(updatedShelfZones);
    setSelectedShelfZoneIndex(null);
  };

  const handleDeleteShelfZone = () => {
    if (selectedShelfZoneIndex === null) return;
    const updatedShelfZones = [...shelfZones];
    updatedShelfZones.splice(selectedShelfZoneIndex, 1);
    setShelfZones(updatedShelfZones);
    setSelectedShelfZoneIndex(null);
  };

  const handleFinishLayout = () => {
    const layoutJSON = {
      warehouse: warehousePerimeter,
      functionalZones: zones.map((zone) => ({
        label: zone.label,
        color: zone.color,
        x: zone.x,
        y: zone.y,
        width: zone.width,
        height: zone.height,
      })),
      shelfZones: shelfZones.map((shelfZone) => ({
        x: shelfZone.x,
        y: shelfZone.y,
        width: shelfZone.width,
        height: shelfZone.height,
        shelves: shelfZone.shelves || [],
      })),
    };
    console.log("Warehouse Layout JSON:", JSON.stringify(layoutJSON, null, 2));
    alert("Layout finished! Check console for JSON output.");
    setStep("finished");
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          background: "#eee",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {step === "draw-warehouse" && (
          <p style={{ margin: "0 10px 0 0" }}>
            **Step 1:** Draw the **warehouse perimeter** on the canvas.
          </p>
        )}

        {step === "define-zones" && (
          <>
            <p style={{ margin: "0 10px 0 0" }}>
              **Step 2:** Select a **functional zone type** and draw it within
              the warehouse.
            </p>
            {ZONE_TYPES.map((type) => (
              <button
                key={type.label}
                style={{
                  backgroundColor:
                    selectedFunctionalZoneType.label === type.label
                      ? type.color
                      : "#fff",
                  border: "1px solid #ccc",
                  padding: "8px 15px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onClick={() => {
                  setSelectedFunctionalZoneType(type);
                  setCurrentDrawingRect(null);
                }}
              >
                {type.label}
              </button>
            ))}
          </>
        )}

        {step === "define-shelf-zones" && (
          <p style={{ margin: "0 10px 0 0" }}>
            **Step 3:** Draw **Shelf Zones** (areas where shelves will be
            placed).
          </p>
        )}

        {step === "configure-shelves" && (
          <p style={{ margin: "0 10px 0 0" }}>
            **Step 4:** Click on a **Shelf Zone** to define its shelves.
          </p>
        )}

        {step === "finished" && (
          <p style={{ margin: "0 10px 0 0" }}>
            Layout **complete**! You can now review the generated JSON.
          </p>
        )}

        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          {step === "draw-warehouse" && warehousePerimeter && (
            <button
              onClick={() => {
                setStep("define-zones");
                setCurrentDrawingRect(null);
                setIsDrawing(false);
              }}
              style={{
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next: Define Functional Zones
            </button>
          )}
          {step === "define-zones" && zones.length > 0 && (
            <button
              onClick={() => {
                setStep("define-shelf-zones");
                setSelectedShelfZoneIndex(null);
                setCurrentDrawingRect(null);
                setIsDrawing(false);
              }}
              style={{
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next: Define Shelf Zones
            </button>
          )}
          {step === "define-shelf-zones" &&
            shelfZones.length > 0 && (
              <button
                onClick={() => {
                  setStep("configure-shelves");
                  setCurrentDrawingRect(null);
                  setIsDrawing(false);
                }}
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Next: Configure Shelves
              </button>
            )}
          {step === "configure-shelves" && (
            <button
              onClick={handleFinishLayout}
              style={{
                padding: "8px 15px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Finish Layout & Export JSON
            </button>
          )}
          {step === "finished" && (
            <button
              onClick={() => {
                setStep("draw-warehouse");
                setWarehousePerimeter(null);
                setZones([]);
                setShelfZones([]);
                setSelectedShelfZoneIndex(null);
                setCurrentDrawingRect(null);
                setStartPos(null);
                setIsDrawing(false);
              }}
              style={{
                padding: "8px 15px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Start New Layout
            </button>
          )}
        </div>
      </div>

      {selectedShelfZoneIndex !== null && step === "configure-shelves" && (
        <div
          style={{
            padding: 10,
            background: "#ddd",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h3>Configure Shelves for Shelf Zone: {selectedShelfZoneIndex + 1}</h3>
          <form onSubmit={handleGenerateGrid} style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              placeholder="Rows"
              value={gridRows}
              onChange={(e) => setGridRows(parseInt(e.target.value) || 0)}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "80px",
              }}
              min="1"
            />
            <input
              type="number"
              placeholder="Cols"
              value={gridCols}
              onChange={(e) => setGridCols(parseInt(e.target.value) || 0)}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "80px",
              }}
              min="1"
            />
            <button
              type="submit"
              style={{
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Generate Grid
            </button>
          </form>
          <button
            style={{
              padding: "8px 15px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
            onClick={handleDeleteShelfZone}
          >
            Delete Shelf Zone
          </button>
        </div>
      )}

      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight - (selectedShelfZoneIndex !== null && step === "configure-shelves" ? 150 : 100)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={(e) => {
          if (step === "configure-shelves" && e.target === e.target.getStage()) {
            setSelectedShelfZoneIndex(null);
          }
        }}
        style={{ background: "#f0f0f0", borderTop: "1px solid #ccc" }}
      >
        <Layer>
          {warehousePerimeter && (
            <Rect
              x={warehousePerimeter.x}
              y={warehousePerimeter.y}
              width={warehousePerimeter.width}
              height={warehousePerimeter.height}
              stroke="black"
              strokeWidth={2}
              fill="rgba(0,0,0,0.02)"
              dash={[10, 5]}
            />
          )}

          {zones.map((zone, i) => (
            <React.Fragment key={`zone-${i}`}>
              <Rect
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                fill={zone.color}
                opacity={0.4}
                stroke={"#000"}
                strokeWidth={1}
              />
              <Text
                text={zone.label}
                x={zone.x + 5}
                y={zone.y + 5}
                fontSize={14}
                fill="black"
              />
            </React.Fragment>
          ))}

          {shelfZones.map((shelfZone, i) => (
            <React.Fragment key={`shelf-zone-${i}`}>
              <Rect
                name="shelf-zone-rect"
                x={shelfZone.x}
                y={shelfZone.y}
                width={shelfZone.width}
                height={shelfZone.height}
                fill={shelfZone.color}
                opacity={0.6}
                stroke={
                  selectedShelfZoneIndex === i && step === "configure-shelves"
                    ? "black"
                    : "#000"
                }
                strokeWidth={
                  selectedShelfZoneIndex === i && step === "configure-shelves" ? 3 : 1
                }
                onClick={
                  step === "configure-shelves"
                    ? (e) => handleShelfZoneClick(e, i)
                    : null
                }
              />
              <Text
                text={`Shelf Zone ${i + 1}`}
                x={shelfZone.x + 5}
                y={shelfZone.y + 5}
                fontSize={14}
                fill="white"
              />
              {shelfZone.shelves &&
                shelfZone.shelves.map((shelf, si) => (
                  <Rect
                    key={`shelf-${i}-${si}`}
                    x={shelf.x}
                    y={shelf.y}
                    width={shelf.width}
                    height={shelf.height}
                    fill={getShelfColor(shelf.stock)}
                    stroke="#444"
                    strokeWidth={0.5}
                  />
                ))}
            </React.Fragment>
          ))}

          {isDrawing && currentDrawingRect && (
            <>
              <Rect
                x={Math.min(currentDrawingRect.x, currentDrawingRect.x + currentDrawingRect.width)}
                y={Math.min(currentDrawingRect.y, currentDrawingRect.y + currentDrawingRect.height)}
                width={Math.abs(currentDrawingRect.width)}
                height={Math.abs(currentDrawingRect.height)}
                stroke="black"
                strokeWidth={2}
                fill={
                  currentDrawingRect.type === "draw-warehouse"
                    ? "rgba(0,0,255,0.05)"
                    : currentDrawingRect.type === "define-zones"
                      ? selectedFunctionalZoneType.color
                      : currentDrawingRect.type === "define-shelf-zones"
                        ? SHELF_ZONE_COLOR
                        : "rgba(0,0,0,0.1)"
                }
                opacity={currentDrawingRect.type === "draw-warehouse" ? 0.1 : 0.4}
              />
              <Text
                text={
                  currentDrawingRect.type === "draw-warehouse"
                    ? `W: ${Math.abs(currentDrawingRect.width)} | H: ${Math.abs(currentDrawingRect.height)}`
                    : currentDrawingRect.type === "define-zones"
                      ? selectedFunctionalZoneType.label
                      : currentDrawingRect.type === "define-shelf-zones"
                        ? "New Shelf Zone"
                        : ""
                }
                x={
                  Math.min(currentDrawingRect.x, currentDrawingRect.x + currentDrawingRect.width) +
                  10
                }
                y={
                  Math.min(currentDrawingRect.y, currentDrawingRect.y + currentDrawingRect.height) +
                  10
                }
                fontSize={16}
                fill={currentDrawingRect.type === "define-shelf-zones" ? "white" : "black"}
              />
            </>
          )}
        </Layer>
      </Stage>
    </>
  );
}

export default WarehouseCanvas;