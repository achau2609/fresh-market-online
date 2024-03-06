import * as React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Users from "../../components/users";
import "../../css/Admin.css";

function UsersAccounts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Sidebar activeItem={2} />
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <h3>Users List</h3>
                </div>
                <div className="col-4">
                  <select
                    style={{ Width: "100%" }}
                    className="form-select mb-3"
                    aria-label="Large select example"
                  >
                    <option selected>Choose an option</option>
                    <option value="1">Staffs</option>
                    <option value="2">Customers</option>
                  </select>
                </div>
                <div className="col-4">
                  <Link to="/admin/users-accounts/add-new">
                    <button type="button" style={{ float: "right", width: "100px" }} className="btn btn-success mb-3">
                      {" "}
                      Add User
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Users />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersAccounts;
