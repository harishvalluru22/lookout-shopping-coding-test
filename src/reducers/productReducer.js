const preloadedState = {
  products: [],
  productsAddedToCart: [],
};

export const productReducer = (state = preloadedState, action) => {
  if (action.type === "ADD_PRODUCTS_TO_STORE") {
    return { ...state, products: action.payload.products };
  } else if (action.type === "ADD_TO_CART") {
    const productExistedInCart = state.productsAddedToCart.find(
      (product) => product.productId === action.payload.productId
    );
    const filteredState = state.productsAddedToCart.filter(
      (product) => product.productId !== action.payload.productId
    );
    if (productExistedInCart) {
      productExistedInCart.count = action.payload.count;
      return {
        ...state,
        productsAddedToCart: [...filteredState, productExistedInCart],
      };
    } else {
      state.productsAddedToCart.push(action.payload);
    }
    return state;
  } else {
    return state;
  }
};
