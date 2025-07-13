import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import '../styles/Inventory_capacity_chart.css';

const settings = {
  width: 300,
  height: 300,
  value: 60,
};

export default function InventoryCapacityChart() {
    return (
        <div className='capacity-chart' >
            <Gauge
                {...settings}
                cornerRadius="50%"
                sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                fontFamily: "'Inter', 'Roboto', 'Segoe UI', Arial, sans-serif",
                fontWeight: 600,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#52b202',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.text.disabled,
                },
                })}
            />
            <p>60% Inventory is full</p>
        </div>
    )
}