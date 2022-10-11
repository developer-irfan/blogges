import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./EmailVerification.css";

//main funciton
function EmailVerification() {
  const [validUrl, setValidUrl] = useState(false);

  //params
  const param = useParams();

  //VerifyEmailUrl
  const VerifyEmailUrl = async () => {
    //url
    const url = `http://localhost:5000/author/${param.id}/verify/${param.token}`;

    //geting one
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValidUrl(true);
      })
      .catch((error) => {
        console.log(error);
        setValidUrl(false);
      });
  };

  useEffect(() => {
    VerifyEmailUrl();
  }, [param]);

  //return
  return (
    <div>
      {validUrl ? (
        <div>
          <header>
            <div
              className="view"
              style={{ height: "500px" }}
            >
              <div className="mask">
                <div className="container h-100">
                  <div className="container my-0 py-1">
                    <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 text-center">
                          <h4 className="font-weight-bold mb-lg-4 mt-5">
                            Email Verified Successfully
                          </h4>
                          <div
                            className="wow fadeInRight mb-5"
                            data-wow-delay="0.2s"
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/875/875541.png"
                              alt=""
                              className="img-fluid success_img"
                              style={{ width: "150px" }}
                            />
                          </div>
                          <Link to="/login">
                            <button className="green_btn white-text">Login</button>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      ) : (
        <h1>404 not found</h1>
      )}
    </div>
  );
}

export default EmailVerification;
