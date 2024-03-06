import * as React from "react";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import DatabaseLists from "../../component/databaseLists";

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
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h3>Database Object Lists</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <DatabaseLists />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDb;
