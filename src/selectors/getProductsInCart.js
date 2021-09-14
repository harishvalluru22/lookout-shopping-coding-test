import { createSelector } from "reselect";

const getCartProducts = (state) => {
  return state.productsAddedToCart;
};

export const getProductsInCart = createSelector(
  [getCartProducts],
  (productsInCart) => productsInCart
);
