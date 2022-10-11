import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <NavLink to="/author-dashboard">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li className="has-subnav">
            <NavLink to="/author-dashboard/create-blog">
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">Add Blog</span>
            </NavLink>
          </li>
          <li className="has-subnav">
            <NavLink to="/author-dashboard/manage-blogs">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">Manage Blogs</span>
            </NavLink>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
