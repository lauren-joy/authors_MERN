import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import { navigate } from "@reach/router";
import "../App.css";

const Main = (props) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/getall")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (authorId) => {
      setAuthors(authors.filter((author)=> author._id !== authorId))
  };
  const editButton = (id) => {
    navigate(id + "/update");
  };

  return (
    <div className="wrapper">
      <h1>Favorite authors</h1>
      <Link to={"/create"}>Add an author</Link>
      <p>We have quotes by:</p>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions avalialbe</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx) => {
            return (
              <tr key={idx}>
                <td>{author.name}</td>
                <td>
                  <button
                    className="btn btn-secondary btn1"
                    onClick={()=>editButton(author._id)}
                  >
                    Edit
                  </button>
                  <DeleteButton 
                  id={author._id} 
                  onDeleteFunctionProp={() => handleDelete(author._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
