import React from 'react';
import { LineChart } from '@mui/x-charts';

export default function WarehouseSalesChart({ chartData, seriesConfig, height = 300 }) {
  return (
    <LineChart
      dataset={chartData}
      xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
      series={seriesConfig}
      height={height}
      sx={{ width: '100%' }}
    />
  );
}
