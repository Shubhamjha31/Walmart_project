export const warehouseSalesData = [
  { month: 'Jan', sales: 20000 },
  { month: 'Feb', sales: 25000 },
  { month: 'Mar', sales: 31000 },
  { month: 'Apr', sales: 28000 },
  { month: 'May', sales: 35000 },
  { month: 'Jun', sales: 37000 },
  { month: 'Jul', sales: 39000 },
  { month: 'Aug', sales: 36000 },
  { month: 'Sep', sales: 32000 },
  { month: 'Oct', sales: 41000 },
  { month: 'Nov', sales: 42000 },
  { month: 'Dec', sales: 45000 },
];

export const salesFormatter = (value) => `₹${(value / 1000).toFixed(1)}K`;
