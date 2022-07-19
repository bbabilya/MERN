import React from "react";
import axios from "axios";

const ProductList = (props) => {
  return (
    <div>
      {props.products.map((product, i) => (
        <p key={i}>
          <a href={`http://localhost:3000/product/${product._id}`}>
            {product.title}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
