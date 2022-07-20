import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + id +"/delete")
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>

      <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
      <button onClick={deleteProduct}>Delete</button>

    </div>
  );
};

export default Detail;
