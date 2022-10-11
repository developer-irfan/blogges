import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CreateContext from "../../../../Context/CreateContext";
import "./ManageBlogs.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ManageBlogs() {
  // authentic page
  let navigate = useNavigate();
  const protectingTheRoute = async () => {
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
    protectingTheRoute();
  }, []);

  //getting all blogs from context
  const { blogDatas } = useContext(CreateContext);
  const [AllBlogData] = blogDatas;

  const DeleteBlog = async (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/author/delete-blog/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("deleted");
          })
          .catch((error) => {
            console.log("not deleted");
          });
        Swal.fire("Deleted!", "News has been deleted.", "success");
        window.location.reload();
      }
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "blogTitle",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.blogImage} alt="" />
            {params.row.blogTitle}
          </div>
        );
      },
    },
    { field: "blogDiscription", headerName: "Description", width: 300 },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => DeleteBlog(params.row._id)}
            />
          </>
        );
      },
    },
  ];

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

  return (
    <>
      {loader ? (
        <SLoader />
      ) : (
        <div
          className="productList my-5"
          style={{ width: "800px", height: "500px" }}
        >
          <Link to="/author-dashboard/create-blog">
            <button type="button" className="btn btn-sm btn-info">
              Create
            </button>
          </Link>
          <br />
          <DataGrid
            className="mt-2"
            rows={AllBlogData}
            disableSelectionOnClick
            columns={columns}
            pageSize={6}
            getRowId={(row) => row._id}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
}
