export const getSubTotal = (availableProducts, productsInCart) => {
  const prices = productsInCart.map((product) => {
    return (
      product.count *
      availableProducts.find(
        (availableProduct) => availableProduct.id === product.productId
      ).price
    );
  });

  return prices.reduce((acc, current) => {
    acc = acc + current;
    return acc;
  }, 0);
};

export const getTaxAmount = (subtotal, taxPercentage) => {
  return ((subtotal / 100) * taxPercentage).toFixed(2);
};
