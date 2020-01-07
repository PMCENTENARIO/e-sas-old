import React from 'react';
import { Bar } from 'react-chartjs-2';

const densityData = {
  label: 'Density of Planet (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: 'rgba(0, 99, 132, 0.6)',
  borderColor: 'rgba(0, 99, 132, 1)',
  yAxisID: 'y-axis-density',
};

const gravityData = {
  label: 'Gravity of Planet (m/s2)',
  data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
  backgroundColor: 'rgba(99, 132, 0, 0.6)',
  borderColor: 'rgba(99, 132, 0, 1)',
  yAxisID: 'y-axis-gravity',
};

const planetData = {
  labels: [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ],
  datasets: [densityData, gravityData],
};

const chartOptions = {
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 0.6,
      },
    ],
    yAxes: [
      {
        id: 'y-axis-density',
      },
      {
        id: 'y-axis-gravity',
      },
    ],
  },
  legend: {
    position: 'bottom',
    display: false,
    labels: {
      fontColor: 'rgb(255, 99, 132)',
    },
  },
};

export default function SimpleBarChart() {
  return <Bar data={planetData} options={chartOptions} />;
}
