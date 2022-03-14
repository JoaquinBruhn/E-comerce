import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  let URLparams = useParams().category;

  return (
    <>
      <h3>This are the params</h3>
      <h2>{URLparams}</h2>
    </>
  );
};

export default Category;
