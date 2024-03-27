import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser, getUsers } from "../../services/users";
import Pagination from "../shared/pagination";
import { paginate } from "../../utils/paginate";
import FilterGrid from "../shared/filterGrid";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({ users: getUsers() });
  }

  handleDelete = (user) => {
    const users = this.state.users.filter((u) => u._id !== user._id);
    this.setState({ users });
  };

  handleEdit = (user) => {
    this.setState({ users: getUser(user._id) });
  };

  handleUser = (staff) => {
    console.log("handle User event");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, users: allUsers } = this.state;

    if (count === 0) return <p>There are no users in the database.</p>;

    const users = paginate(allUsers, currentPage, pageSize);

    return (
      <React.Fragment>
        <hr />
        <FilterGrid />
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>User</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Email}</td>
                  <td>{user.ContactNumber}</td>
                  <td>
                    <a
                      className="btn btn-outline-info btn-sm"
                      onClick={() => this.handleUser(user.Staff)}
                      href="#"
                    >
                      Info
                    </a>
                  </td>
                  <td>
                    <Link to="/admin/users-accounts/id">
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
