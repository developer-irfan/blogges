import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//edit profile
const EditProfile = () => {
  let navigate = useNavigate();

  //author data
  const gettingAuthorData = async () => {
    try {
      const res = await fetch("/author/author_auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [phone, setphone] = useState("");

  //funciton
  const gettingAuthorDataForUpdation = async () => {
    try {
      const res = await fetch("/author/author_auth", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setfName(data.fName);
      setlName(data.lName);
      setemail(data.email);
      setage(data.age);
      setphone(data.phone);
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingAuthorData();
    gettingAuthorDataForUpdation();
  }, []);

  const updateStudent = async (e) => {
    e.preventDefault();
    const res = await fetch("/author/update-profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName,
        lName,
        age,
        phone,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("student updated failed!");
    } else {
      window.alert("student updated Successful!");
      console.log("student updated Successful!");
    }
  };

  //usestates for Loader
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1000);

  const SLoader = () => {
    return (
      <div className="container" style={{ width: "800px" }}>
        <div class="border border-light p-5">
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
          <br />
          <Skeleton width={530} height={35} />
        </div>
      </div>
    );
  };

  //return
  return (
    <>
      <div className="container-xl px-4 mt-4">
        {loader ? (
          <SLoader />
        ) : (
          <div className="row">
            <div className="col-xl-4">
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt=""
                    style={{ width: "160px" }}
                  />

                  <div className="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>

                  <button className="btn btn-primary btn-md" type="file">
                    Upload new image
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="small mb-1" for="inputUsername">
                        Username (how your name will appear to other users on
                        the site)
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        placeholder="Enter your username"
                        defaultValue={fName}
                      />
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputFirstName">
                          First name
                        </label>
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Enter your first name"
                          defaultValue={fName}
                          onChange={(e) => setfName(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" for="inputLastName">
                          Last name
                        </label>
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Enter your last name"
                          defaultValue={lName}
                          onChange={(e) => setlName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <label className="small mb-1" for="inputOrgName">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="inputOrgName"
                          type="text"
                          placeholder="Enter your organization name"
                          defaultValue={email}
                          disabled
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="small mb-1" for="inputLocation">
                          Phone
                        </label>
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          placeholder="Enter your location"
                          defaultValue={phone}
                          onChange={(e) => setage(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="small mb-1" for="inputEmailAddress">
                        Age
                      </label>
                      <input
                        className="form-control"
                        id="inputEmailAddress"
                        type="Number"
                        placeholder="Your Age"
                        defaultValue={age}
                        onChange={(e) => setage(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={updateStudent}
                      className="btn btn-primary btn-md"
                    >
                      Save changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;
