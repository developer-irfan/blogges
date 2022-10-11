import React, { useState, useEffect } from "react";

//for viewing specific blog or comments using params
import { useParams } from "react-router-dom";

import LoaderforBlog from "./LoaderforBlog";

//Blog is specific blog when we want to display one blog in web page
const Blog = () => {
  //usestate for specific blog
  const [specificOneBlog, setspecificOneBlog] = useState({});

  //loader useState displayed for one second, 1000 ms = 1 second
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  //getting url id
  const { id } = useParams();
  const url = `/author/single-blog/${id}`;

  //geting one
  const specificBlog = () => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setspecificOneBlog(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    specificBlog();
  }, []);


  //return statement
  return (
    <div>
      <div className="container mt-5">
        {isLoading ? (
          <div>
            <LoaderforBlog />
          </div>
        ) : (
          <section className="text-justify">
            <figure className="figure">
              <img
                src={specificOneBlog.blogImage}
                className="figure-img img-fluid z-depth-1"
                alt="..."
              />
            </figure>
            <h6
              className="font-weight-bold"
              style={{ textTransform: "capitalize" }}
            >
              Title : {specificOneBlog.blogTitle}
            </h6>

            <p style={{ textTransform: "capitalize" }}>
              Description : {specificOneBlog.blogDiscription}
            </p>

            <hr />
          </section>
        )}

        {/* start */}
      </div>
    </div>
  );
};

export default Blog;
