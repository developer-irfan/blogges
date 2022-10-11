import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./CreateCourse.css";

//create course
const CreateCourse = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

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

  //use state for blogs
  const [blogs, setBlogs] = useState({
    blogTitle: "",
    blogImage: "",
    blogDiscription: "",
  });

  //handle input functions
  let name, value;
  const handleBlogsInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBlogs({ ...blogs, [name]: value });
  };

  //onsubmit function
  const onSubmit = async (a, e) => {
    e.preventDefault();
    const { blogTitle, blogImage, blogDiscription } = blogs;

    //fetch api
    const res = await fetch("/author/new-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogTitle,
        blogImage,
        blogDiscription,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error! Blog Added Failed",
      });
    } else {
      window.alert("Blog Added!");
      console.log("Blog added Successful!");
      navigate("/author-dashboard/manage-blogs");
      window.location.reload();
    }
  };

  useEffect(() => {
    gettingAuthorData();
  }, []);

  //return here
  return (
    <div className="container my-5" style={{ width: "750px" }}>
      <section>
        <div className="card card-list">
          <div className="card-header white d-flex justify-content-between align-items-center py-3">
            <p className="h5-responsive font-weight-bold mb-0">
              <i className="fab fa-blogger pr-2"></i>Create Blog
            </p>
          </div>
          <form
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="card-body">
              <input
                {...register("blogTitle", {
                  required: true,
                  className: "is-invalid",
                })}
                type="text"
                id="exampleForm2"
                name="blogTitle"
                value={blogs.blogTitle}
                onChange={handleBlogsInput}
                placeholder="Title"
                className="form-control rounded-0 mb-3"
              />
              {errors.blogTitle && errors.blogTitle.type === "required" && (
                <p
                  className="text-danger"
                  style={{
                    fontSize: "13px",
                    paddingTop: "5px",
                  }}
                >
                  Title is Required
                </p>
              )}

              <div className="custom-file mb-3">
                <input
                  {...register("blogImage", {
                    required: true,
                    className: "is-invalid",
                  })}
                  type="text"
                  className="form-control rounded-0 mb-3"
                  id="customFile"
                  placeholder="Image Link"
                  value={blogs.blogImage}
                  onChange={handleBlogsInput}
                />
                {errors.blogImage && errors.blogImage.type === "required" && (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    Image Link is Required
                  </p>
                )}
              </div>

              <textarea
                {...register("blogDiscription", {
                  required: true,
                  minLength: 30,
                  maxLength: 60,
                  className: "is-invalid",
                })}
                name="blogDiscription"
                value={blogs.blogDiscription}
                onChange={handleBlogsInput}
                id="post_content"
                placeholder="Description"
                className="form-control"
                style={{ height: "94px", width: "680px" }}
              ></textarea>
              {errors.blogDiscription &&
                errors.blogDiscription.type === "required" && (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    Description is Required
                  </p>
                )}
              {errors.blogDiscription &&
                errors.blogDiscription.type === "minLength" && (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    Atleast 30 words
                  </p>
                )}
              {errors.blogDiscription &&
                errors.blogDiscription.type === "maxLength" && (
                  <p
                    className="text-danger"
                    style={{
                      fontSize: "13px",
                      paddingTop: "5px",
                    }}
                  >
                    No more than 60 words
                  </p>
                )}
            </div>
            <div className="card-footer white py-3">
              <div className="text-right">
                <button
                  type="submit"
                  className="btn btn-primary btn-md px-3 my-0 mr-0"
                >
                  Add Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateCourse;
