import React from "react";
import "./TopNavbar.css";
import { NavLink } from "react-router-dom";

//main function
const Navbar = () => {
  let logo = "<Blogee />";

  //return statement
  return (
    <>
      <div
        className="main_nav"
        style={{
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <nav className="nav_element">
          <div className="logo">{logo}</div>
          <input type="checkbox" id="click" />
          <label for="click" className="menu-btn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="ul_element">
            <li>
              <NavLink className="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li className="login">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="login">
              <NavLink to="/join">Author</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="content">
      <div>Responsive Navigation Menu Bar Design</div>
      <div>using only HTML & CSS</div>
    </div> */}
    </>
  );
};

export default Navbar;
