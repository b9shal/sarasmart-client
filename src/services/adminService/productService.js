import { httpClient } from "../../config/httpClient";

export const createPorductImage = async ({ pImage }) => {
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
};

export const createProduct = async ({
  pName,
  pDescription,
  pImage,
  pStatus,
  pCategory,
  pQuantity,
  pPrice,
  pOffer,
}) => {
  let formData = new FormData();
  for (const file of pImage) {
    formData.append("pImage", file);
  }
  formData.append("pName", pName);
  formData.append("pDescription", pDescription);
  formData.append("pStatus", pStatus);
  formData.append("pCategory", pCategory);
  formData.append("pQuantity", pQuantity);
  formData.append("pPrice", pPrice);
  formData.append("pOffer", pOffer);

  try {
    let res = await httpClient.post(`/api/product/add-product`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (product) => {
  console.log(product);
  let formData = new FormData();
  if (product.pEditImages) {
    for (const file of product.pEditImages) {
      formData.append("pEditImages", file);
    }
  }
  formData.append("pId", product.pId);
  formData.append("pName", product.pName);
  formData.append("pDescription", product.pDescription);
  formData.append("pStatus", product.pStatus);
  formData.append("pCategory", product.pCategory._id);
  formData.append("pQuantity", product.pQuantity);
  formData.append("pPrice", product.pPrice);
  formData.append("pOffer", product.pOffer);
  formData.append("pImages", product.pImages);

  try {
    let res = await httpClient.post(`/api/product/edit-product`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (pId) => {
  try {
    let res = await httpClient.post(`/api/product/delete-product`, { pId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
