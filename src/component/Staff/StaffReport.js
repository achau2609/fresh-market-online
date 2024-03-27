import React from 'react'
import SalesReport from './Reports/SalesReport'
import InventoryReport from './Reports/InventoryReport'
import ProductReport from './Reports/ProductReport'

const StaffReport = () => {
    return (
        <div className='container text-start'>
            <div className='row'>
                <div className='col-auto'>
                    <label>Timeframe</label>
                    <select className="form-select">
                        <option selected value="1">Monthly</option>
                        <option value="2">Yearly</option>
                    </select>
                </div>
                <div className='col-auto'>
                    <label htmlFor='start-date'>From Date</label>
                    <input type="date" id="start-date" value="2018-07-22" className='form-control' />
                </div>
                <div className='col-auto'>
                    <label htmlFor='end-date'>To Date</label>
                    <input type="date" id="end-date" value="2018-07-22" className='form-control' />
                </div>
            </div>
            <hr />
            <div className='row'>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sales</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Inventory</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Products</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><SalesReport /></div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><InventoryReport /></div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"><ProductReport /></div>
                </div>
            </div>
        </div>
    )
}

export default StaffReport