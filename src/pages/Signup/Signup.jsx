import React, { useState } from "react";
//navigating
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//form handling from react hook form
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const theme = createTheme();

export default function Signup() {
  let navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  //usestate object for student
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
    email: "",
    age:"",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  //onchange student fields
  let name, value;
  const handleStudentInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  //form submission
  const onSubmit = async (a, e) => {
    e.preventDefault();
    const { fName, lName, email,age, phone, password, confirmPassword } = student;

    //url
    // const url = "http://localhost:5000/student/new"
    //fetch signup api
    const res = await fetch("/author/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName,
        lName,
        email,
        age,
        phone,
        password,
        confirmPassword,
      }),
    });

    //check if register successfully
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("failed");
    } else {
      Swal.fire(
        "Successfully Registered!",
        "Confirmation Link send plz verify your email!",
        "success"
      );
      setMsg(data.message);
    }
  };

  //return
  return (
    <div className="signup_div">
    <ThemeProvider theme={theme}>
      <div className="pt-1">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Become An Author
            </Typography>
            <Box
              method="POST"
              encType="multipart/form-data"
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("fName", {
                      required: true,
                      minLength: 3,
                      className: "is-invalid",
                    })}
                    autoComplete="given-name"
                    name="fName"
                    value={student.fName}
                    onChange={handleStudentInput}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                    style={{ color: "white" }}
                  />
                  {errors.fName && errors.fName.type === "required" && (
                    <p
                      className="text-danger font-italic"
                      style={{
                        fontSize: "13px",
                        paddingTop: "5px",
                      }}
                    >
                      First Name is Required
                    </p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("lName", {
                      required: true,
                      minLength: 3,
                      className: "is-invalid",
                    })}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lName"
                    value={student.lName}
                    onChange={handleStudentInput}
                    autoComplete="family-name"
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                  />
                  {errors.lName && errors.lName.type === "required" && (
                    <p
                      className="text-danger font-italic"
                      style={{
                        fontSize: "13px",
                        paddingTop: "5px",
                      }}
                    >
                      Last Name is Required
                    </p>
                  )}
                </Grid>
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
                    value={student.email}
                    onChange={handleStudentInput}
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
                <Grid item xs={12}>
                  <TextField
                    {...register("age", {
                      required: true,
                      className: "is-invalid",
                    })}
                    type="number"
                    required
                    fullWidth
                    id="age"
                    label="Your Age"
                    name="age"
                    value={student.age}
                    onChange={handleStudentInput}
                    autoComplete="family-name"
                  />
                  {errors.age &&
                    errors.age.type === "required" && (
                      <p
                        className="text-danger"
                        style={{
                          fontSize: "13px",
                          paddingTop: "5px",
                        }}
                      >
                        Age is Required
                      </p>
                    )}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    {...register("phone", {
                      required: true,
                      minLength: 11,
                      maxLength: 12,
                      className: "is-invalid",
                    })}
                    required
                    fullWidth
                    id="mobile_no"
                    label="Mobile no"
                    name="phone"
                    value={student.phone}
                    onChange={handleStudentInput}
                    autoComplete="family-name"
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <p
                      className="text-danger font-italic"
                      style={{
                        fontSize: "13px",
                        paddingTop: "5px",
                      }}
                    >
                      mobileNo is Required
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "minLength" && (
                    <p
                      className="text-danger font-italic"
                      style={{
                        fontSize: "13px",
                        paddingTop: "5px",
                      }}
                    >
                      Atleast 11 digits
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "maxLength" && (
                    <p
                      className="text-danger font-italic"
                      style={{
                        fontSize: "13px",
                        paddingTop: "5px",
                      }}
                    >
                      No more than 12 digits
                    </p>
                  )}
                </Grid>

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
                    value={student.password}
                    onChange={handleStudentInput}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                  />
                  {errors.password && errors.password.type === "required" && (
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
                  {errors.password && errors.password.type === "minLength" && (
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
                  {errors.password && errors.password.type === "maxLength" && (
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
                    value={student.confirmPassword}
                    onChange={handleStudentInput}
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
                        className="text-danger font-italic"
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
                        className="text-danger font-italic"
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
              </Grid>
              {msg && <div className="success_msg mt-3">{msg}</div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="btn-pink"
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item className="mb-5">
                  <NavLink to="/login" variant="body2" className="white-text">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
    </div>
  );
}
