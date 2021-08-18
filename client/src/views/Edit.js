import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id + "/getone")
      .then((res) => {
        console.log(res)
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/author/" + id + "/update", data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to="/">Home</Link>
      <p>Edit this author</p>
      <div className="box">
        {loaded && <Form onSubmitHandler={onSubmitHandler} initialName={author.name} />}
      </div>
    </div>
  );
};

export default Edit;
