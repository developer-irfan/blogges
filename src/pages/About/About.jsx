import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import about_page from "../../Assets/Images/abou.png";
import { about_Data } from "../../Data";

//about function
const About = () => {
  let navigate = useNavigate();

  //moreAbout
  const moreAbout = () => {
    navigate("/blogs");
  };

  //return statemnet
  return (
    <>
      <div className="about_div">
        <header>
          <div className="view" style={{ height: "510px" }}>
            <div className="mask">
              <div className="container h-100">
                <div className="row align-items-center">
                  <div
                    className="col-md-6 wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <h3 className="mb-4 header_title pt-lg-5">
                      {about_Data.aboutTitle}
                    </h3>
                    <p
                      className="mb-1 pb-2 "
                      style={{
                        wordSpacing: "4px",
                        lineHeight: "25px",
                        textAlign: "justify",
                      }}
                    >
                      "{about_Data.aboutDescription}"
                    </p>
                    <button
                      whileHover="hover"
                      type="button"
                      className="btn btn-primary btn-md"
                      
                      onClick={moreAbout}
                    >
                      {about_Data.aboutBtnTxt}
                    </button>
                  </div>

                  <div
                    className="col-md-6 wow fadeInRight"
                    data-wow-delay="0.2s"
                  >
                    <img
                      src={about_page}
                      alt=""
                      className="img-fluid"
                      style={{ width: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default About;
