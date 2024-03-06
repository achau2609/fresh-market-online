import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import NewUser from '../../components/newUser'
import "../../css/Admin.css";

function AddNewUser() {
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
                  <NewUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;