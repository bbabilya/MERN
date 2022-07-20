import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product/new", {
        title,
        price,
        description,
      })
      .then((res) => {console.log(res)
      props.loadList()})
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
