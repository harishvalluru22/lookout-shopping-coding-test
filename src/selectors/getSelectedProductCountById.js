import { createSelector } from "reselect";

const getCartProducts = (state) => {
  return state.productsAddedToCart;
};

const getProductId = (state, id) => id;

export const getSelectedProductCountById = createSelector(
  [getCartProducts, getProductId],
  (productsInCart, productId) =>
    productsInCart &&
    productsInCart.find((product) => product.productId === productId)
);
