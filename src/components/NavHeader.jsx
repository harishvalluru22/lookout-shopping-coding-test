import { Grid } from "@material-ui/core";
import { StyledNavHeaderContainer, StyledNavLink } from "../styles";

export const NavHeader = () => {
  return (
    <StyledNavHeaderContainer
      container
      md={12}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item>
        <StyledNavLink to="/">Product List</StyledNavLink>
      </Grid>
      <Grid item>
        <StyledNavLink to="/product-cart">Cart</StyledNavLink>
      </Grid>
    </StyledNavHeaderContainer>
  );
};
