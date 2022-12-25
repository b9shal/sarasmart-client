import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import {CategoryAds, ProductAds} from "./ProductAds";
import AllProductListing from "./AllProductListing";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      {/* all products */}
      <section className="section-title m-4 md:mx-8 md:my-6">
        <div className="container">
          <h1 className="container mx-auto  text-2xl"><span></span>All Products</h1>
        </div>
      </section>
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <AllProductListing />
      </section>
      {/* all products end */}
      {/* productAds */}
      <section className="m-4 md:mx-8 md:my-6">
      <ProductAds />
      <span className="p-1"></span>
      <ProductAds />

      </section>
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="section-title m-4 md:mx-8 md:my-6">
        <div className="container">
          {/* <h1 className="container mx-auto  text-2xl"><span></span>All Products</h1> */}
        </div>
      </section>

      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <SingleProduct />
      </section>

      {/* categoryAds */}
      <section className="section-title m-4 md:mx-8 md:my-6">
        <div className="container">
          <h1 className="tags">
            <span></span>
            Featured Category
            </h1>
        </div>
      <CategoryAds />
      </section>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
