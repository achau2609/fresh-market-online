import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Pagination from "../shared/pagination";
import { paginate } from "../../utils/paginate";
import SearchBox from "../shared/searchBox";
import Select from '../shared/select';
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
    pageSizes: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 4,
    selectedPageSize: null
  };

  async componentDidMount() {
    const pageSizes = [{_id:"", name:"All Rows"}];

    await axios.get("http://ec2-3-144-3-89.us-east-2.compute.amazonaws.com:8080/api/users")
      .then(res => {
        this.setState({ users: res.data , pageSizes});
      }).catch(err => console.log(err));    
  }

  handleDelete = (user) => {
    const users = this.state.users.filter((u) => u._id !== user._id);
    this.setState({ users });
  };

  handleEdit = async (user) => {

    await axios.get(`http://ec2-3-144-3-89.us-east-2.compute.amazonaws.com:8080/api/users/${user._id}`)
      .then(res => {
        this.setState({ users: res.data});
      }).catch(err => console.log(err));

    Navigate(`/edit/${user._id}`);
    //this.setState({ users: getUser(user._id) });
  };

  handleUser = (staff) => {
    console.log("handle User event");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedPageSize:null, currentPage: 1 });
  };

  handlePageSizeSelect = pageSize => {
    this.setState({ selectedPageSize: pageSize, searchQuery:"", currentPage: 1 });
  };

  getPagedData = () => {
    const { pageSize, currentPage, selectedPageSize, searchQuery, users: allUsers} = this.state;

    let filtered = allUsers;
    if(searchQuery)
      filtered = allUsers.filter(u=> u.FirstName.toLowerCase().startsWith(searchQuery.toLowerCase()));
      
      const users = paginate(currentPage, pageSize);
      
      return {totalCount: filtered.length, data: users};
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
                <th>Contact Number</th>
                <th>User</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.contactNumber}</td>
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
