import { httpClient } from "../../config/httpClient";

export const DashboardData = async () => {
  try {
    let res = await httpClient.post(`/api/customize/dashboard-data`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSliderImages = async () => {
  try {
    let res = await httpClient.get(`/api/customize/get-slide-image`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUploadImage = async (formData) => {
  try {
    let res = await httpClient.post(
      `/api/customize/upload-slide-image`,
      formData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteImage = async (id) => {
  try {
    let res = await httpClient.post(`/api/customize/delete-slide-image`, {
      id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
