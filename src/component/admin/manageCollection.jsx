import React, { Component } from "react";
import { Link } from "react-router-dom";

class ManageCollection extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Manage Selected Object</h5>
        <div className="card-body">
          <h5 className="card-title mb-3">Object Id: 101</h5>
          <div className="card-text">
            <div className="row mb-3">
              <div className="col-6 mb-3">
                <label for="objectName" class="form-label">
                  Object Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="objectName"
                  placeholder="Object Name"
                />
              </div>
              <div className="col-12 mb-3">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
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

export default ManageCollection;
