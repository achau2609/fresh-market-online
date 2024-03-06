import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCollection, getCollections } from "../services/databaseLists";
import Pagination from "./shared/pagination";
import { paginate } from "../utils/paginate";
import FilterGrid from "./shared/filterGrid";

class DatabaseLists extends Component {
  state = {
    collections: [],
    currentPage: 1,
    pageSize: 5,
  };

  componentDidMount() {
    this.setState({ collections: getCollections() });
  }

  handleDelete = (collection) => {
    const collections = this.state.collections.filter(
      (u) => u._id !== collection._id
    );
    this.setState({ collections });
  };

  handleColection = (staff) => {
    console.log("handle collection event");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.collections;
    const { pageSize, currentPage, collections: allCollections } = this.state;

    if (count === 0) return <p>There are no collections in the database.</p>;

    const collections = paginate(allCollections, currentPage, pageSize);

    return (
      <React.Fragment>
        <hr />
        <FilterGrid />
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Object Name</th>
                <th>Object Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {collections.map((collection) => (
                <tr key={collection._id}>
                  <td>{collection.ObjectName}</td>
                  <td>{collection.Description}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(collection)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                    <span>&nbsp;</span>
                    <Link to="/admin/manage-db/id">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Manage
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-center">
            Showing {count} collections in the database.
          </p>
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

export default DatabaseLists;
