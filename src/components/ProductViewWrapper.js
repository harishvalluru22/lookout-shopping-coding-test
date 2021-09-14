import * as React from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import { ProductCounter } from "./ProductCounter";
import { connect } from "react-redux";
import { addProductToCartAction } from "../actions";
import ConnectedProductView from "./ProductView";
import { getSelectedProductCountById } from "../selectors";

const StyledProductViewContainer = styled(Grid)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  button {
    background-color: steelblue;
    border: none;
    color: white;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

const ProductViewWrapper = ({
  productId,
  productCount,
  onAddProductToCartAction,
}) => {
  const [count, setCount] = React.useState(productCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
  };

  const productCounterProps = {
    count: count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
  };

  const handleAddProductToCart = () => {
    count > 0 && onAddProductToCartAction({ productId, count });
  };

  return (
    <StyledProductViewContainer
      container
      item
      md={3}
      alignItems="center"
      direction="column"
    >
      <ConnectedProductView productId={productId} />
      <Grid item>
        <ProductCounter {...productCounterProps} />
      </Grid>
      <Grid item>
        <button onClick={() => handleAddProductToCart()}>Add to cart</button>
      </Grid>
    </StyledProductViewContainer>
  );
};

const mapStateToProps = (state, props) => {
  const productCount = getSelectedProductCountById(state, props.productId);
  return {
    productId: props.productId,
    productCount: productCount !== undefined ? productCount.count : 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductToCartAction: (product) => {
      dispatch(addProductToCartAction(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewWrapper);
