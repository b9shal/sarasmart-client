import { httpClient } from "../../../config/httpClient";

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await httpClient.post(`/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
