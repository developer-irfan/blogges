import React from "react";
import { NavLink } from "react-router-dom";
import "./404.css";
import error_img from "../../Assets/Images/404.gif";
const Error404 = () => {
  return (
    <div className="view" style={{ height: "600px" }}>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="wow fadeInRight mb-5" data-wow-delay="0.2s">
                  <img
                    src={error_img}
                    alt=""
                    className="img-fluid success_img "
                    style={{ width: "250px" }}
                  />
                </div>

                <div className="contant_box_404 ml-xl-5 ml-lg-5">
                  <h3 className="h2 ml-xl-5 ml-lg-5 ">
                    Look like you're lost
                  </h3>

                  <p className="ml-xl-5 ml-lg-5">
                    the page you are looking for not avaible!
                  </p>

                  <NavLink
                    exact
                    to="/"
                    className="btn btn-danger link_404 ml-xl-5 ml-lg-5"
                  >
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
