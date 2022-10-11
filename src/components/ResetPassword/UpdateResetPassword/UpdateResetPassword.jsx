import React, { useState, useEffect } from "react";
// import "./UpdateResetPassword.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//for handling forms
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";

//404
// import Error404 from "../../404Page/Error404";

//reset password
const UpdateResetPassword = () => {
  //params
  const param = useParams();

  //react hook form methods
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validUrl, setValidUrl] = useState(false);

  //error if email not Verified
  const [msg, setMsg] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  //onsubmit
  const onSubmit = async (a, e) => {
    e.preventDefault();

    //url
    const url = `http://localhost:5000/author/update-author-password/${param.id}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        password,
        confirmPassword,
      }),
    });
    //validation on data
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("not updated");
      setPassword("");
      setConfirmPassword("");
    } else {
      window.alert("password updated!");
      setPassword("");
      setConfirmPassword("");
    }
  };

  //VerifyEmailUrl
  const VerifyEmailUrl = async () => {
    //url
    const url = `http://localhost:5000/author/${param.id}/reset/${param.resetToken}`;

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
        <header>
          <div
            className="view"
            style={{ height: "500px" }}
          >
            <div className="mask">
              <div className="container h-100">
                <div className="container py-5">
                  <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    <Box
                      method="POST"
                      component="form"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                    >
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 text-center">
                          <h4 className="font-weight-bold mb-lg-4 mt-5">
                            Enter New Password
                          </h4>
                          <div
                            className="wow fadeInRight mb-4"
                            data-wow-delay="0.2s"
                          >
                            <Grid item xs={12}>
                              <TextField
                                {...register("password", {
                                  required: true,
                                  minLength: 4,
                                  maxLength: 8,
                                  className: "is-invalid",
                                })}
                                required
                                fullWidth
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                InputLabelProps={{
                                  style: { color: "grey" },
                                }}
                              />
                              {errors.password &&
                                errors.password.type === "required" && (
                                  <p
                                    className="text-danger font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    Password is Required
                                  </p>
                                )}
                              {errors.password &&
                                errors.password.type === "minLength" && (
                                  <p
                                    className="text-danger font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    Atleast 4 characters
                                  </p>
                                )}
                              {errors.password &&
                                errors.password.type === "maxLength" && (
                                  <p
                                    className="text-danger font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    No more than 8 characters
                                  </p>
                                )}
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                              <TextField
                                {...register("confirmPassword", {
                                  required: true,
                                  minLength: 4,
                                  maxLength: 8,
                                  className: "is-invalid",
                                })}
                                required
                                fullWidth
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                                label="confirm password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                InputLabelProps={{
                                  style: { color: "grey" },
                                }}
                              />
                              {errors.confirmPassword &&
                                errors.confirmPassword.type === "required" && (
                                  <p
                                    className="text-warning font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    Confirm Password is Required
                                  </p>
                                )}
                              {errors.confirmPassword &&
                                errors.confirmPassword.type === "minLength" && (
                                  <p
                                    className="text-warning font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    Atleast 4 characters
                                  </p>
                                )}
                              {errors.confirmPassword &&
                                errors.confirmPassword.type === "maxLength" && (
                                  <p
                                    className="text-warning font-italic"
                                    style={{
                                      fontSize: "13px",
                                      paddingTop: "5px",
                                    }}
                                  >
                                    No more than 8 characters
                                  </p>
                                )}
                            </Grid>
                          </div>
                          {msg && (
                            <div className="success_msg mt-3 mb-4">{msg}</div>
                          )}
                          <button
                            type="submit"
                            className="green_btn white-text"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </Box>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
       <h2>404 Error</h2>
      )}
    </div>
  );
};

export default UpdateResetPassword;
