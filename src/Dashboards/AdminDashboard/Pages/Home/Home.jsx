import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import CreateContext from "../../../../Context/CreateContext";
function Home() {
  let navigate = useNavigate();
  //authors
  const { authors } = useContext(CreateContext);
  const [AllAuthors] = authors;

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

  useEffect(() => {
    gettingAuthorData();
  }, []);

  //return
  return (
    <>
      <div className="featuredinfo mt-5" style={{ marginLeft: "120px" }}>
        <FeaturedInfo />
        <Chart data={AllAuthors} title="Author Analytics" grid dataKey="age" />
        <div className="homeWidgets"></div>
      </div>
    </>
  );
}

export default Home;
