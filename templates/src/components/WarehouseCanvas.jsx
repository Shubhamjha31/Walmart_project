
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const ZONE_TYPES = [
  { label: "Staging Area", color: "#facc15" },
  { label: "Inbound", color: "#22c55e" },
  { label: "Outbound", color: "#3b82f6" },
  { label: "Packaging", color: "#ec4899" },
  { label: "Returns/Damaged", color: "#ef4444" },
  { label: "Free Space", color: "#a3a3a3" },
];

function getShelfColor(stock) {
  if (stock > 80) return '#22c55e';
  if (stock > 40) return '#facc15';
  if (stock > 0) return '#f97316';
  return '#e5e7eb';
}

function WarehouseCanvas() {
  const [warehouse, setWarehouse] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [startPos, setStartPos] = useState(null);

  const [zones, setZones] = useState([]);
  const [selectedZoneType, setSelectedZoneType] = useState(ZONE_TYPES[0]);
  const [drawingZone, setDrawingZone] = useState(false);
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(null);

  const [gridRows, setGridRows] = useState(3);
  const [gridCols, setGridCols] = useState(4);
  const [isCreatingZone, setIsCreatingZone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCreatingZone(false);
        setSelectedZoneIndex(null);
        setDrawing(false);
        setDrawingZone(false);
        setStartPos(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseDown = (e) => {
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();

    if (selectedZoneIndex !== null) return;

    if (!warehouse) {
      setStartPos({ x, y });
      setDrawing(true);
    } else if (isCreatingZone) {
      setStartPos({ x, y });
      setDrawingZone(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!startPos) return;
    const { x, y } = e.target.getStage().getPointerPosition();

    const width = x - startPos.x;
    const height = y - startPos.y;

    if (drawing) {
      setWarehouse({ x: startPos.x, y: startPos.y, width, height });
    } else if (drawingZone) {
      const tempZones = [...zones];
      tempZones[tempZones.length - 1] = {
        ...selectedZoneType,
        x: startPos.x,
        y: startPos.y,
        width,
        height,
      };
      setZones(tempZones);
    }
  };

  const handleMouseUp = () => {
    if (drawing && warehouse && startPos) {
      setDrawing(false);
      setZones([
        ...zones,
        {
          ...selectedZoneType,
          x: startPos.x,
          y: startPos.y,
          width: warehouse.width,
          height: warehouse.height,
        },
      ]);
      setWarehouse(null);
    } else if (drawingZone) {
      setDrawingZone(false);
    }
  };

  const handleStageClick = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    for (let i = zones.length - 1; i >= 0; i--) {
      const z = zones[i];
      if (x >= z.x && x <= z.x + z.width && y >= z.y && y <= z.y + z.height) {
        setSelectedZoneIndex(i);
        setIsCreatingZone(false);
        return;
      }
    }
    setSelectedZoneIndex(null);
  };

  const handleGenerateGrid = (e) => {
    e.preventDefault();
    const zone = zones[selectedZoneIndex];
    const newShelves = [];

    const cellWidth = zone.width / gridCols;
    const cellHeight = zone.height / gridRows;

    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        newShelves.push({
          row,
          col,
          x: zone.x + col * cellWidth,
          y: zone.y + row * cellHeight,
          w: cellWidth,
          h: cellHeight,
          stock: Math.floor(Math.random() * 100),
        });
      }
    }

    const updatedZones = [...zones];
    updatedZones[selectedZoneIndex] = {
      ...zone,
      shelves: newShelves,
    };

    setZones(updatedZones);
    setSelectedZoneIndex(null);
  };

  return (
    <>
      <div style={{ padding: '10px', background: '#eee' }}>
        {ZONE_TYPES.map((type) => (
          <button
            key={type.label}
            style={{
              marginRight: 10,
              backgroundColor: selectedZoneType.label === type.label ? type.color : '#fff',
              border: '1px solid #ccc',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
            onClick={() => {
              setSelectedZoneType(type);
              setIsCreatingZone(true);
            }}
          >
            {type.label}
          </button>
        ))}
      </div>

      {selectedZoneIndex !== null && (
        <div style={{ padding: 10, background: '#ddd' }}>
          <h3>Configure Shelves for: {zones[selectedZoneIndex].label}</h3>
          <form onSubmit={handleGenerateGrid}>
            <input
              type="number"
              placeholder="Rows"
              value={gridRows}
              onChange={(e) => setGridRows(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Cols"
              value={gridCols}
              onChange={(e) => setGridCols(parseInt(e.target.value))}
            />
            <button type="submit">Generate Grid</button>
          </form>
        </div>
      )}

      <Stage
        width={window.innerWidth}
        height={window.innerHeight - 50}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleStageClick}
        style={{ background: '#f0f0f0' }}
      >
        <Layer>
          {warehouse && (
            <>
              <Rect
                x={warehouse.x}
                y={warehouse.y}
                width={warehouse.width}
                height={warehouse.height}
                stroke="black"
                strokeWidth={2}
                fill="rgba(0,0,255,0.05)"
              />
              <Text
                text={`W: ${Math.abs(warehouse.width)} | H: ${Math.abs(warehouse.height)}`}
                x={warehouse.x + 10}
                y={warehouse.y + 10}
                fontSize={16}
                fill="black"
              />
            </>
          )}

          {zones.map((zone, i) => (
            <React.Fragment key={i}>
              <Rect
                name="zone"
                x={zone.x}
                y={zone.y}
                width={zone.width}
                height={zone.height}
                fill={zone.color}
                opacity={0.4}
                stroke={selectedZoneIndex === i ? 'black' : '#000'}
                strokeWidth={selectedZoneIndex === i ? 3 : 1}
              />
              <Text
                text={zone.label}
                x={zone.x + 5}
                y={zone.y + 5}
                fontSize={14}
                fill="black"
              />
              {zone.shelves &&
                zone.shelves.map((shelf, si) => (
                  <Rect
                    key={si}
                    x={shelf.x}
                    y={shelf.y}
                    width={shelf.w}
                    height={shelf.h}
                    fill={getShelfColor(shelf.stock)}
                    stroke="#444"
                    strokeWidth={0.5}
                  />
                ))}
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </>
  );
}

export default WarehouseCanvas;