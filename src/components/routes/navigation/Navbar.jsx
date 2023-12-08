import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  Button,
} from "./navigation.styles";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo /> <span>
          King's Clothing
          </span>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <Button as="span" onClick={signOutUser}>
              {" "}
              Sign Out
            </Button>
          ) : (
            <div>
              <Button to="auth/log-in">Log In</Button>
              <Button to="auth/register">Register</Button>
            </div>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
