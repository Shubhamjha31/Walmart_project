import * as React from 'react';
import { LineChart } from '@mui/x-charts';
import { warehouseSalesData, salesFormatter } from '../components/component_assets/salesData';

export default function WarehouseSalesChart() {
  return (
    <LineChart
      dataset={warehouseSalesData}
      xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'sales',
          label: 'Monthly Sales',
          valueFormatter: salesFormatter,
          color: '#4CAF50',
        },
      ]}
      height={300}
      sx={{ width: '100%' }}
    />
  );
}
