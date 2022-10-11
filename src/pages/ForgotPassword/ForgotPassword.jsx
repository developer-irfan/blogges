import React, { useState } from "react";
import "./ForgotPassword.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//for handling forms
import { useForm } from "react-hook-form";

//reset password
const ForgotPassword = () => {
  //react hook form methods

  const [email, setEmail] = useState("");
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

    //fetch api
    const res = await fetch("/author/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({email}),
    });

    //validation on data
    const data = await res.json();
    if (res.status === 422 || !data) {
      setEmail("");
      setMsg(data.error)
    } else {
      setEmail("");
      setMsg(data.message)
    }
  };

  //return
  return (
    <div className="fp_div">
      <header>
        <div className="view" style={{ height: "500px" }}>
          <div className="mask">
            <div className="container h-100">
              <div className="container my-5 py-5">
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
                          Reset Your Password
                        </h4>
                        <div
                          className="wow fadeInRight mb-4"
                          data-wow-delay="0.2s"
                        >
                          <Grid item xs={12}>
                            <TextField
                              {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{1,}$/,
                              })}
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              autoComplete="email"
                              InputLabelProps={{
                                style: { color: "grey" },
                              }}
                            />
                            {errors.email && errors.email.type === "required" && (
                              <p
                                className="text-danger font-italic"
                                style={{
                                  fontSize: "13px",
                                  paddingTop: "5px",
                                }}
                              >
                                Email Required
                              </p>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                              <p
                                className="text-danger font-italic"
                                style={{
                                  fontSize: "13px",
                                  paddingTop: "5px",
                                }}
                              >
                                Invalid Email Adress
                              </p>
                            )}
                          </Grid>
                        </div>
                        {msg && <div className="success_msg mt-3 mb-4">{msg}</div>}
                        <button type="submit" className="btn btn-md btn-primary">
                          Reset
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
    </div>
  );
};

export default ForgotPassword;
