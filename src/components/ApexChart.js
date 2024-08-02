import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import '../App.css';

const ApexChart = () => {
  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false, 
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth',
      colors: ['#000'],
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      tickAmount: 12,
      labels: {
        style: {
          colors: '#333',
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
    yaxis: {
      show: false,
      title: {
        text: '',
        style: {
          color: '#333',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif'
        }
      },
      labels: {
        formatter: (value) => `$${value}`,
      },
    },
    title: {
      text: '',
      align: 'left',
      style: {
        fontSize: '16px',
        color: 'black',
        fontFamily: '"Urbanist", sans-serif',
        fontWeight: 500,
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['black'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    grid: {
      show: false, 
    },
    tooltip: {
      x: {
        format: 'MMM'
      },
      y: {
        formatter: (value) => `$${value}`
      }
    },
    markers: {
      size: 0,
    },
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.2,
    },
  });

  const [series] = useState([{
    name: 'Sales',
    data: [30, 25, 27, 19, 23, 30, 25, 27, 29, 23, 30, 50]
  }]);

  return (
    <div>
      <div id="chart">
        <ApexCharts options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
