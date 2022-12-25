import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const ProductCategory = (props) => {
  const { data, dispatch } = useContext(HomeContext);

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
