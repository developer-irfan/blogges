import React from "react";
import "./TopBar.css";
import irfan from "../../../../Assets/Images/irfan.jpg"
import { NavLink } from "react-router-dom";
export default function TopBar() {
  return (
    <div className="topbar">
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark pb-2">
      <NavLink
        to="/dashboard"
        className="navbar-brand"
        style={{ fontWeight: "bold", paddingLeft:"100px" }}
      >
       Admin
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fas fa-envelope-open"></i> Query Recieved
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <i className="fas fa-user"></i> Profile{" "} */}
              <img src={irfan} width="23" height="23" class="rounded-circle" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-info"
              aria-labelledby="navbarDropdownMenuLink-4"
            >
              <NavLink to="/author-dashboard/profile" className="dropdown-item">
                My account
              </NavLink>
              <NavLink to="/author-dashboard/logout" className="dropdown-item">
                Logout
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

