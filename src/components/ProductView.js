import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { getProductById } from "../selectors";

const StyledProductContainer = styled(Grid)`
  height: 150px;
  width: 200px;
  margin: 30px 0;
  display: flex;
`;

const ProductView = ({ product }) => {
  return (
    <Grid
      container
      item
      alignItems="center"
      direction="column"
      style={{ padding: "0 70px" }}
    >
      <StyledProductContainer justify="center">
        <img
          src={product.image}
          alt={product.description}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </StyledProductContainer>
      <p>{product.title}</p>
      <h4>Price: {product.price}</h4>
    </Grid>
  );
};

const mapStateToProps = (state, props) => {
  return {
    product: getProductById(state, props.productId),
  };
};

export default connect(mapStateToProps)(ProductView);
