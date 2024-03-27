import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Title, Tooltip);

const SalesReport = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            title: {
                display: true,
                text: 'Sales by Order Type',
                font: {
                    size: '20',
                    weight: 'normal'
                }
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Delivery',
                data: [30.83, 45.38, 86.36, 76.15, 87.17, 65.57, 75.10],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Pickup',
                data: [89.62, 72.21, 55.97, 72.73, 93.98, 48.47, 98.62],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (

        <Line options={options} data={data} />
  
    )
}

export default SalesReport