import React, { useState } from "react";
//for navigating b/w screens
import { NavLink } from "react-router-dom";
import "./Login.css";

//importing avatar from package
import Avatar from "@mui/material/Avatar";
//for handling forms
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//buttons,box,grid etc
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

//login
const Login = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  //use states for student login data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error if email not Verified
  const [msg, setMsg] = useState("");

  const onSubmit = async (a, e) => {
    e.preventDefault();
    //fetch student api
    const res = await fetch("/author/author-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    //validation on data
    const data = await res.json();
    if (res.status === 400 || !data) {
      setEmail("");
      setPassword("");
      window.alert("login failed");
    } else if (
      res.status === 500 ||
      data.message === "Please verify your email first"
    ) {
      setEmail("");
      setPassword("");
      setMsg(data.message);
      console.log(data.message);
    } else {
      window.alert("Login Successful!");
      navigate("/author-dashboard");
    }
  };

  //return here
  return (
    <>
      <div className="login_div">
        <ThemeProvider theme={theme}>
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
                Login
              </Typography>
              <Box
                method="POST"
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{1,}$/,
                  })}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                {errors.email && errors.email.type === "required" && (
                  <p
                    className="text-danger"
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
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    Invalid Email Adress
                  </p>
                )}
                <TextField
                  {...register("password", {
                    required: true,
                    minLength: 4,
                    maxLength: 8,
                    className: "is-invalid",
                  })}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password && errors.password.type === "required" && (
                  <p
                    className="text-danger"
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
                    className="text-danger"
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
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    No more than 8 characters
                  </p>
                )}
                {msg && <div className="success_msg mt-3">{msg}</div>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <u>
                      <NavLink
                        exact="true"
                        to="/author/forgot-password"
                        variant="body2"
                      >
                        {"Forgot password? Click here"}
                      </NavLink>
                    </u>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Login;
