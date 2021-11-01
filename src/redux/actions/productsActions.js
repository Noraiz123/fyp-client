import { getProducts } from "../../../pages/api/productsApi";

const getProductsAction = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  };
};

export const GetProducts = () => async (dispatch) => {
  try {
    const data = await getProducts();
    dispatch(getProductsAction(data));
  } catch (error) {
    console.log(error);
  }
};
