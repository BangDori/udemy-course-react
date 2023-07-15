import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const parmas = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>This Product is {parmas.productId}</p>
      <p>
        <Link to="../" relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
