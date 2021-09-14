import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";

const StyledProductCounter = styled(Grid)`
  span {
    padding: 0 10px;
  }
`;

export const ProductCounter = ({ count, onIncrement, onDecrement }) => {
  return (
    <StyledProductCounter>
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </StyledProductCounter>
  );
};
