import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { addUser } from "../../services/users";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/admin/header";
import Sidebar from "../../component/admin/sidebar";
import Footer from "../../component/admin/footer";
import Input from "../../component/shared/input";
import TextAreaInput from "../../component/shared/textAreaInput";
import { apiUrl } from '../../server-config';

function AddNewUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phoneNumber: "",
    birthDate: "",
    address: {
      addressLine: "",
      city: "",
      state: [""],
      zip: "",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${apiUrl}/api/users`, formData)
        .then((res) => {
          console.log(res);
          navigate("/admin/users");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <Sidebar activeItem={4} />
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="card">
            <h5 className="card-header">Add New User</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-6">
                    <Input
                      name="firstName"
                      type="text"
                      label="First Name"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <Input
                      name="email"
                      type="email"
                      label="Email Address"
                      isReadOnly={true}
                      isDisable={true}
                      placeholder="Sample: yourname@outlook.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="password"
                      type="password"
                      label="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <Input
                      name="contactNumber"
                      type="text"
                      label="Contact Number"
                      placeholder="e.g +1(234)567-8965"
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="birthDate"
                      type="date"
                      label="Birth Date"
                      placeholder="mm/dd/yyyy"
                      value={formData.birthDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <TextAreaInput
                    name="address"
                    type="text"
                    label="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="row justify-content-between">
                  <div className="col col-md-2">
                    <Link to="/admin/users">
                      <button className="btn btn-secondary">
                        Back to List
                      </button>
                    </Link>
                  </div>
                  <div className="col col-md-2 text-end">
                    <button
                      className="btn btn-success"
                      disabled={
                        formData.email === "" ||
                        formData.firstName === "" ||
                        formData.email === ""
                      }
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
