import axios from 'axios';

export const getProducts = async () => {
  try {
    const result = await axios.get('https://fakestoreapi.com/products/');
    if (result.status == 200) {
      return result.data;
    }
  } catch (err) {
    return {};
  }
};
