import React from "react";

//import skeleton loader from loading-skeleton package
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//loader component for blogs
const LoaderforBlog = () => {

  //return statement
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-lg-5 col-xl-4">
          <div className="view overlay rounded mb-lg-0 mb-4">
            <Skeleton width={340} height={160} borderRadius="2%" />
            
          </div>
        </div>

        <div className="col-lg-7 col-xl-8">
          <h4 className="font-weight-bold mb-3">
            <strong>
              <Skeleton width={230} height={25} />
            </strong>
          </h4>

          <p className="dark-grey-text">
            <Skeleton width={430} height={90} />
          </p>

          <p>
            <Skeleton width={230} height={20} />
          </p>

          <a href="/blogs" className=" btn-md mx-0 btn-rounded">
            {" "}
            <Skeleton width={100} height={40} />
          </a>
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default LoaderforBlog;
