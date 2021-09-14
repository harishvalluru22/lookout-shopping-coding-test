import { createSelector } from "reselect";

export const getProducts = (state) => {
  return state.products;
};

const getProductId = (state, id) => id;

export const getProductById = createSelector(
  [getProducts, getProductId],
  (products, productId) => products.find((product) => product.id === productId)
);
