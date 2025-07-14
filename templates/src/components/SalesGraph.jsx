import * as React from 'react';
import { LineChart } from '@mui/x-charts';
import { warehouseSalesData , salesFormatter } from './component_assets/salesData'; 
export default function WarehouseSalesChart({ chartData, lineColor , valueFormatter }) {


  const datasetToUse = chartData || warehouseSalesData;

  return (
    <LineChart
      dataset={datasetToUse}
      xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'sales',
          label: 'Monthly Sales',
          valueFormatter: valueFormatter || salesFormatter,
          color: lineColor,
        },
      ]}
      height={300}
      sx={{ width: '100%' }}
    />
  );
}