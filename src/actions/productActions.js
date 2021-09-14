export const addProductToStoreAction = (products) => {
  return {
    type: "ADD_PRODUCTS_TO_STORE",
    payload: {
      products,
    },
  };
};

export const addProductToCartAction = ({ productId, count }) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      productId,
      count,
    },
  };
};
