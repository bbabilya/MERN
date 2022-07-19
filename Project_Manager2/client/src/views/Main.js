import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/productform";
import ProductList from "../components/productlist";

const Main = (props) => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.products);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && <ProductList products={product} />}
    </div>
  );
};

export default Main;
