import React, { useEffect, useState } from "react";
import MyAccountNavBar from "../../component/MyAccountNavBar";
import Input from "../../component/shared/input";
import axios from "axios";
import AddressInput from "../../component/shared/addressInput";

const MyAccount = () => {
  const user_id = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phoneNumber: "",
    address: [{ addressLine: "", city: "", state: "", zip: "" }],
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-144-3-89.us-east-2.compute.amazonaws.com:8080/api/users/${user_id}`
      )
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .patch(
          `http://ec2-3-144-3-89.us-east-2.compute.amazonaws.com:8080/api/users/${user_id}`,
          formData
        )
        .then((res) => {
          setFormData(res.data);
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

  const handleAddressChange = (newAddress) => {
    setFormData({ ...formData, address: newAddress });
  };

  return (
    <div className="container w-50">
      <MyAccountNavBar active={2} />

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active mt-5 mb-3"
          id="nav-account"
          role="tabpanel"
          aria-labelledby="nav-account-tab"
          tabIndex="0"
        >
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-4">
                <Input
                  name="email"
                  type="text"
                  label="Email"
                  isReadOnly={true}
                  isDisable={true}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <Input
                  name="firstName"
                  type="text"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <Input
                  name="lastName"
                  type="text"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <Input
                  name="birthDate"
                  type="Date"
                  label="Birth Date"
                  value={formatDate(formData.birthDate)}
                  onChange={handleChange}
                />
              </div>
              <div className="col-4">
                <Input
                  name="phoneNumber"
                  type="text"
                  label="phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <br />
              <h5>Address Information</h5>
              <div className="col-12">
                <AddressInput
                  value={formData.address}
                  onAddressChange={handleAddressChange}
                />
              </div>
              <br />
              <div className="col-12">
                <span className="float-end">
                  <button type="submit" className="btn btn-custom-primary">
                    Save Changes
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
