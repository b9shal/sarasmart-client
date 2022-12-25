import { httpClient } from "../config/httpClient";

export const getAllProduct = async () => {
  try {
    let res = await httpClient.get(`/api/product/all-product`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByCategory = async (catId) => {
  try {
    let res = await httpClient.post(`/api/product/product-by-category`, {
      catId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const productByPrice = async (price) => {
  try {
    let res = await httpClient.post(`/api/product/product-by-price`, {
      price,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
