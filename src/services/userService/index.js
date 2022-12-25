import { httpClient } from "../../config/httpClient";

export const getUserById = async (uId) => {
  try {
    let res = await httpClient.post(`/api/user/signle-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonalInformationFetch = async (userData) => {
  try {
    let res = await httpClient.post(`/api/user/edit-user`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (formData) => {
  try {
    let res = await httpClient.post(`/api/user/change-password`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (uId) => {
  try {
    let res = await httpClient.post(`/api/order/order-by-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBrainTreeToken = async () => {
  let uId = JSON.parse(localStorage.getItem("jwt")).user._id;
  try {
    let res = await httpClient.post(`/api/braintree/get-token`, {
      uId: uId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentProcess = async (paymentData) => {
  try {
    let res = await httpClient.post(`/api/braintree/payment`, paymentData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createOrder = async (orderData) => {
  try {
    let res = await httpClient.post(`/api/order/create-order`, orderData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
  try {
    let res = await httpClient.post(`/api/product/cart-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (pId) => {
  try {
    let res = await httpClient.post(`/api/product/single-product`, {
      pId: pId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddReview = async (formData) => {
  try {
    let res = await httpClient.post(`/api/product/add-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteReview = async (formData) => {
  try {
    let res = await httpClient.post(`/api/product/delete-review`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

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
