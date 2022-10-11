import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//profile
const Profile = () => {
  let navigate = useNavigate();

  const EditProfile = () => {
    navigate("/author-dashboard/profile/edit-profile");
  };

  const [loginedAuthor, setloginedAuthor] = useState({});

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
      setloginedAuthor(data);
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    gettingAuthorData();
  }, []);

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
    <div>
      <section>
        {loader ? (
          <SLoader />
        ) : (
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <nav
                  aria-label="breadcrumb"
                  className="bg-light rounded-3 p-3 mb-4"
                >
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Author</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Author Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "100px" }}
                    />
                    <h5 className="my-3">{loginedAuthor.fName}</h5>
                    <p className="text-muted mb-1">{loginedAuthor._id}</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={EditProfile}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {loginedAuthor.fName + " " + loginedAuthor.lName}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{loginedAuthor.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{loginedAuthor.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Age</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{loginedAuthor.age}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">ID</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{loginedAuthor._id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
