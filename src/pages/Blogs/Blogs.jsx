import React, { useContext, useState } from "react";
import "./Blogs.css";
import CreateContext from "../../Context/CreateContext";
import LoaderforBlog from "./LoaderforBlog";
import {NavLink} from "react-router-dom";

//blogs
const Blogs = () => {
  //getting all blogs from context
  const { blogDatas } = useContext(CreateContext);
  const [AllBlogData] = blogDatas;

  //loader useState displayed for one second, 1000 ms = 1 second
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  //return
  return (
    <>
    <div className="blogs_div mt-5" style={{marginTop:"100px"}}>
      <div className="container mt-5">
        <section className="dark-grey-text">
          <h2 className="text-center font-weight-bold mb-4 pb-2">Our Blogs</h2>

          <p className="text-center mx-auto w-responsive mb-5">
            All of our blogs are listed here!
          </p>

          {isLoading ? (
            <div>
              <LoaderforBlog />
              <LoaderforBlog />
              <LoaderforBlog />
            </div>
          ) : (
            <div>
              {AllBlogData.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="row align-items-center ">
                      <div className="col-lg-4">
                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                          <img
                            className="img-fluid"
                            src={value.blogImage}
                            alt="Sample image"
                          />
                          <a>
                            <div className="mask rgba-white-slight"></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-8">
                        <h4 className="font-weight-bold mb-3">
                          <strong>{value.blogTitle}</strong>
                        </h4>

                        <p>{value.blogDiscription}</p>

                        <p>
                          by{" "}
                          <a>
                            <strong>Carine Fox</strong>
                          </a>
                          , 19/08/2018
                        </p>

                        <NavLink
                          to={`/blogs/${value._id}`}
                          className="btn btn-info btn-md btn-rounded mx-0"
                        >
                          Read more
                        </NavLink>
                      </div>
                    </div>
                    <hr className="my-5" />
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
      </div>
    </>
  );
};

export default Blogs;
