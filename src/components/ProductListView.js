import * as React from "react";
import { Grid } from "@material-ui/core";
import ConnectedProductWrapper from "./ProductViewWrapper";
import { getProducts } from "../selectors";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const StyleProductListContainer = styled(Grid)`
  padding: 20px;
`;

const ProductListView = ({ products }) => {
  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <StyleProductListContainer container>
      {productList.length > 0 &&
        productList.map((product) => {
          return <ConnectedProductWrapper productId={product.id} />;
        })}
    </StyleProductListContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView);
