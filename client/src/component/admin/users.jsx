import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Pagination from "../shared/pagination";
import { paginate } from "../../utils/paginate";
import SearchBox from "../shared/searchBox";
import Select from "../shared/select";
import axios from "axios";
import { apiUrl } from "../../server-config";
import FormatDate from "../../utils/formatDate";

class Users extends Component {
  state = {
    users: [],
    pageSizes: [],
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
        this.setState({ users: res.data, pageSizes });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (user) => {
    // await axios
    //   .delete(`${apiUrl}/api/users`)
    //   .then((res) => {
    //     this.setState({ users: res.data, pageSizes });
    //   })
    //   .catch((err) => console.log(err));

    const users = this.state.users.filter((u) => u._id !== user._id);
    this.setState({ users });
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
    const { pageSize, currentPage, searchQuery, users: allUsers } = this.state;

    if (count === 0) return <p>There are no users in the database.</p>;

    const users = paginate(allUsers, currentPage, pageSize);

    return (
      <React.Fragment>
        <hr />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <Select />
          </div>
          <div className="col-md-10 col-sm-12 mb-3">
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
          <p className="text-center">Showing {count} users in the database.</p>
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Users;
