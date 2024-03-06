import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditUser extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Edit Selected User</h5>
        <div className="card-body">
          <h5 className="card-title">User Id: 101</h5>
          <p className="card-text">
            <div className="row mb-3">
              <div className="col-6">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="col-6">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="col-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label for="contactNumber" class="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="contactNumber"
                  placeholder="+1(604-123-5555)"
                />
              </div>
              <div className="col-6">
                <label for="birthdate" class="form-label">
                  First Name
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="birthdate"
                  placeholder="Birth Date"
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Address
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </p>
          <Link to="/admin/users-accounts">
            <button type="button" className="btn btn-secondary">
              Back to List
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            style={{ float: "right", width: "100px" }}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default EditUser;
