import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../card-dropdown/cart-dropdown";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT
            </span>
          ) : (
            <Link className="sign-in" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
