import React from 'react'
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, Colors
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const ProductReport = () => {

    const productSales = [{
        ProductName: 'Apples',
        UnitPrice: 5.99,
        Sales: 46.29
    }, {
        ProductName: 'Oranges',
        UnitPrice: 1.15,
        Sales: 31.85
    }, {
        ProductName: 'Banana',
        UnitPrice: 1.99,
        Sales: 31.6
    }, {
        ProductName: 'Chips',
        UnitPrice: 3.49,
        Sales: 12.13
    }, {
        ProductName: 'Milk',
        UnitPrice: 2.49,
        Sales: 10.64
    },]

    const data = {
        labels: productSales.map((e) => e.ProductName),
        datasets: [
            {
                label: 'Best Sellers',
                data: productSales.map(e => e.Sales),
                //        backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            title: {
                display: true,
                text: 'Top 5 best selling products',
                font: {
                    size: 20,
                    weight: 'normal'
                }
            },
            colors: {
                enabled: true
            }
        },
    }

    return (
        <div className='container'>

            <div className='row align-items-center'>
                <div className='col-auto col-md-6'>
                    <Pie options={options} data={data} />
                </div>

                <div className='col-auto col-md-6'>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped-columns">
                            <thead className="table-light">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productSales.map((product) => 
                                <tr key={product.ProductName}>
                                        <td>{product.ProductName}</td>
                                        <td>{product.UnitPrice}</td>
                                        <td>{product.Sales}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ProductReport