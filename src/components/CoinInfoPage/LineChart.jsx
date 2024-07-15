import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, 
  CategoryScale, //x axis
  LinearScale, //y axis 
  PointElement, 
  LineElement,
  Title, Tooltip,  scales } from 'chart.js';


// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,

);

const LineChart = ({ chartData }) => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='w-[90%] md:w-full  md:h-full'>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
