import React, { useContext } from "react";
import "./FeaturedInfo.css";
import CreateContext from "../../../../Context/CreateContext";

export default function FeaturedInfo() {
  //getting all blogs from context
  const { blogDatas } = useContext(CreateContext);
  const [AllBlogData] = blogDatas;

  //authors
  const { authors } = useContext(CreateContext);
  const [AllAuthors] = authors;

  //return statment
  return (
    <div className="featured ml-xl-5 ml-lg-5">
      <div
        className="featuredItem card bg-success shadow-lg"
        style={{ width: "300px" }}
      >
        <span className="featuredTitle">
          Total Authors
          <i class="fas fa-users featuredIcon" style={{ color: "white" }}></i>
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{AllAuthors.length}</span>
        </div>
      </div>
      <div className="featuredItem card  bg-info shadow-lg">
        <span className="featuredTitle">
          Total Blogs
          <i class="fab fa-blogger featuredIcon" style={{ color: "white" }}></i>
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{AllBlogData.length}</span>
        </div>
      </div>
      <div className="featuredItem card  bg-primary shadow-lg">
        <span className="featuredTitle">
          Users
          <i class="fab fa-blogger featuredIcon" style={{ color: "white" }}></i>
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">67</span>
        </div>
      </div>
    </div>
  );
}
