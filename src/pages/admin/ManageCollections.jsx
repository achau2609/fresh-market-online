import * as React from "react";
import Header from "../../component/admin/header";
import Sidebar from "../../component/admin/sidebar";
import ManageCollection from "../../component/admin/manageCollection";

function ManageCollections() {
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
                <div className="col-12">
                  <ManageCollection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCollections;
