import React, { Fragment } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";

const ProductCategory = () => {
  return (
    <Fragment>
      <div className="flex justify-between font-medium">
        <span className="text-md md:text-xl">Product By Categories</span>
      </div>
      <ProductCategoryDropdown />
    </Fragment>
  );
};

export default ProductCategory;
