import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Admin.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

function ManageDb() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Sidebar activeItem={3} />
        </div>
        <div className="col-sm-12 col-md-9">
          <div class="card">
            <div class="card-body">
              <h3>Manage Database</h3>
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDb;
