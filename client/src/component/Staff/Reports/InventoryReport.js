import React from 'react';
import { Link } from 'react-router-dom';

const InventoryReport = () => {
    const products = [{
        productName: 'Apples',
        inventory: 100,
        unitsold: 50,
        picture: 'https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png'
    }, {
        productName: 'Free-range Eggs',
        inventory: 39,
        unitsold: 76,
        picture: 'https://grayridge.com/conestogafarms/wp-content/uploads/2017/01/freerangeedit.jpg'
    }, {
        productName: 'Bananas',
        inventory: 99,
        unitsold: 78,
        picture: 'https://www.superhealthykids.com/wp-content/uploads/2022/04/ripe-bananas.jpg'
    }
    ]

    return (
        <div className='table-responsive'>
            <table className="table table-striped table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Product Name</th>
                        <th>Inventory</th>
                        <th>Unit sold</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr>
                            <td>
                                <Link to='/staff/products/0001'>{product.productName} </Link>
                            </td>
                            <td>{product.inventory}</td>
                            <td>{product.unitsold}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryReport