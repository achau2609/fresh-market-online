import * as React from "react";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import ManageCollection from "../../component/manageCollection";
import "../../css/admin.css";

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
