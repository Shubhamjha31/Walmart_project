import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { warehouseOrders, valueFormatter } from './component_assets/webUsageStats';

export default function PieChartOrder() {
  return (
        <div className='pie-chart'>
          <PieChart
            series={[
                {
                    data: warehouseOrders,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    valueFormatter,
                },
                ]}
            height={300}
            width={300}
          />
        </div>
    
    
  );
}