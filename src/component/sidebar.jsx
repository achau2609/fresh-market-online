import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Sidebar extends Component {
  render(props) {
    return (
      <div
        className="bg-body-tertiary border rounded-3 d-flex flex-column flex-shrink-0 p-3 bg-light"
        // style={{ height: "500px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin">
              <a
                className={
                  this.props.activeItem === 1
                    ? "nav-link active"
                    : "nav-link link-dark"
                }
                aria-current="page"
              >
                <svg
                  className="bi me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
                </svg>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link to="/admin/users-accounts">
              <a
                className={
                  this.props.activeItem === 2
                    ? "nav-link active"
                    : "nav-link link-dark"
                }
              >
                <svg
                  className="bi me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  ></path>
                </svg>
                Users Accounts
              </a>
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-db">
              <a
                type="button"
                className={
                  this.props.activeItem === 3
                    ? "nav-link active"
                    : "nav-link link-dark"
                }
              >
                <svg
                  className="bi me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"></path>
                </svg>
                Manage Database
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
