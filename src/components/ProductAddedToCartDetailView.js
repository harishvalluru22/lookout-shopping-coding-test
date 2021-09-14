import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { getProductById } from "../selectors";

const StyledCartProductDetailContainer = styled(Grid)`
  margin: 20px 0;
  padding: 0 70px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const StyledPImageContainer = styled(Grid)`
  height: 150px;
  width: 200px;
  margin: 30px 0;
  display: flex;
`;

const ProductAddedToCartDetailView = ({ product }) => {
  return (
    <StyledCartProductDetailContainer
      container
      item
      md={11}
      alignItems="center"
      direction="row"
      style={{ margin: "20px 0" }}
    >
      <StyledPImageContainer container md={4} justify="center">
        <img
          src={product.image}
          alt={product.description}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </StyledPImageContainer>
      <Grid container md={8} direction="column">
        <h4>{product.title}</h4>
        <span>{product.description}</span>

        <h4>Price: {product.price}</h4>
      </Grid>
    </StyledCartProductDetailContainer>
  );
};

const mapStateToProps = (state, props) => {
  return {
    product: getProductById(state, props.productId),
  };
};

export default connect(mapStateToProps)(ProductAddedToCartDetailView);
