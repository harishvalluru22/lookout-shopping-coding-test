import * as React from "react";
import { connect } from "react-redux";
import { getProducts, getProductsInCart } from "../selectors";
import { Grid } from "@material-ui/core";
import ConnectedProductAddedToCartDetailView from "./ProductAddedToCartDetailView";
import styled from "@emotion/styled";
import { getSubTotal, getTaxAmount } from "../helpers";

const taxPercentage = 10;

const StyledPaymentSummaryContainer = styled(Grid)`
  margin: 20px 0;
  padding: 0 70px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h3 {
    padding-left: 50px;
  }
  button {
    background-color: steelblue;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 40px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
`;

const StyledCartSummaryContainer = styled(Grid)`
  padding: 20px;
`;

const PaymentSummary = ({ totalItemsCount, subTotal, tax }) => {
  return (
    <StyledPaymentSummaryContainer container md={4} direction="column">
      <h2>Payment Summary</h2>
      <h3>Total Products added : {totalItemsCount}</h3>
      <h3>Tax Amount : {tax}</h3>
      <h3>Sub Total : {subTotal}</h3>
      <button>Checkout to payment</button>
    </StyledPaymentSummaryContainer>
  );
};

const mapStateToProps = (state) => {
  const availableProducts = getProducts(state);
  const productsInCart = getProductsInCart(state);
  const subTotal = getSubTotal(availableProducts, productsInCart);
  const taxAmount = getTaxAmount(subTotal, taxPercentage);
  return {
    totalItemsCount: productsInCart.length,
    subTotal: subTotal,
    tax: taxAmount,
  };
};

export default connect(mapStateToProps)(PaymentSummary);
