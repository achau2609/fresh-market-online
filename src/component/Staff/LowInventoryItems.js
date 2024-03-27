import React, { useState } from 'react'

const LowInventoryItems = () => {

    const [products] = useState([{
        ProductName: 'Brocoli Crown',
        Brand: 'ABC',
        Price: 5.14,
        Quantity: 8,
        Picture: 'https://assets.shop.loblaws.ca/products/21121560001/b1/en/front/21121560001_front_a07.png'
    }, {
        ProductName: 'Whole Cremini Mushrooms',
        Brand: 'ABC',
        Price: 14.53,
        Quantity: 28,
        Picture: 'https://assets.shop.loblaws.ca/products/20761372/b1/en/front/20761372_front_a07.png',
        DiscountPrice: 10.36
    }])

    return (
        <div>
            <h4 className='text-start mb-3'>Low Inventory Products</h4>
            {/* Table */}
            <div className='table-responsive'>
                <table className="table table-striped table-hover text-start">
                    <thead className="table-light">
                        <tr>
                            <th>Product</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Remaining Stock</th>
                        </tr>
                    </thead>
                    <tbody className='py-3'>
                        {products.map((product) =>
                            <tr>
                                <td>
                                    <img src={product.Picture} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
                                    {product.ProductName}
                                </td>
                                <td>
                                    {product.Brand}
                                </td>
                                <td className=''>
                                    {product.hasOwnProperty('DiscountPrice') ? <p className='text-danger'>${product.DiscountPrice}</p> : ''}
                                    <p className={product.hasOwnProperty('DiscountPrice') ?'text-decoration-line-through': ''}>${product.Price}</p>
                                </td>
                                <td>{product.Quantity}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className='d-flex justify-content-end'>
                <nav aria-label="Page navigation example" className='border-0'>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default LowInventoryItems