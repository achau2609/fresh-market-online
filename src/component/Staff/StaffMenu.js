import React from 'react'
import { Link } from 'react-router-dom';

const StaffMenu = (props) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/staff" className={props.activeItem === 1 ? "nav-link active" : "nav-link link-dark"} aria-current="page">
            Dashboard
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/staff/orders" className={props.activeItem === 2 ? "nav-link active" : "nav-link link-dark"}>
            Orders
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/staff/products" className={props.activeItem === 3 ? "nav-link active" : "nav-link link-dark"}>
            Products
          </Link>
        </li>
        <hr />
        <li>
        <Link to="/staff/categories" className={props.activeItem === 4 ? "nav-link active" : "nav-link link-dark"}>
            Categories
          </Link>
        </li>
        <hr />
        <li>
        <Link to="/staff/reports" className={props.activeItem === 5 ? "nav-link active" : "nav-link link-dark"}>
            Reports
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default StaffMenu;