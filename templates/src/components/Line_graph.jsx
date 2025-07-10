import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' , 'june' , 'july', 'august' ,'sept'],
  datasets: [
    {
      label: 'Page Views',
      data: [5000, 7500, 8000, 6000, 9000 , 2000 , 3500 , 6000, 4000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill
      borderColor: 'rgba(75, 192, 192, 1)',       // Line color
      fill: true, // Enables area fill
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Page Views',
      },
    },
  },
};

export default function AreaChart() {
  return <Line data={data} options={options} />;
}