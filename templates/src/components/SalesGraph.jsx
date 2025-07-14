import React from 'react';
import { LineChart } from '@mui/x-charts';

export default function WarehouseSalesChart({ chartData = [], seriesConfig, height = 300 }) {
  if (!seriesConfig || !Array.isArray(seriesConfig) || seriesConfig.length === 0) {
    console.error('Invalid or empty seriesConfig passed to LineChart!');
    return <div>Error: No data to display.</div>;
  }

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

