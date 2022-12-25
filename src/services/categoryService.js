import { httpClient } from "../config/httpClient";

export const getAllCategory = async () => {
  try {
    let res = await httpClient.get(`/api/category/all-category`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
