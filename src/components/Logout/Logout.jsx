import React, { useEffect } from "react";

//navigating b/w screens
import { useNavigate } from "react-router-dom";

//head logout
const Logout = () => {
  let navigate = useNavigate();

  //fetch logout head api
  useEffect(() => {
    fetch("/author/author-logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/login", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //return statement
  return (
    <div>
      <h2>Author-Logout</h2>
    </div>
  );
};

export default Logout;
