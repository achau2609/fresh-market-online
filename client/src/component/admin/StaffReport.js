import React, { useState } from "react";
import SalesReport from "../Staff/Reports/SalesReport";
import InventoryReport from "../Staff/Reports/InventoryReport";
import ProductReport from "../Staff/Reports/ProductReport";

const StaffReport = () => {

  const [timeframe, setTimeFrame] = useState('1');
  const [startDate, setStartDate] = useState("2018-07-22");
  const [endDate, setEndDate] = useState("2018-07-22");

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-auto">
          <label>Timeframe</label>
          <select className="form-select" value={timeframe} onChange={e=>setTimeFrame(e.target.value)}>
            <option value="1">
              Monthly
            </option>
            <option value="2">Yearly</option>
          </select>
        </div>
        <div className="col-auto">
          <label htmlFor="start-date">From Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            className="form-control"
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="end-date">To Date</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            className="form-control"
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Sales
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Inventory
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Products
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <SalesReport />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <InventoryReport />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <ProductReport />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StaffReport;
