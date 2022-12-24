import { httpClient } from "../../../config/httpClient";

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
