import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/productform";
import ProductList from "../components/productlist";

const Main = (props) => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(true);

  const loadList = () => {
    setLoaded(!loaded);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [loaded]);
  console.log("Loaded State: " + loaded);

  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id != productId));
  };

  return (
    <div>
      <ProductForm loadList = {loadList} />
      <hr />
      <ProductList products={product} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
