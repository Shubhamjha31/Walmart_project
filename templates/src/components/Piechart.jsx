import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { warehouseOrders, valueFormatter } from './assets/webUsageStats';
import '../styles/piechart.css';

export default function PieChartOrder() {
  return (
    <div className='sale-cards'>
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
    </div>
    
    
  );
}