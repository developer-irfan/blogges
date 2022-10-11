import React, { useState, useEffect } from "react";
import CreateContext from "./CreateContext";

const FetchedData = (props) => {
  const [blogDatas, setBlogData] = useState([]);
  const [authors, setAuthors] = useState([]);
  //fetched blog data
  const blogData = () => {
    fetch("/author/all_blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  //fetching all authors
    //fetched user data
    const AllAuthors = () => {
        fetch("/author/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setAuthors(data);
            // console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };



  useEffect(() => {
    blogData();
    AllAuthors();
  }, []);

  return (
    <CreateContext.Provider
      value={{
        blogDatas: [blogDatas, setBlogData],
        authors: [authors, setAuthors],
      }}
    >
      {props.children}
    </CreateContext.Provider>
  );

};

export default FetchedData;
