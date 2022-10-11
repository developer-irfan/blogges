import React, {useEffect} from "react";
import "./Home.css";
import Header_img from "../../Assets/Images/Header.png";
import { useNavigate } from "react-router-dom";

//imorting header data
import { home_Data } from "../../Data";

function Home() {
  let navigate = useNavigate();

  const readBlog = () => {
    navigate("/blogs");
  };

  //return statement
  return (
    <>
      <div className="home_div">
        <header>
          <div className="view" style={{ height: "500px" }}>
            <div className="mask">
              <div className="container h-100">
                <div className="row align-items-center">
                  {home_Data.map((data) => {
                    return (
                      <>
                        <div
                          className="col-md-6 wow fadeInLeft"
                          data-wow-delay="0.2s"
                        >
                          <h1 className="mb-3 header_title">{data.title}</h1>
                          <p
                            className="mb-2 pb-1"
                            style={{ wordSpacing: "4px", lineHeight: "25px" }}
                          >
                            {data.description}
                          </p>
                          <button
                            whileHover="hover"
                            type="button"
                            className="btn btn-primary btn-md ml-md-0"
                            // style={{borderRadius:"30px"}}
                            onClick={readBlog}
                          >
                            {data.btnText}
                          </button>
                        </div>

                        <div
                          className="col-md-6 wow fadeInRight"
                          data-wow-delay="0.2s"
                        >
                          <img src={Header_img} alt="" className="img-fluid" />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Home;
