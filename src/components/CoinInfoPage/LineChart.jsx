// LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, plugins } from 'chart.js';
import { display } from '@mui/system';

const LineChart = ({ chartData }) => {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false
    }
  }
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
