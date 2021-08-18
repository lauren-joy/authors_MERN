import React, {useState} from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Create = (props) => {
  const [errors, setErrors] = useState([]);
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/author/addnew", data)
      .then(res => {
        navigate("/");
      })
      // .catch(err =>{ 
      //   console.log(err.response);
      //   setErrors(err.response.data.errors);
      // })
      .catch(err => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
      
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      {/* {errors.name ? <h4>{errors.name.message}</h4> : null} */}
      {errors.map((err,idx)=> <h4 key={idx}>{err}</h4>)}
      
      <Link to={"/"}>Home</Link>
      <p>Add a new author:</p>
      <div className="box">
        <Form onSubmitHandler={onSubmitHandler} initalName=""/>
        
      </div>
    </div>
  );
};

export default Create;
