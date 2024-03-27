import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getUser, updateUser } from "../../services/users";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/admin/header";
import Sidebar from "../../component/admin/sidebar";
import Footer from "../../component/admin/footer";
import Input from "../../component/shared/input";
import TextAreaInput from "../../component/shared/textAreaInput";

function UpdateUser() {
  const { id } = useParams();
  const [formData, setFormData] = useState(getUser("65d6129033192b070a1a18cd"));
  
  const navigate = useNavigate();
  useEffect(() => {
    try {
      // Update user in memory
      //setFormData(getUser("65d6129033192b070a1a18cd"));
     
      // Get user based on Id from server to show in form
      /*axios
        .get("http://localhost:8080/api/user/" + id)
        .then((res) => {
          console.log(res);
          setUser(res.data[0]);
s        })
        .catch((err) => console.log(err));*/

    } catch (error) {
      console.error("Error adding user: ", error);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // update manually
    updateUser(formData);
    navigate("/admin/users");

    // Update user in database
      /*axios
        .put("http://localhost:8080/api/user/" + id, formData)
        .then((res) => {
          console.log(res);
          navigate("/admin/users");
s        })
        .catch((err) => console.log(err));*/

    try {

    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

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
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <Input
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="Sample: yourname@outlook.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="password"
                      type="password"
                      label="Password"
                      value={formData.password}
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
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
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      name="birthDate"
                      type="date"
                      label="Birth Date"
                      placeholder="mm/dd/yyyy"
                      value={formData.birthDate}
                      onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <TextAreaInput
                    name="address"
                    type="text"
                    label="Address"
                    value={formData.address}
                    onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
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
                    <button className="btn btn-success">Update</button>
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

export default UpdateUser;
