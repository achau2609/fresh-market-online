import StaffMenu from '../../component/Staff/StaffMenu';
import StaffHeader from '../../component/Staff/StaffHeader';
import React from 'react';
import ProductDetail from '../../component/Staff/ProductDetail';

const ProductDetailPage = () => {
  return (
    <div className='staff'>
        <StaffHeader />
        <div class="container text-center">
            <div class="row">
                <div class="col-3">
                    <StaffMenu activeItem={3} />
                </div>
                <div class="col-9">
                    <ProductDetail />
                </div>
            </div>
        </div>       
    </div>
  )
}

export default ProductDetailPage