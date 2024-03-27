import * as React from "react";
import Header from "../../component/admin/header";
import Sidebar from "../../component/admin/sidebar";

function AdminDashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Sidebar activeItem={1} />
        </div>
        <div className="col-sm-12 col-md-9">
          
          <div class="card">
            <div class="card-body">
              <h3>Admin Dashboard</h3>
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
