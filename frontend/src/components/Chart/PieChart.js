import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
      data: [2478, 5267, 734, 784, 433],
    },
  ],
};
const options = {
  legend: {
    position: 'right',
    display: true,
    labels: {
      fontColor: 'rgb(255, 99, 132)',
    },
  },
};

export default function SimpleBarChart() {
  return <Pie data={data} options={options} />;
}
