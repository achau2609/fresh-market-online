import React from "react";
import { Link } from 'react-router-dom';

const FilterGrid = () => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-2 col-sm-12">
          <select
            style={{ Width: "100%" }}
            className="form-select mb-3"
            aria-label="Large select example"
          >
            <option value="0">All rows</option>
            <option value="1">5</option>
            <option value="2">10</option>
            <option value="3">15</option>
          </select>
        </div>
        <div className="col-md-8 col-sm-12 mb-3">
          <label for="inputPassword2" className="visually-hidden">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Type to search..."
          />
        </div>
        <div className="col-md-2 col-sm-12">
          <Link to="/admin/users-accounts/add-new"><button type='button' className='btn btn-success mb-3'> Add User</button></Link>
        </div>
      </form>
    </div>
  );
};

export default FilterGrid;
