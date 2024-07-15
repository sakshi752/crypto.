import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData }) => {
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', 
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', 
        },
      },
    },
  };

  return (
    <div className='w-full'>
      <Line data={chartData} options={options}  className='w-full'/>
    </div>
  );
};

export default LineChart;
