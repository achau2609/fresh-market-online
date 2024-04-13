import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Pagination from "../shared/pagination";
import { paginate } from "../../utils/paginate";
import SearchBox from "../shared/searchBox";
import Select from "../shared/select";
import axios from "axios";
import { apiUrl } from "../../server-config";
import FormatDate from "../../utils/formatDate";
import DropDowns from "../shared/dropDowns";

class Users extends Component {
  state = {
    users: [],
    pageSizes: [],
    userTypes: [
      { name: "All Users" },
      { _id: 0, name: "Staff" },
      { _id: 1, name: "Customer" },
    ],
    selectedUserType: "",
    searchQuery: "",
    currentPage: 1,
    pageSize: 4,
    selectedPageSize: null,
  };

  async componentDidMount() {
    const pageSizes = [{ _id: "", name: "All Rows" }];

    await axios
      .get(`${apiUrl}/api/users`)
      .then((res) => {
        this.setState({
          users: res.data.filter((d) => !(d.isAdmin === true)),
          pageSizes,
        });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = async (user) => {
    const pageSizes = [{ _id: "", name: "All Rows" }];

    await axios
      .delete(`${apiUrl}/api/users/${user._id}`)
      .then((res) => {
        alert(res.data.message);
        this.setState({
          users: this.state.users.filter((u) => u._id !== user._id),
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  handleEdit = async (user) => {
    Navigate(`/edit/${user._id}`);
  };

  handleUser = (staff) => {
    console.log("handle User event");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedPageSize: null,
      currentPage: 1,
    });
  };

  handleUserTypeSelect = (selectedItem) => {
    this.setState({ selectedUserType: selectedItem, currentPage: 1 });
  };

  handlePageSizeSelect = (pageSize) => {
    this.setState({
      selectedPageSize: pageSize,
      searchQuery: "",
      currentPage: 1,
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedPageSize,
      searchQuery,
      users: allUsers,
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter((u) =>
        u.FirstName.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const users = paginate(currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const {
      pageSize,
      currentPage,
      selectedUserType,
      searchQuery,
      users: allUsers,
    } = this.state;

    if (count === 0) return <p>There are no users in the database.</p>;

    let filtered = allUsers;
    if (selectedUserType.name === "Staff") {
      filtered = allUsers.filter((u) => u.isStaff === true);
    } else if (selectedUserType.name === "Customer") {
      filtered = allUsers.filter(
        (u) => u.isStaff === false || u.isStaff === undefined
      );
    } else {
      filtered = allUsers;
    }

    const users = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <hr />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <DropDowns
              items={this.state.userTypes}
              selectedItem={this.state.selectedUserType}
              onItemSelect={this.handleUserTypeSelect}
              value="User Types"
            />
          </div>
          <div className="col-md-8 col-sm-12 mb-3">
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
          </div>
          <div className="col-md-2 col-sm-12 mb-3">
            <Select />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Birth of date</th>
                <th>Contact Number</th>
                <th>User Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.birthDate ? FormatDate(user.birthDate) : ""}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {user.isStaff ? (
                      <span className="badge text-bg-secondary">Staff</span>
                    ) : (
                      <span className="badge text-bg-info">Customer</span>
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/edit/${user._id}`}>
                      <button
                        type="button"
                        onClick={() => this.handleEdit(user)}
                        className="btn btn-outline-warning btn-sm"
                      >
                        Edit
                      </button>
                    </Link>
                    <span>&nbsp;</span>
                    <button
                      type="button"
                      onClick={() => this.handleDelete(user)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center">
            Showing {filtered.length} users in the database.
          </p>
        </div>
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Users;
