import { connect } from "react-redux";
import { getProductsInCart } from "../selectors";
import { Grid } from "@material-ui/core";
import ConnectedProductAddedToCartDetailView from "./ProductAddedToCartDetailView";
import ConnectedPaymentSummary from "./PaymentSummary";

import styled from "@emotion/styled";

const StyledCartSummaryContainer = styled(Grid)`
  padding: 20px;
`;

const CartSummary = ({ productsInCart }) => {
  return (
    <StyledCartSummaryContainer container md={12} direction="row">
      <Grid
        container
        md={8}
        alignItems={productsInCart.length > 0 ? "flex-start" : "center"}
        justifyContent={productsInCart.length > 0 ? "flex-start" : "center"}
      >
        {productsInCart.length > 0 ? (
          productsInCart.map((productsInCart) => {
            return (
              <ConnectedProductAddedToCartDetailView
                productId={productsInCart.productId}
              />
            );
          })
        ) : (
          <h1>No Items added to cart</h1>
        )}
      </Grid>
      <ConnectedPaymentSummary />
    </StyledCartSummaryContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInCart: getProductsInCart(state),
  };
};

export default connect(mapStateToProps)(CartSummary);
