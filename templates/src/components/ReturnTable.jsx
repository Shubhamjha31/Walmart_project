import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/returnTable.css';

const columns = [
  { field: 'id', headerName: 'Pallet ID', width: 120 },
  { field: 'date', headerName: 'Return Date', width: 140 },
  { field: 'reason', headerName: 'Reason', width: 250 },
  { field: 'quantity', headerName: 'Qty', type: 'number', width: 100 },
  { field: 'handledBy', headerName: 'Handled By', width: 150 },
];

const rows = [
  { id: 'PAL-101', date: '2025-07-08', reason: 'Damaged in transit', quantity: 10, handledBy: 'Ravi' },
  { id: 'PAL-102', date: '2025-07-09', reason: 'Incorrect item', quantity: 5, handledBy: 'Anjali' },
  { id: 'PAL-103', date: '2025-07-10', reason: 'Customer rejection', quantity: 8, handledBy: 'Suman' },
  { id: 'PAL-104', date: '2025-07-11', reason: 'Expired product', quantity: 3, handledBy: 'Ravi' },
];

export default function ReturnTable() {
  return (
    <div className="return-table">
      <h3>Returned Pallets</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        className="mui-table"
      />
    </div>
  );
}
