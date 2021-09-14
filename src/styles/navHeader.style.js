import styled from "@emotion/styled";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export const StyledNavHeaderContainer = styled(Grid)`
  height: 40px;
  background-color: steelblue;
  color: white;
`;

export const StyledNavLink = styled(Link)`
  padding: 0 40px;
  color: white;
  font-size: 18px;
`;
