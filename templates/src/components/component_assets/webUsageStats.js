const rawOrders = [
  { label: 'Pending Orders ', value: 120 },
  { label: 'Completed Orders ', value: 340 },
  { label: 'Delayed Orders ', value: 25 }
];

const totalOrders = rawOrders.reduce((sum, item) => sum + item.value, 0);

export const warehouseOrders = rawOrders.map(item => ({
  label: item.label,
  value: Number(((item.value / totalOrders) * 100).toFixed(2)) // percentage
}));

export const valueFormatter = (item) => `${item.value}`;